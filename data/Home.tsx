import {
  mdiBookOpenVariantOutline,
  mdiBriefcase,
  mdiEmail,
  mdiGithub,
  mdiMapMarker,
  mdiPhone,
  mdiXml,
} from "@mdi/js";

export const HomeItemsData1 = [
  {
    icon: mdiEmail,
    text: "reypjbaliguat@gmail.com",
  },
  {
    icon: mdiPhone,
    text: "09565686257",
  },
  {
    icon: mdiMapMarker,
    text: "Poblacion, Talisay City, Cebu 6045, Philippines",
  },
  {
    icon: mdiGithub,
    text: "https://github.com/reypjbaliguat",
  },
];

export const HomeItemsData2 = [
  {
    icon: mdiBriefcase,
    text: "I have 4 years React JS work experience.",
  },
  {
    icon: mdiBookOpenVariantOutline,
    text: "I am currently studying Socket IO and JestJS for testing.",
  },
  {
    icon: mdiXml,
    text: "I am self-taught programmer.",
  },
];

export const HomePageRowData1 = {
  alt: "hero-picture",
  source: "/Capture.jpg",
  buttonText: "Hello!",
  firstTitle: "I am",
  secondTitle: "Rey PJ Baliguat.",
  subTitle: "Junior Software Engineer",
  items: HomeItemsData1,
};

export const HomePageRowData2 = {
  alt: "skills-picture",
  source: "/Skills.jpg",
  buttonText: "What I can do?",
  firstTitle: "I code ",
  secondTitle: "MERN Stack.",
  subTitle: "Mongo DB, Express, React JS, and Node JS",
  items: HomeItemsData2,
};
