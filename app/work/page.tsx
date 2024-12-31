"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit atque, nesciunt est unde dicta distinctio molestias ipsa quas cupiditate quis ut, suscipit reiciendis qui minus accusamus soluta non perspiciatis rerum.',
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit atque, nesciunt est unde dicta distinctio molestias ipsa quas cupiditate quis ut, suscipit reiciendis qui minus accusamus soluta non perspiciatis rerum.',
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit atque, nesciunt est unde dicta distinctio molestias ipsa quas cupiditate quis ut, suscipit reiciendis qui minus accusamus soluta non perspiciatis rerum.',
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
]

const Work = () => {
  return <div>work page</div>;
};

export default Work;
