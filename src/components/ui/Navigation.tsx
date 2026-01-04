"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "home", href: "#" },
  { label: "about me", href: "#about" },
  { label: "experiences", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for shadow effect
      setIsScrolled(currentScrollY > 50);

      // Determine scroll direction
      if (currentScrollY < 10) {
        // Always show at top of page
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down past threshold - hide navbar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Nav Container */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: isVisible ? 0 : -100 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className={`mx-auto max-w-[1100px] bg-gray-950 rounded-full px-4 transition-all duration-500 ${
            isScrolled ? "shadow-2xl shadow-black/20" : "shadow-xl shadow-black/10"
          }`}
        >
          <nav className="px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-semibold text-white tracking-tight"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Faheem
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="ml-4 px-5 py-2.5 text-sm font-medium text-gray-950 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                contact me
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  className="w-6 h-0.5 bg-white origin-center"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-6 h-0.5 bg-white"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  className="w-6 h-0.5 bg-white origin-center"
                />
              </div>
            </button>
          </nav>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-950 pt-28 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-white"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full py-4 text-center text-lg font-medium text-gray-950 bg-white rounded-full"
              >
                contact me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
