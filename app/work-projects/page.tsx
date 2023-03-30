"use client";

import React from "react";

import Container from "@/app/components/Container";
import WorkExperienceRow from "@/app/components/WorkProjectRow";
import { BookingAppData, GGTAppData } from "@/data/WorkExperience";

export default function page() {
    return (
        <Container>
            <WorkExperienceRow {...BookingAppData} />
            <WorkExperienceRow {...GGTAppData} />
        </Container>
    );
}
