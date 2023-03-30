import React from "react";
import ColumnWithImage from "./ColumnWithImage";
import HalfContainer from "./HalfContainer";

interface ClickableProps {
    imageLink: string;
    imageSrc: string;
    imageAlt: string;
}

export default function ClickableImage({
    imageLink,
    imageSrc,
    imageAlt,
}: ClickableProps) {
    return (
        <HalfContainer>
            <a href={imageLink} target={"_blank"} rel="noreferrer">
                <ColumnWithImage source={imageSrc} alt={imageAlt} />
            </a>
        </HalfContainer>
    );
}
