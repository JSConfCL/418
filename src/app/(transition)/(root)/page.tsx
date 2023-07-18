import { Metadata } from 'next';

import { TeapotLogo } from "@/components/teapot418";

export const metadata: Metadata = {
  title: "Status 418: I&apos;m a Teapot",
  description:
    'Somos un Streaming y Podcast, de Tecnolog&iacute;a y Comunidad. Hecho con &hearts; por el equipo de JavaScript Chile.',
};

export default function Home() {
  return (
    <>
      <div className="
        absolute w-full h-full overflow-hidden
        before:absolute before:-left-[0%] before:-top-[0%] lg:before:-left-[5%] lg:before:-top-[5%] before:-z-10 before:h-1/5	before:w-1/5 before:bg-gradient-radial before:from-purple-400 before:from-purple-400 before:blur-3xl before:opacity-80 lg:before:opacity-40 before:rounded-full
        after:absolute after:-right-[0%] after:-bottom-[0%] lg:after:-right-[5%] lg:after:-bottom-[5%] after:-z-10 after:h-1/5	after:w-1/5 after:bg-gradient-radial after:from-pink-600 after:to-pink-600 after:blur-3xl after:opacity-80 lg:after:opacity-40 after:rounded-full
      " />
      <main className="flex items-center justify-center h-[calc(100vh_-_100px)] max-w-5xl px-6 transition-all">
        <div className="
          relative flex flex-col gap-4 pb-16 text-center items-center
          before:animate-gradient-svg before:absolute before:left-[10%] before:top-[10%] before:-z-10 before:h-[80%] before:w-[80%] before:opacity-30	before:bg-gradient-radial before:from-purple-400 before:to-pink-600 before:blur-3xl before:rounded-full
        ">
          <div className="h-32 w-32 sm:h-64 sm:w-64 animate-gradient-svg from-purple-400 to-pink-600">
            <TeapotLogo />
          </div>
          <h1 className="text-5xl font-extrabold shadow-slate-900 transition-all sm:text-7xl xl:text-8xl">
            <span>Status</span>
            <span className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ml-2">418</span>
          </h1>
          <h2 className="text-base text-slate-500 sm:text-2xl xl:text-3xl">Un Podcast de Tecnología, Web y Comunidad.</h2>
        </div>
      </main>
    </>
  );
}
