"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import * as THREE from "three";

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
        <p className="font-mono text-caption uppercase tracking-normal text-foreground-subtle">
          loading model...
        </p>
      </div>
    </Html>
  );
}

function Model({ objUrl, mtlUrl }: { objUrl: string; mtlUrl?: string }) {
  // Set resource path so textures resolve relative to the MTL/OBJ directory
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

  // Center and scale the model
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

      {/* Controls hint */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
        <p className="rounded-full bg-foreground/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-normal text-foreground-subtle backdrop-blur-sm">
          drag to rotate &middot; scroll to zoom &middot; right-click to pan
        </p>
      </div>
    </div>
  );
}
