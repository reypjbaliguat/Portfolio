import React from "react";
import ClickableImage from "./ClickableImage";
import HalfContainer from "./HalfContainer";
import WorkProjectDescription from "./WorkProjectDescription";

interface WorkProjectRowProps {
    imageLink: string;
    imageSrc: string;
    imageAlt: string;
    appName: string;
    technologyUsed: string;
    description: string;
    paymentLink: string;
    paymentName: string;
}

export default function WorkProjectRow({
    imageLink,
    imageSrc,
    imageAlt,
    appName,
    technologyUsed,
    description,
    paymentLink,
    paymentName,
}: WorkProjectRowProps) {
    return (
        <>
            <ClickableImage
                imageLink={imageLink}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
            />
            <WorkProjectDescription
                appName={appName}
                technologyUsed={technologyUsed}
                description={description}
                paymentLink={paymentLink}
                paymentName={paymentName}
            />
        </>
    );
}
