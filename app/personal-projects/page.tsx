import ColumnWithImage from "@/app/components/ColumnWithImage";
import Container from "@/app/components/Container";
import HalfContainers from "@/app/components/HalfContainer";
import React from "react";
import BouncingButton from "../components/BouncingButton";
import DivWith4MarginTop from "../components/DivWith4MarginTop";

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
        <BouncingButton buttonText={"Typing Game"} />

        <DivWith4MarginTop>
          <h1 className="font-semibold text-2xl">Built using:</h1>
          <h1 className="font-bold text-2xl text-blue">
            Next JS, Typescript, Redux Toolkit, Tailwind CSS, RTK Query,
            Node/Express and Mongo DB
          </h1>
        </DivWith4MarginTop>
        <DivWith4MarginTop>
          <h1 className="font-semibold text-2xl">Powered by:</h1>
          <h1 className="font-bold text-1xl text-blue">
            <a
              href="https://api.quotable.io/random"
              target="_blank"
              className="text-blue"
              rel="noreferrer"
            >
              https://api.quotable.io/random
            </a>
          </h1>
        </DivWith4MarginTop>
        <DivWith4MarginTop>
          <h1 className="font-semibold text-2xl">Description:</h1>
          <h1 className="font-semibold italic text-1xl">
            Typing game application which API is fetched from{" "}
            <a
              href="https://api.quotable.io/random"
              target="_blank"
              className="text-blue"
              rel="noreferrer"
            >
              https://api.quotable.io/random
            </a>
            . Speed is calculated by dividing content length to average letter
            per word which is 4.7. Text/content is limited to 100 letters.
          </h1>
        </DivWith4MarginTop>
        <DivWith4MarginTop>
          <h1 className="font-semibold text-2xl">Link:</h1>
          <h1 className="font-bold text-2xl text-blue">
            <a
              href="https://typing-game-v2.vercel.app/"
              target="_blank"
              className="text-blue"
              rel="noreferrer"
            >
              https://typing-game-v2.vercel.app/
            </a>
          </h1>
        </DivWith4MarginTop>
      </HalfContainers>
    </Container>
  );
}
