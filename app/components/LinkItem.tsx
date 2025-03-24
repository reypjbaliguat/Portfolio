"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  route: string;
  text: string;
}

export default function LinkItem({
  route,
  text,
}: LinkItemProps) {
  const pathname = usePathname();
  return (
      <Link
        href={route}
        className={`hover:text-blue hover:underline transition duration-300 ${
          pathname === route && "text-blue underline"
        }`}
      >
        <span className="text-1xl font-bold">{text}</span>
      </Link>
  );
}
