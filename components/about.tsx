"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            After graduating with a Bachelor's degree in{" "}
            <span className="font-medium">Computer Science and Engineering</span>, I ventured into{" "}
            <span className="font-medium">AI and web development</span>. With experience at Foundation AI,  
            I've harnessed AI to dramatically streamline operations. These optimizations have empowered our 
            clients with <span className="underline">significant time and resource savings</span>, 
            catalyzing their firm's growth. My technical skills span{" "}
            <span className="font-medium">
                React, NextJS, NodeJS, Flask
            </span>, and databases like <span className="font-medium">
                MongoDB, and PostgreSQL
            </span>
            , complemented by proficiency in{" "}
            <span className="italic">ML frameworks like <span className="font-medium">PyTorch and TensorFlow</span></span>. Having recently achieved a Master's degree in Computer Science from San Jose State University, I'm now actively seeking full-time roles where I can further apply and expand my expertise.
        </p>

        <p>
            <span className="italic">Outside of work</span>, I'm an avid movie watcher, having enjoyed over 1000 films, and a keen book reader. I also spend time{" "}
            <span className="font-medium">exploring tech forums</span>, always eager to expand my knowledge and perspective.
        </p>
    </motion.section>
  );
}
