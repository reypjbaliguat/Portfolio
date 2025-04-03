"use client";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

interface LinkItemProps {
  route: string;
  text: string;
}

export default function LinkItem({ route, text }: LinkItemProps) {
  const pathname = usePathname();
  const linkRef = useRef<HTMLAnchorElement>(null);

  const activeLinkStyles = {
    boxShadow: "inset 200px 0 0 0 rgb(14 165 233)",
    color: "#fff",
  };

  const inactiveLinkStyles = {
    boxShadow: "inset 0 0 0 0 rgb(14 165 233)",
    color: "black",
  };

  const activeLinkGsap = {
    boxShadow: "inset 200px 0 0 0 rgb(14 165 233)",
    color: "#fff",
    duration: 0.2,
    ease: "power2.out",
  };

  const inactiveLinkGsap = {
    boxShadow: "inset 0 0 0 0 rgb(14 165 233)",
    color: "black",
    duration: 0.2,
    ease: "power2.in",
  };

  const handleMouseEnter = () => {
    gsap.to(linkRef.current, activeLinkGsap);
  };

  const handleMouseLeave = () => {
    gsap.to(
      linkRef.current,
      pathname === route ? activeLinkGsap : inactiveLinkGsap
    );
  };

  return (
    <Link
      ref={linkRef}
      href={route}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={pathname === route ? activeLinkStyles : inactiveLinkStyles}
      className={"px-4 py-2 rounded-md link-item opacity-0"}
    >
      <span className="text-1xl font-bold">{text}</span>
    </Link>
  );
}
