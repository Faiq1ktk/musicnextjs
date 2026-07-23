"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 15,
};

type AnimatedTooltipItem = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

type AnimatedTooltipProps = {
  items: AnimatedTooltipItem[];
};

export const AnimatedTooltip = ({
  items,
}: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const animationFrameRef = useRef<number | null>(null);

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    SPRING_CONFIG
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    SPRING_CONFIG
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    const imageBounds = event.currentTarget.getBoundingClientRect();

    const mousePosition =
      event.clientX - imageBounds.left - imageBounds.width / 2;

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      x.set(mousePosition);
      animationFrameRef.current = null;
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    x.set(0);

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative -mr-4"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.6,
                }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>

                <div className="text-xs text-white">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Image
  src={item.image}
  alt={item.name}
  width={100}
  height={100}
  unoptimized
  onMouseMove={handleMouseMove}
  draggable={false}
  className="relative m-0! h-14 w-14 rounded-full border-2 border-white bg-white object-contain object-center !p-1 transition duration-500 group-hover:z-30 group-hover:scale-105"
/>
        </div>
      ))}
    </>
  );
};