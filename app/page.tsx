import ColumnWithImage from "@/components/ColumnWithImage";
import ColumnWithoutImage from "@/components/ColumnWithoutImage";
import Container from "@/components/Container";
import { HomeData1, HomeData2 } from "@/data/Home";

export default function Home() {
    const itemList1 = HomeData1;
    const itemList2 = HomeData2;
    return (
        <Container>
            <ColumnWithImage alt="hero-picture" source={"/Capture.jpg"} />
            <ColumnWithoutImage
                buttonText={"Hello!"}
                firstTitle={"I am"}
                secondTitle={"Rey PJ Baliguat."}
                subTitle={"Junior Software Engineer"}
                items={itemList1}
            />
            <ColumnWithImage alt="skills-picture" source={"/Skills.jpg"} />
            <ColumnWithoutImage
                buttonText={"What I can do?"}
                firstTitle={"I code "}
                secondTitle={"MERN Stack."}
                subTitle={"Mongo DB, Express, React JS, and Node JS"}
                items={itemList2}
            />
        </Container>
    );
}
