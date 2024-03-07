"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  withPaddingRight: boolean;
  route: string;
  text: string;
}

export default function LinkItem({
  withPaddingRight,
  route,
  text,
}: LinkItemProps) {
  const pathname = usePathname();
  return (
    <div className={`${withPaddingRight && "pr-4"}`}>
      <Link
        href={route}
        className={`hover:text-blue hover:underline transition duration-300 ${
          pathname === route && "text-blue underline"
        }`}
      >
        <span className="text-1xl font-bold">{text}</span>
      </Link>
    </div>
  );
}
