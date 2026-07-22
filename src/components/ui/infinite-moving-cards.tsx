"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (!containerRef.current) return;

    let duration = "20s";

    if (speed === "normal") duration = "40s";
    if (speed === "slow") duration = "80s";

    containerRef.current.style.setProperty(
      "--animation-duration",
      duration
    );
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const children = Array.from(scrollerRef.current.children);

    children.forEach((child) => {
      scrollerRef.current?.appendChild(child.cloneNode(true));
    });

    getDirection();
    getSpeed();
    setStart(true);
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 overflow-hidden",
        pauseOnHover && "hover:[&>ul]:[animation-play-state:paused]",
        className
      )}
    >
      {/* Grid */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#000_95%)]" />

      <ul
        ref={scrollerRef}
        className={cn(
          "relative z-10 flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          "mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
          start && "animate-scroll"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className={cn(
              "relative",
              "w-65",
              "md:w-80",
              "max-w-full",
              "shrink-0",
              "rounded-2xl",
              "border",
              "border-zinc-700",
              "bg-[linear-gradient(180deg,#1f2937,#111827)]",
              "px-8",
              "py-6"
            )}
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-[1.8] text-gray-100">
                {item.quote}
              </span>

              <div className="mt-6 flex flex-col gap-1">
                <span className="text-sm text-gray-300">{item.name}</span>
                <span className="text-sm text-gray-400">{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};