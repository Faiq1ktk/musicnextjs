import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackgroundDemo({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-full bg-black">
      {/* Grid */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background-size:20px_20px]",
          "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_85%)]" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}