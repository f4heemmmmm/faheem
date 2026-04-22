"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Component, memo, Suspense, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

type SceneItem = {
  id: string;
  title: string;
  image: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerp(current: number, target: number, amount: number) {
  return current + (target - current) * amount;
}

// Frame-rate independent lerp factor: consistent across 60Hz, 120Hz, 144Hz etc.
function smoothFactor(speed: number, delta: number) {
  return 1 - Math.pow(1 - speed, delta * 60);
}

/* ─── conveyor belt constants ─── */
const CARD_SPACING = 4.4;
const CARD_W = 4.0;
const CARD_H = 3.2;

// Per-card rotation: left edge recedes inward, card tilts up/backwards
const CARD_ROT_Y = -0.38; // ~22° – left edge further from viewer, right edge closer
const CARD_ROT_X = -0.45; // ~26° – leaning back (top edge away from viewer)

/* ─── error boundary to catch texture load failures ─── */
class CardErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

/* ─── single card with texture ─── */
function Card({ url, opacity }: { url: string; opacity: number }) {
  const isLocal = url.startsWith("/");
  const texture = useLoader(THREE.TextureLoader, isLocal ? url : "/images/website.png");
  return (
    <mesh>
      <planeGeometry args={[CARD_W, CARD_H]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        toneMapped={false}
      />
    </mesh>
  );
}

/* ─── placeholder while loading / on error ─── */
function PlaceholderCard({ opacity = 0.25 }: { opacity?: number }) {
  return (
    <mesh>
      <planeGeometry args={[CARD_W, CARD_H]} />
      <meshBasicMaterial color="#d4d4d8" transparent opacity={opacity} />
    </mesh>
  );
}

function ConveyorRig({
  items,
  floatingIndexRef,
  onCardClick,
}: {
  items: SceneItem[];
  floatingIndexRef: React.RefObject<number>;
  onCardClick?: (index: number) => void;
}) {
  const rigRef = useRef<THREE.Group>(null);
  const cardGroupRefs = useRef<(THREE.Group | null)[]>([]);
  const lerpSpeed = 0.09; // base lerp speed per frame at 60fps

  // Static card data (no position/scale — those are lerped in useFrame)
  const cards = useMemo(() => items.map((item, index) => ({ ...item, index })), [items]);

  useFrame((_state, delta) => {
    // Clamp delta to avoid jumps after tab-switch or lag spikes
    const dt = Math.min(delta, 0.1);
    const factor = smoothFactor(lerpSpeed, dt);
    const currentFloating = floatingIndexRef.current ?? 0;

    cardGroupRefs.current.forEach((group, i) => {
      if (!group) return;

      // No wrapping — straight offset, first card has nothing above, last has nothing below
      const offset = i - currentFloating;
      const dist = Math.abs(offset);

      // Smooth ease curve: center card pops, neighbours shrink gracefully
      const ease = dist * dist; // quadratic falloff — snappy near center, gentle at edges
      const targetScale = clamp(1.3 - ease * 0.14, 0.62, 1.3);
      const targetY = -offset * CARD_SPACING;
      const targetZ = -ease * 0.3; // subtle depth push for distant cards
      const targetOpacity = clamp(1 - ease * 0.12, 0.15, 1);

      // Frame-rate independent smooth lerp for all properties
      group.position.y = lerp(group.position.y, targetY, factor);
      group.position.z = lerp(group.position.z, targetZ, factor);
      group.scale.setScalar(lerp(group.scale.x, targetScale, factor));

      // Update material opacity
      group.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          if (mat && "opacity" in mat) {
            mat.opacity = lerp(mat.opacity, targetOpacity, factor);
          }
        }
      });
    });
  });

  return (
    <group
      ref={rigRef}
      position={[1.5, -0.05, 0]}
      rotation={[CARD_ROT_X, CARD_ROT_Y, -0.16]}
    >
      {cards.map((card, i) => {
        // Initial values — no wrapping
        const offset = i - (floatingIndexRef.current ?? 0);
        const dist = Math.abs(offset);
        const ease = dist * dist;
        const initScale = clamp(1.3 - ease * 0.14, 0.62, 1.3);
        const initOpacity = clamp(1 - ease * 0.12, 0.15, 1);
        return (
          <group
            key={card.id}
            ref={(el) => { cardGroupRefs.current[i] = el; }}
            position={[0, -offset * CARD_SPACING, 0]}
            scale={initScale}
            renderOrder={1000 - Math.round(dist)}
            onClick={(e) => {
              e.stopPropagation();
              onCardClick?.(i);
            }}
            onPointerOver={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "auto";
            }}
          >
            <CardErrorBoundary
              fallback={<PlaceholderCard opacity={initOpacity} />}
            >
              <Suspense
                fallback={<PlaceholderCard opacity={initOpacity * 0.5} />}
              >
                <Card url={card.image} opacity={initOpacity} />
              </Suspense>
            </CardErrorBoundary>
          </group>
        );
      })}
    </group>
  );
}

function Projects3DSceneInner({
  items,
  floatingIndexRef,
  onCardClick,
}: {
  items: SceneItem[];
  floatingIndexRef: React.RefObject<number>;
  onCardClick?: (index: number) => void;
}) {
  return (
    <div className="absolute inset-y-0 right-0 w-full">
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 10], fov: 34, near: 0.1, far: 100 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[4, 6, 8]} intensity={0.6} />
        <Suspense fallback={null}>
          <ConveyorRig items={items} floatingIndexRef={floatingIndexRef} onCardClick={onCardClick} />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Projects3DScene = memo(Projects3DSceneInner);
export default Projects3DScene;
