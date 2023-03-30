import React from "react";

interface data {
    children: React.ReactNode;
}

export default function HalfContainer({ children }: data) {
    return (
        <div className="sm:basis-full lg:basis-1/2 sm:p-20 md:p-5 md:mt-3 mt-5">
            {children}
        </div>
    );
}
