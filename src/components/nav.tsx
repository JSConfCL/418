"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { TeapotLogo } from "@/components/teapot418";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsOpen(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300`;
  return (
    <div
      className={`fixed top-0 z-10 flex w-full justify-center pt-4 ${
        isOpen ? "bg-black" : ""
      }`}
    >
      <div className="md: xl: relative flex w-full max-w-5xl flex-row items-center justify-between px-6 transition-all md:px-10 xl:px-0">
        <Link
          href={"/"}
          className="group cursor-pointer items-center justify-center px-4 py-2 pl-0 font-bold hover:no-underline"
        >
          <span className="flex shrink-0 items-center justify-center ">
            <span className="mr-2 h-8 w-8 from-purple-400 to-pink-600 transition duration-500 ease-in-out group-hover:-translate-y-3 group-hover:rotate-45 group-hover:animate-gradient-svg">
              <TeapotLogo />
            </span>
            Status{" "}
            <span className="ml-2 group-hover:animate-gradient-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent">
              418
            </span>
          </span>
        </Link>
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="z–100 flex flex-1 justify-end">
          <div className="block lg:hidden">
            <button
              className="group flex h-12 w-12 flex-col items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "translate-y-2 rotate-45 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-translate-y-2 -rotate-45 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
          <div
            className={`flex-1 flex-col items-center gap-6 ${
              isOpen
                ? "absolute inset-x-0 top-[47px] z-10 flex h-screen w-screen justify-start bg-black"
                : "hidden justify-end"
            } lg:flex lg:flex-row`}
          >
            <Link
              href="mailto:status418@jschile.org"
              className="shrink-0 p-2 text-slate-400 transition-all hover:text-white hover:no-underline "
            >
              Contacto
            </Link>
            <Link
              target="_blank"
              href="https://discord.gg/arFgckGJ"
              className="shrink-0 p-2 text-slate-400 transition-all hover:text-white hover:no-underline "
            >
              Discord
            </Link>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBV_u2Fa1wzHOY8KOhvt55asFXejsCTlwEkOorWGZJuPnqwg/viewform"
              // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
              className="
                relative box-border shrink-0 rounded-md border
                border-transparent bg-black bg-clip-padding
                p-2 text-white transition-all before:absolute
                before:inset-0 before:-z-10 before:animate-gradient-text before:bg-gradient-to-r before:from-amber-400
                before:to-orange-600 before:bg-clip-padding before:blur-md after:absolute after:-left-px after:-top-px after:-z-[1] after:h-[calc(100%_+_2px)] after:w-[calc(100%_+_2px)]
                after:rounded-md after:bg-red-50 after:bg-gradient-to-r after:from-amber-400 after:to-orange-600 hover:animate-gradient-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-600 hover:text-black hover:no-underline
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
