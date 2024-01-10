import React from "react";
import WorkProjectDescription from "./WorkProjectDescription";
import ColumnWithImage from "./ColumnWithImage";

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
      <ColumnWithImage source={imageSrc} alt={imageAlt} />
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
