import React from "react";
import BouncingButton from "./BouncingButton";
import HalfContainers from "./HalfContainer";
import IconWithText from "./IconWithText";

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
            <BouncingButton buttonText={buttonText} />
            <div className="flex mt-4">
                <h1 className="font-semibold text-2xl mr-1"> {firstTitle} </h1>
                <h1 className="font-bold text-2xl text-blue">{secondTitle}</h1>
            </div>
            <h2 className="font-semibold italic text-1xl mt-1 mb-4">
                {subTitle}
            </h2>
            {items.map(({ text, icon }) => (
                <IconWithText text={text} icon={icon} />
            ))}
        </HalfContainers>
    );
}
