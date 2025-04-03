"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import HalfContainers from "./HalfContainer";

interface image {
  source: string;
  alt: string;
}

export default function ColumnWithImage({ source, alt }: image) {
  useGSAP(() => {
    gsap.to(".image-column", {
      xPercent: 150,
      duration: 0.8,
      ease: "bounce",
      delay: 0.5,
      stagger: {
        amount: 0.8,
      },
    });
  });
  const imageRef = useRef<HTMLImageElement>(null);
  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // Removes shadow
      duration: 0.2,
      ease: "power2.in",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
      duration: 0.2,
      ease: "power2.out",
    });
  };
  return (
    <HalfContainers>
      <Image
        alt={alt}
        src={source}
        width={500}
        height={500}
        className="rounded shadow-2xl image-column -ml-[750px]"
        ref={imageRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </HalfContainers>
  );
}
