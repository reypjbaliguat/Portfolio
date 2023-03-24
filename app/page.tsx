"use client";
import React from "react";
import ColumnWithImage from "@/components/ColumnWithImage";
import ColumnWithoutImage from "@/components/ColumnWithoutImage";
import Container from "@/components/Container";
import HomePageRow from "@/components/HomePageRow";
import { HomePageRowData1, HomePageRowData2 } from "@/data/Home";

export default function Home() {
    return (
        <Container>
            <HomePageRow {...HomePageRowData1} />
            <HomePageRow {...HomePageRowData2} />
        </Container>
    );
}
