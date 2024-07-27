import Image from "next/image";
import React from 'react'
import { benefitOne } from "./data";

interface BenefitsProps {
    imgPos?: "left" | "right";
    data: {
      imgPos?: "left" | "right";
      title: string;
      desc: string;
      image: any;
      bullets: {
        title: string;
        desc: string;
        icon: React.ReactNode;
      }[];
    };
  }

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
    <div className="flex flex-wrap mb-[96px] lg:gap-10 lg:flex-nowrap justify-center pb-[48px] scroll-mt-32 px-8" id="proc-my">
      <div className="flex items-end">
        <div className="">
          <Image src={benefitOne.image} alt="Popis obrázku" width={600} height={500} className="rounded-2xl hidden lg:flex"/>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-col w-full mt-3">
            <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl text-center lg:text-left ">
              {data.title}
            </h3>
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-600 lg:text-xl xl:text-xl">
              {data.desc}
            </p>
          </div>
          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  };
function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-700 rounded-md w-12 h-12 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-white",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500">
          {props.children}
        </p>
      </div>
    </div>
  );
};
