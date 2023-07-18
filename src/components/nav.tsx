"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { TeapotLogo } from "@/components/teapot418";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize) 
    }
  })
  
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300`;
  return (
    <div className={`fixed top-0 z-10 flex w-full justify-center pt-4 ${isOpen ? 'bg-black': ''}`}>
      <div className="md: xl: flex w-full max-w-5xl flex-row items-center justify-between px-6 transition-all md:px-10 xl:px-0 relative">
        <Link
          href={"/"}
          className="group cursor-pointer items-center justify-center px-4 py-2 pl-0 font-bold hover:no-underline"
        >
          <span className="flex shrink-0 items-center justify-center ">
            <span className="h-8 w-8 mr-2 group-hover:animate-gradient-svg from-purple-400 to-pink-600 group-hover:-translate-y-3 transform group-hover:rotate-45 transition duration-500 ease-in-out">
              <TeapotLogo />
            </span>
            Status <span className="group-hover:animate-gradient-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 ml-2">418</span>
          </span>
        </Link>
        <div className="flex flex-1 justify-end z–100">
          <div className="block lg:hidden">
            <button
              className="flex flex-col h-12 w-12 justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
          <div className={`flex-1 flex-col items-center gap-6 ${isOpen ? 'flex absolute inset-x-0 top-[47px] bg-black w-screen h-screen justify-start z-10' : 'hidden justify-end'} lg:flex lg:flex-row`}>
            <Link
              href="mailto:status418@jschile.org"
              className="shrink-0 p-2 text-slate-400 transition-all hover:no-underline hover:text-white "
            >
              Contacto
            </Link>
            <Link
              target="_blank"
              href="https://discord.gg/arFgckGJ"
              className="shrink-0 p-2 text-slate-400 transition-all hover:no-underline hover:text-white "
            >
              Discord
            </Link>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBV_u2Fa1wzHOY8KOhvt55asFXejsCTlwEkOorWGZJuPnqwg/viewform"
              className="
                text-white shrink-0 p-2 transition-all hover:no-underline
                border border-transparent rounded-md
                relative box-border bg-black bg-clip-padding
                hover:animate-gradient-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-600 hover:text-black
                before:absolute before:inset-0 before:-z-10 before:blur-md before:bg-clip-padding before:animate-gradient-text before:bg-gradient-to-r before:from-amber-400 before:to-orange-600
                after:absolute after:-left-px after:-top-px after:-z-[1] after:bg-red after:rounded-md after:bg-gradient-to-r after:from-amber-400 after:to-orange-600 after:w-[calc(100%_+_2px)] after:h-[calc(100%_+_2px)]
              "
            >
              Haz una pregunta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
