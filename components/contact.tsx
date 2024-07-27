"use client";

import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { SectionTitle } from './sectionTitle';

export const Contact = () => {
  const { ref } = useSectionInView("Kontakty");
  return (
    <section
      id='kontakty'
      ref={ref}
      className=' mb-20 sm:mb-28 w-[min(100%,38rem)]  scroll-mt-28'
    >
      <SectionTitle
        preTitle="Kde nás můžete kontaktovat?"
        title="Kontakty"
      >
      </SectionTitle>
      <p className='text-gray-600 text-center mt-6'>
        AB zemědělská a lesní s.r.o. se sídlem Heřmaň 109, 398 11 Protivín <br />
        kanceláře: 5.května 510, 386 01 Strakonice <br />
        tel. <span className='text-green-700 underline'>383 322 21 </span>
        email:{" "} <a href="mailto:abzemedelska@seznam.cz" target="_blank" className='text-green-700 underline' >abzemedelska@seznam.cz</a> 
        <br />
        zástupce: Pavel Polanka, MBA – jednatel společnosti
      </p>
      <form action={async formData => {
        const { data, error } = await sendEmail(formData);
        if (error) {
          toast.error(error);
          return;
        }
        toast.success("E-mail byl úspěšně odeslán!")
        }} className='mt-10 flex flex-col'>
        <input
          type="email"
          className='h-14 px-4 rounded-lg border borderBlack'
          name='senderEmail'
          placeholder='Váš email'
          required
          maxLength={500}
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlakc p-4 borderBlack resize-none'
          name='message'
          placeholder='Vaše zpráva'
          maxLength={500}
          required
        />
        <SubmitBtn />
      </form>
    </section>
  )
}
