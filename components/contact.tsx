"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id='contact'
      ref={ref}
      className=' mb-20 sm:mb-28 w-[min(100%,38rem)]  scroll-mt-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-stone-700 text-center -mt-6'>You can contact me here {" "}
        <a href="mailto:richard.polanka@gmail.com" target="_blank" className='text-[#069271] underline' >richard.polanka@gmail.com</a>
      </p>
      <form action={async formData => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email was sent successfully!")
      }} className='mt-10 flex flex-col'>
        <input
          type="email"
          className='h-14 px-4 rounded-lg border borderBlack'
          name='senderEmail'
          placeholder='Your email'
          required
          maxLength={500}
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlakc p-4 borderBlack resize-none'
          name='message'
          placeholder='Your message'
          maxLength={500}
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
