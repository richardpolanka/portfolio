import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  const navigation = ["O nás", "Služby", "Proč my?", "Kontakty"];
  const links = ["#o-nas", "#sluzby", "#proc-my", "#kontakty"];
  return (
    <div className="relative w-full">
      <footer className='border-gray-900 '>
        <div className="flex flex-col pt-10 mx-auto mt-5 border-t border-gray-200 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className='flex justify-center'>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl lg:text-2xl font-medium text-green-700 text-center"
              >
                <Image
                  src="logomini.svg"
                  width={40}
                  height={40}
                  alt="Logo"
                ></Image>
                <span>zemědělská a lesní s.r.o.</span>
              </Link>
            </div>
            <div className=" mt-2 text-gray-500 text-center mb-2">
              Vaše brána do světa zemědělských komodit
            </div>
          </div>
          <div>
            <div className="flex w-full flex-row justify-center gap-5">
                {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={links[index] || "#"}
                  className="text-gray-500 rounded-md hover:text-green-700 focus:text-green-700 focus:outline-none text-center"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 text-sm text-center text-gray-600">
          © {new Date().getFullYear()},{" "}
          <Link
            href="/"
            className='text-green-700 underline'
          >
            AB zemědělská a lesní s.r.o.
          </Link>{" "}
            Vytvořil {" "}
          <a href="https://rpolanka.com/" target="_blank" className='text-green-700 underline'>
            Richard Polanka
          </a>{" "}
        </div>
      </footer>
    </div>
  )
}
