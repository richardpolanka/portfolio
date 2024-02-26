"use client";

import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
      <section ref={ref} className='flex flex-col items-center px-4 scroll-mt-28 mb-24' id="projects">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex flex-col items-center px-4'
          ><SectionHeading>Projects</SectionHeading>
          <div>
              {
                  projectsData.map((project, index) => (
                      <React.Fragment key={index}>
                          <Project {...project} />
                      </React.Fragment>
                      
                  ))
            }
              </div>
              </motion.div>
    </section>
  )
}




