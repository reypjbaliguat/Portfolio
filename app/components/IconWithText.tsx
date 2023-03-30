import React from "react";

interface IconWithTextProps {
    text: string;
    icon: JSX.Element;
}

export default function IconWithText({ text, icon }: IconWithTextProps) {
    return (
        <div className="flex items-center" key={text}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue sm:mr-3 mr-4 my-2"
            >
                {icon}
            </svg>
            <h3>{text} </h3>
        </div>
    );
}
