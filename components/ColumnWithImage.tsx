import Image from "next/image";
import React from "react";
import HalfContainers from "./HalfContainer";

interface image {
    source: string;
    alt: string;
}

export default function ColumnWithImage({ source, alt }: image) {
    return (
        <HalfContainers>
            <Image
                alt={alt}
                src={source}
                width={500}
                height={500}
                className="rounded shadow-2xl transition sm:hover:shadow sm:hover:translate-x-1 duration-200"
            />
        </HalfContainers>
    );
}
