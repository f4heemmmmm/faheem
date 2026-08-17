import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "projects | faheem",
  description: "selected projects and work.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell-flush min-h-screen bg-[#ececf1]">
      <main id="main-content">
        <Projects />
      </main>
    </div>
  );
}
