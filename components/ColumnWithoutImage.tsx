import React from "react";
import HalfContainers from "./HalfContainer";

interface Item {
    text: string;
    icon: JSX.Element;
}

interface data {
    buttonText: string;
    subTitle: string;
    items: Item[];
    firstTitle: string;
    secondTitle: string;
}

export default function ColumnWithoutImage({
    buttonText,
    firstTitle,
    secondTitle,
    subTitle,
    items,
}: data) {
    return (
        <HalfContainers>
            <button className="bg-blue p-4 rounded animate-bounce">
                <h2 className="text-white font-semibold">{buttonText}</h2>
            </button>
            <div className="flex mt-4">
                <h1 className="font-semibold text-2xl mr-1"> {firstTitle} </h1>
                <h1 className="font-bold text-2xl text-blue">{secondTitle}</h1>
            </div>
            <h2 className="font-semibold italic text-1xl mt-1 mb-4">
                {subTitle}
            </h2>
            {items.map((item) => (
                <div className="flex items-center" key={item.text}>
                    <>{item.icon} </>
                    <h3>{item.text} </h3>
                </div>
            ))}
        </HalfContainers>
    );
}
