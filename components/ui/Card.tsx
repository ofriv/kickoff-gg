/**
 * Card Component
 *
 * Reusable container with consistent padding, borders, and shadows.
 * Used for displaying matches, bets, user stats, and other content blocks.
 */

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  padding = "md",
}: CardProps) {
  // Base styles for all cards
  const baseStyles =
    "bg-neutral-50 rounded-lg shadow-md border border-neutral-300";

  // Padding options
  const paddingStyles = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div className={`${baseStyles} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}
