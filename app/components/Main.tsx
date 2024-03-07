import React from "react";

interface data {
  child: React.ReactNode;
}

export default function Main({ child }: data) {
  return (
    <main className="flex justify-center mt-20">
      <div className="sm:w-9/12 w-10/12">{child}</div>
    </main>
  );
}
