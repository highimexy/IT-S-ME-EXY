"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur accusamus earum quo! Vitae exercitationem soluta, mollitia eius a quasi, ex ducimus consequatur architecto quas fugiat! Vel inventore quod sint quisquam?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Wiktor Kowalczky",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+48) 502 329 XXX",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Wiktor Kowalczky",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Polish",
    },
    {
      fieldName: "email",
      fieldValue: "teslawiktor@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Leanguages",
      fieldValue: "English, Polish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur accusamus earum quo! Vitae exercitationem soluta, mollitia eius a quasi, ex ducimus consequatur architecto quas fugiat! Vel inventore quod sint quisquam?",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

//education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur accusamus earum quo! Vitae exercitationem soluta, mollitia eius a quasi, ex ducimus consequatur architecto quas fugiat! Vel inventore quod sint quisquam?",
  items: {
    institution: "Online Course Platform",
    position: "Full Stack Web Development Bootcamp",
    duration: "2023",
  },
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
