import Icon from "@mdi/react";
import React from "react";

interface IconWithTextProps {
  text: string;
  icon: string;
}

export default function IconWithText({ text, icon }: IconWithTextProps) {
  return (
    <div className="flex items-center" key={text}>
      <Icon path={icon} size={1} className=" text-blue sm:mr-3 mr-4 my-2" />
      <h3>{text} </h3>
    </div>
  );
}
