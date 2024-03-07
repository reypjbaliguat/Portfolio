"use client";

import React from "react";

import Container from "@/app/components/Container";
import WorkExperienceRow from "@/app/components/WorkProjectRow";
import {
  BookingAppData,
  GGTAppData,
  IdCardData,
  ZouqOnline,
} from "@/data/WorkExperience";

export default function page() {
  return (
    <Container>
      <WorkExperienceRow {...ZouqOnline} />
      <WorkExperienceRow {...IdCardData} />
      <WorkExperienceRow {...BookingAppData} />
      <WorkExperienceRow {...GGTAppData} />
    </Container>
  );
}
