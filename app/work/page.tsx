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
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit atque, nesciunt est unde dicta distinctio molestias ipsa quas cupiditate quis ut, suscipit reiciendis qui minus accusamus soluta non perspiciatis rerum.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit atque, nesciunt est unde dicta distinctio molestias ipsa quas cupiditate quis ut, suscipit reiciendis qui minus accusamus soluta non perspiciatis rerum.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit atque, nesciunt est unde dicta distinctio molestias ipsa quas cupiditate quis ut, suscipit reiciendis qui minus accusamus soluta non perspiciatis rerum.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flew-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* OUTLINE NUMBER */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* PROJECT CATEGORY */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* PROJECT DESCRIPTION */}
              <p className="text-white/60">{project.description}</p>
              {/* STACK */}
              <ul>
                
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
