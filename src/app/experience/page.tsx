import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "experience | faheem",
  description: "my professional experience, education, and service.",
};

export default function ExperiencePage() {
  return (
    <div className="bg-[#2e2e2e] md:ml-[92px] md:mr-[32px]">
      <main className="pt-10 md:pt-0">
        <Experience />
      </main>
    </div>
  );
}
