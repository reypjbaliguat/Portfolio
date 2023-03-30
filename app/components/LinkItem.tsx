import Link from "next/link";
import React from "react";

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
    return (
        <div className={`${withPaddingRight && "pr-4"}`}>
            <Link
                href={route}
                className="hover:text-blue hover:underline transition duration-300"
            >
                <span className="text-1xl font-bold">{text}</span>
            </Link>
        </div>
    );
}
