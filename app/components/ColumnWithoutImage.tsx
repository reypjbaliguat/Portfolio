"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BouncingButton from "./BouncingButton";
import HalfContainers from "./HalfContainer";
import IconWithText from "./IconWithText";

interface Item {
  text: string;
  icon: string;
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
  useGSAP(() => {
    gsap.to(".cwiElement", {
      stagger: 0.2,
      opacity: 1,
      ease: "power2.inOut",
    });
  });
  return (
    <HalfContainers>
      <BouncingButton
        buttonText={buttonText}
        className="cwiElement opacity-0"
      />
      <div className="flex mt-4">
        <h1 className="font-semibold text-2xl mr-1 cwiElement opacity-0">
          {" "}
          {firstTitle}{" "}
        </h1>
        <h1 className="font-bold text-2xl text-blue cwiElement opacity-0">
          {secondTitle}
        </h1>
      </div>
      <h2 className="font-semibold italic text-1xl mt-1 mb-4 cwiElement opacity-0">
        {subTitle}
      </h2>
      {items.map(({ text, icon }) => (
        <IconWithText key={text} text={text} icon={icon} />
      ))}
    </HalfContainers>
  );
}
