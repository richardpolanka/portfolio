"use client";

import React from 'react';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionTitle } from './sectionTitle';

export const About = () => {
  const { ref } = useSectionInView("O nás");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id="o-nas" className='scroll-mt-28 flex justify-center flex-col px-4'>
      <SectionTitle
        preTitle="Kdo jsme?"
        title="O nás"
      >
      </SectionTitle>
      <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto mb-24">
        Naše společnost je zaměřena na export - import v oblasti zahraničního obchodu se specializací na zemědělské komodity. <br />
        Společnost dále poskytuje služby v oblasti zemědělských a lesních činností.
      </p>
    </section>
  )
}
