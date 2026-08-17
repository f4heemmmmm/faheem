import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="page-shell-flush mobile-bar-offset flex min-h-screen items-center justify-center bg-[#0a0a0a] px-6 py-20"
    >
      <div className="text-center">
        <p className="font-gt-america text-caption font-semibold uppercase tracking-normal text-white/60">
          404
        </p>
        <h1 className="mt-4 font-extenda text-[clamp(2.5rem,10vw,6rem)] uppercase leading-none text-white">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-md font-gt-america text-body-lg text-white/70">
          That link does not lead anywhere. It may have been moved or removed.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-poppins text-xs font-semibold uppercase tracking-normal text-[#0a0a0a] transition-opacity duration-300 hover:opacity-80"
          >
            Back to home
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 font-poppins text-xs font-semibold uppercase tracking-normal text-white transition-colors duration-300 hover:bg-white/10"
          >
            Browse projects
          </Link>
        </div>
      </div>
    </main>
  );
}
