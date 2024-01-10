"use client";
import React from "react";

import ColumnWithImage from "./ColumnWithImage";
import ColumnWithoutImage from "./ColumnWithoutImage";

interface Item {
  text: string;
  icon: string;
}

interface HomePageRowData {
  alt: string;
  source: string;
  buttonText: string;
  firstTitle: string;
  secondTitle: string;
  subTitle: string;
  items: Item[];
}

export default function HomePageRow({
  alt,
  source,
  buttonText,
  firstTitle,
  secondTitle,
  subTitle,
  items,
}: HomePageRowData) {
  return (
    <>
      <ColumnWithImage alt={alt} source={source} />
      <ColumnWithoutImage
        buttonText={buttonText}
        firstTitle={firstTitle}
        secondTitle={secondTitle}
        subTitle={subTitle}
        items={items}
      />
    </>
  );
}
