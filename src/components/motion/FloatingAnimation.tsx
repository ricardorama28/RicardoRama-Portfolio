"use client";

import { type ReactNode } from "react";

interface FloatingAnimationProps {
  children: ReactNode;
  className?: string;
}

export function FloatingAnimation({
  children,
  className,
}: FloatingAnimationProps) {
  return (
    <div
      className={className}
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      {children}
    </div>
  );
}
