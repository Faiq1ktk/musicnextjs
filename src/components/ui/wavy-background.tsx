"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useRef } from "react";
import { createNoise3D } from "simplex-noise";

const DEFAULT_WAVE_COLORS = [
  "#38bdf8",
  "#818cf8",
  "#c084fc",
  "#e879f9",
  "#22d3ee",
] as const;

type WavyBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  containerClassName?: string;
  colors?: readonly string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const waveColors = useMemo<readonly string[]>(() => {
    if (colors && colors.length > 0) {
      return colors;
    }

    return DEFAULT_WAVE_COLORS;
  }, [colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const noise = createNoise3D();

    let width = 0;
    let height = 0;
    let noiseTime = 0;
    let animationFrameId: number | null = null;

    const animationSpeed = speed === "slow" ? 0.001 : 0.002;
    const opacity = Math.min(Math.max(waveOpacity, 0), 1);
    const lineWidth = Math.max(waveWidth, 1);

    const resizeCanvas = () => {
      const containerBounds = container.getBoundingClientRect();

      width = Math.max(1, Math.floor(containerBounds.width));
      height = Math.max(1, Math.floor(containerBounds.height));

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawWaves = (numberOfWaves: number) => {
      noiseTime += animationSpeed;

      for (let waveIndex = 0; waveIndex < numberOfWaves; waveIndex += 1) {
        context.beginPath();
        context.lineWidth = lineWidth;
        context.strokeStyle =
          waveColors[waveIndex % waveColors.length] ?? DEFAULT_WAVE_COLORS[0];

        for (let xPosition = 0; xPosition <= width; xPosition += 5) {
          const yPosition =
            noise(xPosition / 800, waveIndex * 0.3, noiseTime) * 100 +
            height * 0.5;

          if (xPosition === 0) {
            context.moveTo(xPosition, yPosition);
          } else {
            context.lineTo(xPosition, yPosition);
          }
        }

        context.stroke();
        context.closePath();
      }
    };

    const renderFrame = () => {
      context.globalAlpha = opacity;
      context.fillStyle = backgroundFill;
      context.fillRect(0, 0, width, height);

      drawWaves(5);

      animationFrameId = window.requestAnimationFrame(renderFrame);
    };

    resizeCanvas();
    renderFrame();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }

      context.clearRect(0, 0, width, height);
    };
  }, [
    backgroundFill,
    speed,
    waveColors,
    waveOpacity,
    waveWidth,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-screen flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          filter: `blur(${Math.max(blur, 0)}px)`,
        }}
      />

      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};