"use client";

import React, { useRef } from 'react';
import { useSectionInView } from "@/lib/hooks";
import { Users, TrendingUp, Repeat } from 'lucide-react';
import { SectionTitle } from './sectionTitle';
import { services } from "./data";
import Link from 'next/link';

interface ServicesProps {
  data: {
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}



  export const Services = (props: Readonly<ServicesProps>) => {
  const { ref } = useSectionInView("Služby", 0.5);
  const { data } = props;
  return (
    <section ref={ref} className='flex flex-col items-center px-4 scroll-mt-28 mb-24' id="sluzby">
      <SectionTitle
        preTitle="Jaké služby nabízíme?"
        title="Služby"
      >
      </SectionTitle>
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {data.bullets.map((item, index) => (
              <Service key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Service>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href="#kontakty" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-full text-white bg-green-700 hover:bg-green-800">
            Zjistit více o našich službách
          </Link>
        </div>
      </div>
    </section>
  )
}

function Service(props: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white mb-4 mx-auto">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-white",
        })}
      </div>
      <h4 className="text-xl font-semibold text-gray-900 text-center mb-2">{props.title}</h4>
      <p className="text-gray-600 text-center">
        {props.children}
      </p>
    </div>
)
}


