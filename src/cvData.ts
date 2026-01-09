// src/cvData.ts

export type CvContact = {
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type CvData = {
  name: string;
  contact: CvContact;
};

export const cvData: CvData = {
  name: "Robin Vikström",
  contact: {
    location: "Stockholm, Sverige",
    email: "robin.m.e.vikstrom@gmail.com",
    phone: "070-947 66 30",
    linkedin: "https://www.linkedin.com/in/robin-vikstr%C3%B6m-9959b6169/",
    github: "https://github.com/Trixxaren",
  },
};
