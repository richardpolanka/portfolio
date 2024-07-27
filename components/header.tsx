"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from 'react';
import Image from "next/image";

export const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
        useEffect(() => {
            console.log("Active section changed:", activeSection);
        }, [activeSection]);
    return (
    <header className='z-[999] relative'>
        <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 h-[6rem] w-full rounded-none border border-white border-opacity-4 bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-8 sm:h-[4rem] sm:w-[60rem] lg:w-[80rem] sm:rounded-full'
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
        </motion.div>
        <nav className="flex fixed left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[2.65rem] sm:h-[initial] sm:py-0 w-[90%] lg:w-[65rem]">
            <ul className="flex justify-between items-center sm:flex-row flex-col w-full text-[0.9rem] font-medium text-stone-900">
                <Link className="" href="#">
                <motion.div
                    className="flex flex-row items-center gap-2"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                <Image
                  src="logomini.svg"
                  width={40}
                  height={40}
                  alt="Logo"
                ></Image>
                <h1 className="space-x-2 text-xl lg:text-2xl font-medium text-green-700">zemědělská a lesní s.r.o.</h1>
                {/* <h1 className="text-lg sm:text-xl ml-3">AB zemědělská a lesní s.r.o.</h1> */}

                    </motion.div>
                    </Link>
                    <motion.span 
                        className="flex items-center space-x-2 sm:space-x-4"
                        initial={false}
                        animate={{ y: 0, opacity: 1 }}
                    >
                    {links.map((link) => (
                        <motion.li
                        className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-stone-950 transition', {
                                    "text-gray-950": activeSection === link.name,
                                })}
                                href={link.hash}
                                onClick={() => {
                                    console.log("Link clicked:", link.name);
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                  }}
                            >
                                {link.name}
                                {activeSection === link.name && (
                                    <motion.span
                                        className='bg-stone-100 rounded-full absolute inset-0 -z-10 drop-shadow-2xl'
                                        layoutId='activeSection'
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                    </motion.span>
                </ul>
            </nav>
    </header>
    );
}