"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, hic architecto dolorum ab accusamus velit saepe autem numquam maxime modi tempora vel mollitia unde debitis nobis laboriosam error in.",
    href: "/services",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, hic architecto dolorum ab accusamus velit saepe autem numquam maxime modi tempora vel mollitia unde debitis nobis laboriosam error in.",
    href: "/services",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, hic architecto dolorum ab accusamus velit saepe autem numquam maxime modi tempora vel mollitia unde debitis nobis laboriosam error in.",
    href: "/services",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi, hic architecto dolorum ab accusamus velit saepe autem numquam maxime modi tempora vel mollitia unde debitis nobis laboriosam error in.",
    href: "/services",
  },
];


import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) =>{
            return <div key={index}
            className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-2xl text-primary" />
                </Link> 
              </div>
              {/* title */}
              <h2 className=" text-[42px] font-bold leading-nong text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* heading */}
              <p>{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          }
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
