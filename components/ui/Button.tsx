/**
 * Button Component
 *
 * Reusable button with multiple variants and sizes.
 * Supports primary (red), secondary (outline), and disabled states.
 * Used throughout the app for consistent styling.
 * using TailWind utility classes to design.
 */

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  // Base styles applied to all buttons
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles (different button types)
  const variantStyles = {
    primary:
      "bg-primary-900 hover:bg-primary-600 text-white shadow-md hover:shadow-lg",
    secondary: "bg-neutral-200 hover:bg-neutral-300 text-neutral-900",
    outline: "border-2 border-primary-900 text-primary-900 hover:bg-primary-50",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
