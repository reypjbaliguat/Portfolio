import React from "react";

interface data {
  children: React.ReactNode;
}

export default function Container({ children }: data) {
  return <div className="flex flex-wrap items-start mb-10">{children}</div>;
}
