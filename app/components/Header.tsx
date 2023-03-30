import React from "react";
import LinkItem from "./LinkItem";

export default function Header() {
    return (
        <header className="flex justify-center shadow">
            <nav className="sm:w-9/12 w-10/12">
                <div className="flex justify-center items-center py-4 w-full">
                    <LinkItem
                        withPaddingRight={true}
                        route={"/"}
                        text={"Home"}
                    />
                    <LinkItem
                        withPaddingRight={true}
                        route={"/personal-projects"}
                        text={"Personal Projects"}
                    />
                    <LinkItem
                        withPaddingRight={false}
                        route={"/work-projects"}
                        text={"Work Projects"}
                    />
                </div>
            </nav>
        </header>
    );
}
