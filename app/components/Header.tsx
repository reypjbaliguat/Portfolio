import React from "react";
import LinkItem from "./LinkItem";

export default function Header() {

  return (
    <header className="flex justify-center shadow fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="sm:w-9/12 w-10/12">
        <div className="flex justify-center items-center py-4 w-full gap-x-4">
          <LinkItem  route={"/"} text={"Home"} />
          <LinkItem
            route={"/personal-projects"}
            text={"Personal Projects"}
          />
          <LinkItem
            route={"/work-projects"}
            text={"Work Projects"}
          />
        </div>
      </nav>
    </header>
  );
}
