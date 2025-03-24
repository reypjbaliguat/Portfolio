"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import LinkItem from "./LinkItem";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.to(".link-item", {
        stagger: {
          amount: 1,
          from: "random",
        },
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });
    },
    { scope: headerRef }
  );
  return (
    <header className="flex justify-center shadow fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="sm:w-9/12 w-10/12">
        <div
          className="flex justify-center items-center py-4 w-full gap-x-4"
          ref={headerRef}
        >
          <LinkItem route={"/"} text={"Home"} />
          <LinkItem route={"/personal-projects"} text={"Personal Projects"} />
          <LinkItem route={"/work-projects"} text={"Work Projects"} />
        </div>
      </nav>
    </header>
  );
}
