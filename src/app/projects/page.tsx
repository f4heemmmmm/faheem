import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "works | faheem",
  description: "selected projects and work.",
};

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-[#ececf1] md:ml-[60px]">
      <main>
        <Projects />
      </main>
    </div>
  );
}
