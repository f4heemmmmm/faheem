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

function smoothFactor(speed: number, delta: number) {
  return 1 - Math.pow(1 - speed, delta * 60);
}

function smoothStep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

const CARD_SPACING = 4.4;
const CARD_W = 4.0;
const CARD_H = 3.2;
const CARD_RADIUS = 0.12;

const CARD_ROT_Y = -0.38;
const CARD_ROT_X = -0.45;

function createRoundedRectShape(w: number, h: number, r: number) {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r);
  shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  return shape;
}

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

let _sharedGeo: THREE.ShapeGeometry | null = null;
function getSharedGeometry() {
  if (!_sharedGeo) {
    const shape = createRoundedRectShape(CARD_W, CARD_H, CARD_RADIUS);
    const geo = new THREE.ShapeGeometry(shape, 8);
    const pos = geo.attributes.position;
    const uvs = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      uvs[i * 2] = (pos.getX(i) + CARD_W / 2) / CARD_W;
      uvs[i * 2 + 1] = (pos.getY(i) + CARD_H / 2) / CARD_H;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    _sharedGeo = geo;
  }
  return _sharedGeo;
}

function Card({ url, opacity }: { url: string; opacity: number }) {
  const isLocal = url.startsWith("/");
  const texture = useLoader(
    THREE.TextureLoader,
    isLocal ? url : "/images/website.png"
  );
  const geometry = useMemo(getSharedGeometry, []);

  useMemo(() => {
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 8;
    texture.generateMipmaps = true;
  }, [texture]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        toneMapped={false}
      />
    </mesh>
  );
}

function PlaceholderCard({ opacity = 0.25 }: { opacity?: number }) {
  const geometry = useMemo(getSharedGeometry, []);
  return (
    <mesh geometry={geometry}>
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
  const lerpSpeed = 0.1;

  const cards = useMemo(
    () => items.map((item, index) => ({ ...item, index })),
    [items]
  );

  useFrame((_state, delta) => {
    const dt = Math.min(delta, 0.1);
    const factor = smoothFactor(lerpSpeed, dt);
    const currentFloating = floatingIndexRef.current ?? 0;

    cardGroupRefs.current.forEach((group, i) => {
      if (!group) return;

      const offset = i - currentFloating;
      const dist = Math.abs(offset);

      const targetScale = clamp(1.3 - dist * dist * 0.12, 0.62, 1.3);
      const targetY = -offset * CARD_SPACING;
      const targetZ = -dist * dist * 0.25;
      const targetOpacity = 1 - smoothStep(0, 3.5, dist);

      group.position.y = lerp(group.position.y, targetY, factor);
      group.position.z = lerp(group.position.z, targetZ, factor);
      group.scale.setScalar(lerp(group.scale.x, targetScale, factor));

      const mesh = group.children[0] as THREE.Mesh | undefined;
      if (mesh?.isMesh) {
        const mat = mesh.material as THREE.MeshBasicMaterial;
        if (mat && "opacity" in mat) {
          mat.opacity = lerp(mat.opacity, clamp(targetOpacity, 0.12, 1), factor);
        }
      }
    });
  });

  return (
    <group
      ref={rigRef}
      position={[1.5, -0.05, 0]}
      rotation={[CARD_ROT_X, CARD_ROT_Y, -0.16]}
    >
      {cards.map((card, i) => {
        const offset = i - (floatingIndexRef.current ?? 0);
        const dist = Math.abs(offset);
        const initScale = clamp(1.3 - dist * dist * 0.12, 0.62, 1.3);
        const initOpacity = clamp(1 - smoothStep(0, 3.5, dist), 0.12, 1);
        return (
          <group
            key={card.id}
            ref={(el) => {
              cardGroupRefs.current[i] = el;
            }}
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
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 34, near: 0.1, far: 100 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[4, 6, 8]} intensity={0.6} />
        <Suspense fallback={null}>
          <ConveyorRig
            items={items}
            floatingIndexRef={floatingIndexRef}
            onCardClick={onCardClick}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Projects3DScene = memo(Projects3DSceneInner);
export default Projects3DScene;
