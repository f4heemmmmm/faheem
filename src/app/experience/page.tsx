import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "experience | faheem",
  description: "my professional experience, education, and service.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-[18px] bg-[#2e2e2e] sm:mx-[24px] md:ml-[92px] md:mr-[32px]">
      <main className="pt-14 md:pt-0">
        <Experience />
      </main>
    </div>
  );
}
