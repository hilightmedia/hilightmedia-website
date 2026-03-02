"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const carouselImages = [
  "/home/c1.png",
  "/home/c2.png",
  "/home/c3.png",
  "/home/c4.png",
  "/home/c5.png",
  "/home/c6.png",
  "/home/c7.png",
];

// const carouselImages = [
//   "/home/test1.jpg",
//   "/home/test1.jpg",
//   "/home/test1.jpg",
//   "/home/test1.jpg",
//   "/home/test1.jpg",
//   "/home/test1.jpg",
//   "/home/test1.jpg",
// ];

const VISIBLE_SIDE = 3;

function getCardStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset);

  const translateX = offset * 150;
  const translateY = offset === 0 ? 0 : -abs * 20;

  const rotateY = offset * -18;
  const zIndex = 100 - abs * 10;
  const opacity = abs > VISIBLE_SIDE ? 0 : 1 - abs * 0.12;

  return {
    position: "absolute",
    left: "50%",
    bottom: "0%",
    transform: `
      translateX(calc(-50% + ${translateX}px))
      translateY(${translateY}px)
      perspective(1200px)
    `,
    transformOrigin: "bottom center",
    zIndex,
    transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const total = carouselImages.length;

  const advance = useCallback(
    (dir: 1 | -1) => {
      setActiveIndex((prev) => (prev + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    autoplayRef.current = setInterval(() => advance(-1), 3000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [advance]);

  const resetAutoplay = (dir: 1 | -1) => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    advance(dir);
    autoplayRef.current = setInterval(() => advance(-1), 3000);
  };

  return (
    <div
      className="relative w-full"
      style={{ height: "300px", perspective: "1400px" }}
    >
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#fff]/70 via-[#fff]/50 to-transparent pointer-events-none z-20" />

      <div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {carouselImages.map((src, i) => {
          const offset = (i - activeIndex + total) % total;
          const normalized = offset > total / 2 ? offset - total : offset;

          if (Math.abs(normalized) > VISIBLE_SIDE) return null;

          return (
            <div
              key={i}
              style={getCardStyle(normalized)}
              onClick={() => {
                if (normalized !== 0) {
                  resetAutoplay(normalized > 0 ? -1 : 1);
                }
              }}
              className="cursor-pointer select-none"
            >
              <div className="relative w-[230px] h-[320px] rounded-[20px] overflow-hidden ">
                <Image
                  src={src}
                  alt={`media-${i}`}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
