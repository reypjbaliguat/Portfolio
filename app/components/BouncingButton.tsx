import React from "react";

interface BouncingButtonProps {
    buttonText: string;
}

export default function BouncingButton({ buttonText }: BouncingButtonProps) {
    return (
        <button className="bg-blue p-4 rounded animate-bounce">
            <h2 className="text-white font-semibold">{buttonText}</h2>
        </button>
    );
}
