"use client";

import React, { ElementType, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps<C extends ElementType = "button"> = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: C;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "children">;

export function Button<C extends ElementType = "button">({
  borderRadius = "1.75rem",
  children,
  as,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps<C>) {
  const Component = (as || "button") as ElementType;

  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-px text-xl",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-80",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center rounded-full border border-slate-800 bg-black text-sm font-semibold text-white backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

type MovingBorderProps = {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
} & React.SVGProps<SVGSVGElement>;

export function MovingBorder({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps) {
  const pathRef = useRef<SVGRectElement | null>(null);

  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    if (!pathRef.current) return;

    const length = pathRef.current.getTotalLength();
    const pxPerMillisecond = length / duration;

    progress.set((time * pxPerMillisecond) % length);
  });

  const x = useTransform(progress, (value) => {
    return pathRef.current?.getPointAtLength(value).x ?? 0;
  });

  const y = useTransform(progress, (value) => {
    return pathRef.current?.getPointAtLength(value).y ?? 0;
  });

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translateX(-50%)
    translateY(-50%)
  `;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          ref={pathRef}
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}