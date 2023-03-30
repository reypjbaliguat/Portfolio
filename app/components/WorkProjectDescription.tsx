import React from "react";
import BouncingButton from "./BouncingButton";
import DivWith4MarginTop from "./DivWith4MarginTop";
import HalfContainer from "./HalfContainer";

interface WorkProjectRowProps {
    appName: string;
    technologyUsed: string;
    description: string;
    paymentLink: string;
    paymentName: string;
}

export default function WorkProjectDescription({
    appName,
    technologyUsed,
    description,
    paymentLink,
    paymentName,
}: WorkProjectRowProps) {
    return (
        <HalfContainer>
            <BouncingButton buttonText={appName} />
            <DivWith4MarginTop>
                <h1 className="font-semibold text-2xl">Built using:</h1>
                <h1 className="font-bold text-2xl text-blue">
                    {technologyUsed}
                </h1>
            </DivWith4MarginTop>
            <DivWith4MarginTop>
                <h1 className="font-semibold text-2xl">Description:</h1>
                <h1 className="font-semibold italic text-1xl">
                    {description}
                    {paymentLink && paymentName && (
                        <a
                            href={paymentLink}
                            className="text-blue"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            {paymentName}
                        </a>
                    )}
                    .
                </h1>
            </DivWith4MarginTop>
        </HalfContainer>
    );
}
