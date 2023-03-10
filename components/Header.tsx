import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="flex justify-center shadow">
            <nav className="sm:w-9/12 w-10/12">
                <div className="flex justify-center items-center py-4 w-full">
                    <div className="pr-4">
                        <Link
                            href={"/"}
                            className="hover:text-blue hover:underline transition duration-300"
                        >
                            <span className="text-1xl font-bold">Home</span>
                        </Link>
                    </div>
                    <div className="pr-4">
                        <Link
                            href={"/works"}
                            className="hover:text-blue hover:underline transition duration-300"
                        >
                            <span className="text-1xl font-bold">Works</span>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={"/experience"}
                            className="hover:text-blue hover:underline transition duration-200"
                        >
                            <span className="text-1xl font-bold">
                                Experience
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
