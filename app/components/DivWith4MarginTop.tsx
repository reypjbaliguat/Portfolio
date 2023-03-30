import React from "react";

export default function DivWith4MarginTop({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="flex flex-col mt-4">{children}</div>;
}
