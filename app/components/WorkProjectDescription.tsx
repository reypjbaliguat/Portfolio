"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
  useGSAP(() => {
    gsap.to(".cwiElement", {
      stagger: 0.2,
      opacity: 1,
      ease: "power2.inOut",
    });
  });
  return (
    <HalfContainer>
      <BouncingButton buttonText={appName} className="cwiElement opacity-0" />
      <DivWith4MarginTop>
        <h1 className="font-semibold text-2xl cwiElement opacity-0">
          Built using:
        </h1>
        <h1 className="font-bold text-2xl text-blue cwiElement opacity-0">
          {technologyUsed}
        </h1>
      </DivWith4MarginTop>
      <DivWith4MarginTop>
        <h1 className="font-semibold text-2xl cwiElement opacity-0">
          Description:
        </h1>
        <h1 className="font-semibold italic text-1xl cwiElement opacity-0">
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
