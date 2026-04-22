"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/ui/ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-background-subtle">
      <div className="flex flex-col items-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
        <p className="font-mono text-caption uppercase tracking-normal text-foreground-subtle">
          loading 3d model...
        </p>
      </div>
    </div>
  ),
});

export default function ModelViewerWrapper({
  modelUrl,
  mtlUrl,
  className,
}: {
  modelUrl: string;
  mtlUrl?: string;
  className?: string;
}) {
  return <ModelViewer modelUrl={modelUrl} mtlUrl={mtlUrl} className={className} />;
}
