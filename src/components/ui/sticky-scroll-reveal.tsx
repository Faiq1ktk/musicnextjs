/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { cn } from "@/lib/utils";

type StickyContent = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

interface StickyScrollProps {
  content: StickyContent[];
  contentClassName?: string;
}

export function StickyScroll({
  content,
  contentClassName,
}: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const breakpoints = content.map((_, index) => index / cardLength);

    const closestBreakpointIndex = breakpoints.reduce(
      (closest, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);

        if (distance < Math.abs(latest - breakpoints[closest])) {
          return index;
        }

        return closest;
      },
      0
    );

    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a",
    "#000000",
    "#171717",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right,#06b6d4,#10b981)",
    "linear-gradient(to bottom right,#ec4899,#6366f1)",
    "linear-gradient(to bottom right,#f97316,#eab308)",
  ];

  const backgroundGradient = useMemo(() => {
    return linearGradients[activeCard % linearGradients.length];
  }, [activeCard]);

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor:
          backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-120 justify-center space-x-10 overflow-y-auto scrollbar-hide rounded-xl p-10"
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title}
              className="my-20"
            >
              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>

              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-10 max-w-sm text-lg text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}

          <div className="h-40" />
        </div>
      </div>

      <div
  style={{
    background: backgroundGradient,
  }}
  className={cn(
    "sticky top-10 hidden h-40 w-44 overflow-hidden rounded-xl lg:block",
    contentClassName
  )}
>
  {content[activeCard]?.content}
</div>
    </motion.div>
  );
}