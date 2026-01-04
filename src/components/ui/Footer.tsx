"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            © {currentYear} Faheem. All rights reserved.
          </motion.p>

          {/* Built With */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 flex items-center gap-1"
          >
            Designed & built with
            <span className="text-red-500 mx-1">♥</span>
            using Next.js & Tailwind CSS
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-gray-500 hover:text-gray-950 transition-colors duration-200 flex items-center gap-1"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Back to top</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
