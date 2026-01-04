"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", children, href, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-out active:scale-[0.98]";

    const variants = {
      primary:
        "bg-gray-950 text-white hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5",
      secondary:
        "bg-transparent text-gray-950 border border-gray-200 hover:bg-gray-100 hover:border-gray-300",
    };

    const sizes = {
      default: "px-6 py-3 text-sm",
      large: "px-8 py-4 text-base",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
