"use client";

import React from "react";

import Container from "@/components/Container";
import WorkExperienceRow from "@/components/WorkExperienceRow";
import { BookingAppData, GGTAppData } from "@/data/WorkExperience";

export default function page() {
    return (
        <Container>
            <WorkExperienceRow {...BookingAppData} />
            <WorkExperienceRow {...GGTAppData} />
        </Container>
    );
}
