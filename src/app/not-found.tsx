import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <h1 className="font-extenda text-[clamp(4rem,20vw,12rem)] uppercase leading-none text-white">
          404
        </h1>
        <p className="mt-4 font-gt-america text-body-lg text-white/50">
          Page not found
        </p>
        <Link
          href="/"
          className="mt-8 inline-block font-gt-america text-sm font-medium text-white/70 transition-opacity duration-300 hover:opacity-50"
        >
          Go home &rarr;
        </Link>
      </div>
    </div>
  );
}
