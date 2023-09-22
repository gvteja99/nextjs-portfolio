import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.jpg";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

import stackOverflowClone from "@/public/stackOverflowClone.jpg";
import uberEatsClone from "@/public/uberEatsClone.jpg";
import etsyClone from "@/public/etsyClone.jpg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SWE Intern (WinC IT Services)",
    location: "Hyderabad, Telangana, India",
    description:
      "I developed and maintained a secure cashier interface system for retail stores, streamlining billing and product search functionalities.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Graduated with a Bachelors Degree",
    location: "Gurgaon, Haryana, India",
    description:
      "I graduated with a B.Tech. in Computer Science from BML Munjal University, where my final project focused on glaucoma detection using image classification.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Engineer (Foundation AI)",
    location: "Hyderabad, Telangana, India",
    description:
      "I pioneered many AI-enhanced solutions, from deploying security systems for COVID-19 contact tracing to automating processes, saving clients substantial time and resources.",
    icon: React.createElement(FaPython),
    date: "2020 - 2021",
  },
  {
    title: "Graduated with a Masters Degree",
    location: "San Jose, CA",
    description:
      "I earned my M.S. in Computer Science from San Jose State University with a GPA of 3.88. For my standout project, I delved into image captioning using Reinforcement Learning, merging visual processing with cutting-edge AI techniques.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Software Engineer (Agrim Technologies)",
    location: "San Jose, CA",
    description:
      "I started at Agrim Technologies as an intern, moved to a co-op, and am now a full-time software engineer. During my tenure, I orchestrated the integration of various computer vision modules, streamlined workflows, and developed chatbots, driving efficiency and innovation.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },


] as const;

export const projectsData = [
  {
    title: "Stack Overflow Clone",
    description:
      "I crafted a Stack Overflow-like prototype using Kafka and Redis, supporting user roles and secure token-based authentication.",
    tags: ["React.js", "NodeJS", "Kafka", "Redis", "MongoDB"],
    imageUrl: stackOverflowClone,
  },
  {
    title: "Uber Eats Clone",
    description:
      "Food delivery app akin to UberEATS with React, PostgreSQL, & GraphQL. It supports user profiles, order placement, and menu editing.",
    tags: ["React", "Redux", "PostgreSQL", "GraphQL", "Tailwind"],
    imageUrl: uberEatsClone,
  },
  {
    title: "Etsy Clone",
    description:
      "An Etsy-inspired app using Spring Boot and Redux. Features profile creation, product search, and purchasing. Scalability via microservices.",
    tags: ["SpringBoot", "Redux", "MongoDB", "TypeScript", "MaterialUI"],
    imageUrl: etsyClone,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "NodeJS",
  "GraphQL",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Kafka",
  "ExpressJS",
  "PyTorch",
  "TensorFlow",
  "Git",
  "Linux",
] as const;
