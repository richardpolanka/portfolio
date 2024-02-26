"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import Link from 'next/link';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";



export default function About() {
  const { ref } = useSectionInView("About");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="about" className='scroll-mt-28'>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.2,
          }}
        >
          <div className="shadow-inner rounded-3xl min-w-80 min-h-80 flex items-center justify-center bg-white bg-opacity-50 p-5 mb-5 lg:mb-0 lg:mr-10">
            <Image
              src="/profilepicture.jpg"
              alt="Profile Picture"
              width={320}
              height={320}
              className="rounded-3xl"
                  />
          </div>
        </motion.div>
        <motion.div
          className="text-center h-80"
          initial={{ opacity: 0, y: 100 }}
          animate={{opacity: 1, y: 0}}
        >
          <div className='block lg:flex'>
            <h1 className="text-7xl lg:mt-5  lg:mr-5">Richard</h1><h1 className="text-7xl lg:mt-5 font-bold ">Polanka</h1>
          </div>
          <p className="mt-2">Daytrader | Entrepreneur | Programmer | Visionary</p>
          <p className="mt-2">Member of  <Link className='text-[#3A4390] underline' href="https://www.eyp.cz/" target="_blank">European Youth Parliament</Link></p>
          <p className="mt-2">Member of the Czech Political <Link className='text-[#069271] underline' href="https://svobodni.cz/" target="_blank">Party of the Free</Link></p>
          

          <div className='mt-10 flex items-center justify-center gap-10'>
            <a className="hover:scale-110 transition" href="https://twitter.com/richard_polanka" target="_blank"><BsTwitterX className='w-8 h-8 text-stone-900 hover:text-stone-950'/></a>
            <a className='hover:scale-110 transition' href="https://github.com/richardpolanka" target="_blank"><BsGithub className='w-8 h-8 text-stone-900 hover:text-stone-950'/></a>
            <a className='hover:scale-110 transition' href="https://www.instagram.com/richard_polanka/" target="_blank"><FaInstagram className='w-8 h-8 text-stone-900 hover:text-stone-950'/></a>
            <a className='hover:scale-110 transition' href="https://www.youtube.com/@richardpolanka" target="_blank"><BsYoutube className='w-8 h-8 text-stone-900 hover:text-stone-950'/></a>
          </div>
        </motion.div>
      </div>
      <div className='flex justify-center text-center mt-5 '>
        <motion.p className='w-[956px] leading-8'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          
        >
          Hi, my name is <span className='font-semibold mb-8 capitalize'>Richard</span> and{' '}
          <span className='font-semibold mb-8 capitalize'>I&apos;m 17 years old.</span> I&apos;m currently very engaged in{' '}
          <span className='font-semibold mb-8 capitalize'>trading, forex, crypto</span> and{' '}
          <span className='font-semibold mb-8 capitalize'>finance in general.</span> <br />
          I am also into <span className='font-semibold mb-8 capitalize'>programming</span> and{' '}
          <span className='font-semibold mb-8 capitalize'>creating projects.</span> I&apos;m currently working on{' '}
          <span className='font-semibold mb-8 capitalize'>Aknalop, Wrivate</span> and more.
          <br />
          Feel free to <span className='font-semibold mb-8 capitalize'>contact me</span> if you&apos;re interested in my work!

  </motion.p>
</div>
    </section>

    
    

  )
}
