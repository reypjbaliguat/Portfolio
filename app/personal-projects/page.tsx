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
          source={"/personal-projects/template.PNG"}
          alt="template-picture"
        />
      </HalfContainers>
      <HalfContainers>
        <BouncingButton buttonText={"Template"} />

        <DivWith4MarginTop>
          <h1 className="font-semibold text-2xl">Built using:</h1>
          <h1 className="font-bold text-2xl text-blue">
            React JS, MUI, Mongo DB, GraphQL, Prisma and Node
          </h1>
        </DivWith4MarginTop>

        <DivWith4MarginTop>
          <h1 className="font-semibold text-2xl">Description:</h1>
          <h1 className="font-semibold italic text-1xl">
            ReplySaver is a simple yet powerful web tool designed to store and
            organize email replies for quick access. With an intuitive
            interface, you can save commonly used responses and retrieve them
            instantly when needed. Each reply comes with a convenient copy
            button, allowing you to paste responses effortlessly into your
            emails with just one click. Key Features:
          </h1>
          <h1 className="font-semibold text-2xl">Key Features:</h1>
          <div className="flex flex-col gap-y-2 mt-2">
            <span>
              ✅ Save & Organize – Store frequently used email replies in one
              place.
            </span>
            <span>
              ✅ One-Click Copy – Quickly copy responses with a single button.
            </span>
            <span>✅ Easy Access – Retrieve and reuse replies anytime.</span>
            <span>
              ✅ Streamlined Workflow – Save time by eliminating repetitive
              typing.
            </span>
          </div>
        </DivWith4MarginTop>
        <DivWith4MarginTop>
          <h1 className="font-semibold text-2xl">
            Link:{" "}
            <a
              href="https://template-client-psi.vercel.app/"
              target="_blank"
              className="text-blue text-xl"
              rel="noreferrer"
            >
              Click here
            </a>
          </h1>
        </DivWith4MarginTop>
      </HalfContainers>
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
          <h1 className="font-semibold text-2xl">
            Link:{" "}
            <a
              href="https://typing-game-v2.vercel.app/"
              target="_blank"
              className="text-blue text-xl"
              rel="noreferrer"
            >
              Click here
            </a>
          </h1>
        </DivWith4MarginTop>
      </HalfContainers>
    </Container>
  );
}
