import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "experience | faheem",
  description: "my professional experience, education, and service.",
};

export default function ExperiencePage() {
  return (
    <div className="page-shell bg-[#2e2e2e]">
      <main id="main-content" className="mobile-bar-offset">
        <Experience />
      </main>
    </div>
  );
}
