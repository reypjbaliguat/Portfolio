import React from "react";
import { EmptyStatement } from "typescript";
import ColumnWithImage from "./ColumnWithImage";
import HalfContainer from "./HalfContainer";

interface WorkExperienceData {
    imageLink: string;
    imageSrc: string;
    imageAlt: string;
    appName: string;
    technologyUsed: string;
    description: string;
    paymentLink: string;
    paymentName: string;
}

export default function WorkExperienceRow({
    imageLink,
    imageSrc,
    imageAlt,
    appName,
    technologyUsed,
    description,
    paymentLink,
    paymentName,
}: WorkExperienceData) {
    return (
        <>
            <HalfContainer>
                <a href={imageLink} target={"_blank"}>
                    <ColumnWithImage source={imageSrc} alt={imageAlt} />
                </a>
            </HalfContainer>
            <HalfContainer>
                <button className="bg-blue p-4 rounded animate-bounce">
                    <h2 className="text-white font-semibold">{appName}</h2>
                </button>
                <div className="flex flex-col mt-4">
                    <h1 className="font-semibold text-2xl">Build using:</h1>
                    <h1 className="font-bold text-2xl text-blue">
                        {technologyUsed}
                    </h1>
                </div>
                <div className="flex flex-col mt-4">
                    <h1 className="font-semibold text-2xl">Description:</h1>
                    <h1 className="font-semibold italic text-1xl">
                        {description}
                        {paymentLink && paymentName && (
                            <a
                                href={paymentLink}
                                className="text-blue"
                                target={"_blank"}
                            >
                                {paymentName}
                            </a>
                        )}
                        .
                    </h1>
                </div>
            </HalfContainer>
        </>
    );
}
