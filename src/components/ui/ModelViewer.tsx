"use client";

import { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Html, useProgress } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import * as THREE from "three";

// The room model and its textures are a large download, so show real progress
// rather than an indefinite spinner.
function Loader() {
  const { progress } = useProgress();
  const percent = Math.min(100, Math.round(progress));

  return (
    <Html center>
      <div
        className="flex w-56 flex-col items-center gap-3"
        role="status"
        aria-live="polite"
      >
        <div className="h-1 w-full overflow-hidden rounded-full bg-foreground/10">
          <div
            className="h-full origin-left bg-foreground transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${percent / 100})` }}
          />
        </div>
        <p className="whitespace-nowrap font-gt-america text-caption uppercase tracking-normal text-foreground-muted">
          loading 3d model — {percent}%
        </p>
      </div>
    </Html>
  );
}

function Model({ objUrl, mtlUrl }: { objUrl: string; mtlUrl?: string }) {
  const basePath = (mtlUrl || objUrl).substring(0, (mtlUrl || objUrl).lastIndexOf("/") + 1);

  const materials = useLoader(MTLLoader, mtlUrl || "", (loader) => {
    loader.setResourcePath(basePath);
  });

  const obj = useLoader(OBJLoader, objUrl, (loader) => {
    if (materials) {
      materials.preload();
      loader.setMaterials(materials);
    }
  });

  const centered = useMemo(() => {
    const clone = obj.clone();
    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim;

    clone.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    clone.scale.setScalar(scale);
    return clone;
  }, [obj]);

  return <primitive object={centered} />;
}

/**
 * Sits outside the Canvas and only appears once loading has finished, so the
 * page never advertises controls that do not respond yet. Subscribing here
 * rather than in the parent keeps progress updates from re-rendering the scene.
 */
function ControlsHint() {
  const active = useProgress((state) => state.active);
  if (active) return null;

  return (
    <div className="pointer-events-none absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 px-2 text-center">
      <p className="inline-block rounded-full bg-white/70 px-4 py-1.5 font-gt-america text-[10px] uppercase tracking-normal text-foreground-muted backdrop-blur-sm">
        drag to rotate &middot; scroll to zoom &middot; right-click to pan
      </p>
    </div>
  );
}

interface ModelViewerProps {
  modelUrl: string;
  mtlUrl?: string;
  className?: string;
}

export default function ModelViewer({ modelUrl, mtlUrl, className = "" }: ModelViewerProps) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [4, 3, 4], fov: 45, near: 0.1, far: 100 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
          <directionalLight position={[-3, 4, -2]} intensity={0.3} />
          <Model objUrl={modelUrl} mtlUrl={mtlUrl} />
          <Environment preset="city" />
          <OrbitControls
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.8}
            zoomSpeed={0.8}
            minDistance={1.5}
            maxDistance={12}
            enablePan
          />
        </Suspense>
      </Canvas>

      <ControlsHint />
    </div>
  );
}
