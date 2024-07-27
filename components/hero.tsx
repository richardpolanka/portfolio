"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';




export const Hero = () =>  {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200">
        <div className="absolute inset-0 opacity-90">
          <Image
              src="/hero2.jpg"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              priority
          />
        </div>
      </div>
      
      {/* Obsah */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Vaše brána do světa zemědělských komodit
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Spojujeme českou půdu s globálním trhem - Váš partner pro export a import zemědělských produktů.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className=''>
              <Link href="#kontakty">
                <button className="bg-white text-green-700 font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                    Kontaktujte nás
                </button>
              </Link>
              <div className='flex justify-center'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.26460316981706 31.540623675081406" width="171.26460316981706" height="31.540623675081406">
                  <rect x="0" y="0" width="171.26460316981706" height="31.540623675081406" fill="transparent"></rect><g transform="translate(10 21.540623675081406) rotate(0 75.63230158490853 -5.770311837540703)" stroke="none"><path fill="#15803D" d="M -1.24,-3.28 Q -1.24,-3.28 6.63,-6.14 14.51,-8.99 31.64,-10.61 48.77,-12.23 72.37,-12.27 95.97,-12.31 111.88,-12.06 127.80,-11.82 139.55,-11.64 151.29,-11.46 151.74,-11.38 152.19,-11.30 152.59,-11.08 152.99,-10.86 153.29,-10.53 153.60,-10.20 153.79,-9.78 153.97,-9.37 154.02,-8.92 154.06,-8.46 153.96,-8.02 153.86,-7.58 153.62,-7.19 153.38,-6.81 153.03,-6.52 152.68,-6.23 152.25,-6.06 151.83,-5.90 151.38,-5.88 150.92,-5.86 150.48,-5.99 150.05,-6.12 149.68,-6.38 149.30,-6.64 149.03,-7.00 148.76,-7.37 148.62,-7.80 148.48,-8.23 148.49,-8.69 148.49,-9.14 148.64,-9.57 148.80,-10.00 149.07,-10.36 149.35,-10.71 149.73,-10.96 150.11,-11.21 150.55,-11.33 150.99,-11.45 151.44,-11.42 151.90,-11.39 152.32,-11.21 152.74,-11.04 153.08,-10.74 153.42,-10.44 153.65,-10.05 153.88,-9.66 153.97,-9.21 154.07,-8.77 154.01,-8.32 153.96,-7.87 153.76,-7.46 153.56,-7.05 153.25,-6.72 152.93,-6.39 152.53,-6.19 152.12,-5.98 151.67,-5.91 151.22,-5.84 151.22,-5.84 151.22,-5.84 139.48,-5.95 127.73,-6.07 111.86,-6.22 95.99,-6.37 72.68,-6.21 49.36,-6.06 33.06,-4.46 16.77,-2.85 9.00,0.21 1.24,3.28 0.83,3.39 0.42,3.49 -0.00,3.49 -0.42,3.49 -0.83,3.38 -1.24,3.28 -1.62,3.09 -1.99,2.89 -2.31,2.61 -2.63,2.33 -2.87,1.98 -3.11,1.63 -3.26,1.23 -3.41,0.84 -3.46,0.41 -3.51,-0.00 -3.46,-0.42 -3.41,-0.84 -3.26,-1.23 -3.11,-1.63 -2.87,-1.98 -2.63,-2.33 -2.31,-2.61 -1.99,-2.89 -1.62,-3.09 -1.24,-3.28 -1.24,-3.28 L -1.24,-3.28 Z"></path></g>
                </svg>
              </div>
            </div>
            <Link href="#o-nas">
              <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-green-700 transition duration-300 h-[3rem]">
                Zjistit více
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Šipka dolů */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        <div className="animate-bounce">
          <a href="#o-nas">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}