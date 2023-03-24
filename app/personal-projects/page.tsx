import ColumnWithImage from "@/components/ColumnWithImage";
import Container from "@/components/Container";
import HalfContainers from "@/components/HalfContainer";
import React from "react";

export default function page() {
    return (
        <Container>
            <HalfContainers>
                <ColumnWithImage
                    source={"/personal-projects/Typing-game.PNG"}
                    alt="typing-game-picture"
                />
            </HalfContainers>
            <HalfContainers>
                <button className="bg-blue p-4 rounded animate-bounce">
                    <h2 className="text-white font-semibold">Typing Game</h2>
                </button>
                <div className="flex flex-col mt-4">
                    <h1 className="font-semibold text-2xl">Build using:</h1>
                    <h1 className="font-bold text-2xl text-blue">
                        Next JS, Typescript, Redux Toolkit, Tailwind CSS
                    </h1>
                </div>
                <div className="flex flex-col mt-4">
                    <h1 className="font-semibold text-2xl">Powered by:</h1>
                    <h1 className="font-bold text-2xl text-blue">
                        https://api.quotable.io/random
                    </h1>
                </div>
                <div className="flex flex-col mt-4">
                    <h1 className="font-semibold text-2xl">Description:</h1>
                    <h1 className="font-semibold italic text-1xl">
                        Typing game application which API is fetched from{" "}
                        <a
                            href="https://api.quotable.io/random"
                            target="_blank"
                            className="text-blue"
                        >
                            https://api.quotable.io/random
                        </a>
                        . Speed is calculated by dividing content length to
                        average letter per word which is 4.7.
                    </h1>
                </div>
            </HalfContainers>
        </Container>
    );
}
