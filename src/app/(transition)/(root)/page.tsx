import { Metadata } from 'next';
import Link from "next/link";

import { TeapotLogo } from "@/components/teapot418";
import { ApplePodcast } from "@/components/icons/apple_podcast";
import { GooglePodcast } from "@/components/icons/google_podcast";
import { Spotify } from "@/components/icons/spotify";
import { Youtube } from '@/components/icons/youtube';
import { LinkedIn } from '@/components/icons/linkedin';
import { Twitch } from '@/components/icons/tiwtch';
import { Facebook } from '@/components/icons/facebook';
import { Question } from '@/components/icons/question';
import { Rocket } from '@/components/icons/rocket';
import { Guest } from '@/components/icons/guest';

export const metadata: Metadata = {
  title: "Status 418: Im a Teapot",
  description:
    'Somos un Streaming y Podcast, de Tecnolog&iacute;a y Comunidad. Hecho con &hearts; por el equipo de JavaScript Chile.',
};

export default function Home() {
  return (
    <>
      <div className="
        absolute w-full h-full overflow-hidden
        before:absolute before:-left-[0%] before:-top-[0%] lg:before:-left-[5%] lg:before:-top-[5%] before:-z-10 before:h-1/5	before:w-1/5 before:bg-purple-400 before:blur-3xl before:opacity-80 lg:before:opacity-40 before:rounded-full
        after:absolute after:-right-[0%] after:-bottom-[0%] lg:after:-right-[5%] lg:after:-bottom-[5%] after:-z-10 after:h-1/5	after:w-1/5 after:bg-pink-600 after:blur-3xl after:opacity-80 lg:after:opacity-40 after:rounded-full
      " />
      <main className="flex items-center justify-center max-w-5xl transition-all p-16">
        <div className="
          relative flex flex-col gap-4 text-center items-center
        ">
          <div className="
            relative flex flex-col gap-4 text-center items-center
            before:animate-gradient-svg before:absolute before:left-[10%] before:top-[10%] before:-z-10 before:h-[80%] before:w-[80%] before:opacity-30	before:bg-gradient-radial before:from-purple-400 before:to-pink-600 before:blur-3xl before:rounded-full
          ">
            <div className="h-32 w-32 sm:h-64 sm:w-64 animate-gradient-svg from-purple-400 to-pink-600">
              <TeapotLogo />
            </div>
            <h1 className="text-3xl font-extrabold shadow-slate-900 transition-all sm:text-5xl xl:text-6xl">
              <span>Status</span>
              <span className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ml-2">418</span>
            </h1>
          </div>
          <h2 className="text-lg text-slate-300 sm:text-xl xl:text-2xl mb-4">Un Podcast de Tecnología, Web y Comunidad.</h2>
          <div className="">
            <h3 className="text-base text-slate-400 sm:text-lg xl:text-xl">Escucha en vivo</h3>
            <div className="h-8 flex gap-4 gap-x-8 justify-center my-4 text-slate-300">
              <Link
                className="
                  h-8 w-8 cursor-pointer hover:no-underline hover:text-red-600 relative
                  hover:before:animate-gradient-svg hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:-z-100 hover:before:h-10 hover:before:w-10 hover:before:bg-gradient-radial hover:before:from-red-400 hover:before:to-red-600 hover:before:blur hover:before:rounded-full hover:before:opacity-50
                "
                target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@javascriptchile">
                <Youtube />
              </Link>
              <Link
                className="
                  h-8 w-8 cursor-pointer hover:no-underline hover:text-purple-600 relative
                  hover:before:animate-gradient-svg hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:-z-100 hover:before:h-10 hover:before:w-10 hover:before:bg-gradient-radial hover:before:from-purple-400 hover:before:to-purple-600 hover:before:blur hover:before:rounded-full hover:before:opacity-50
                "
                target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/javascriptchile">
                <Twitch />
              </Link>
              <Link
                className="
                  h-8 w-8 cursor-pointer hover:no-underline hover:text-sky-600 relative
                  hover:before:animate-gradient-svg hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:-z-100 hover:before:h-10 hover:before:w-10 hover:before:bg-gradient-radial hover:before:from-sky-400 hover:before:to-sky-600 hover:before:blur hover:before:rounded-full hover:before:opacity-50
                "
                target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/javascript-chile/events/">
                <LinkedIn />
              </Link>
              <Link
                className="
                  h-8 w-8 cursor-pointer hover:no-underline hover:text-blue-600 relative
                  hover:before:animate-gradient-svg hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:-z-100 hover:before:h-10 hover:before:w-10 hover:before:bg-gradient-radial hover:before:from-blue-400 hover:before:to-blue-600 hover:before:blur hover:before:rounded-full hover:before:opacity-50
                "
                target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/JavascriptChile/events">
                <Facebook />
              </Link>
            </div>
            <h3 className="text-base text-slate-400 sm:text-lg xl:text-xl mt-10">Escucha los episodios anteriores</h3>
            <div className="h-8 flex gap-4 gap-x-8 justify-center my-4 text-slate-300">
              <span className='h-8 w-8 cursor-not-allowed'><ApplePodcast /></span>
              <span className='h-8 w-8 cursor-not-allowed'><GooglePodcast /></span>
              <span className='h-8 w-8 cursor-not-allowed'><Spotify /></span>
            </div>
            <h3 className="text-base text-slate-400 sm:text-lg xl:text-xl mt-10">Nuestro Podcast</h3>
            <div>
              <ul className='text-slate-500'>
                <li className='leading-9'>
                  <span className='inline-block	align-middle h-6 w-6 text-orange-400 mr-2'><Question /></span>
                  Agrega tus preguntas, las comentaremos en los siguientes episodios.
                </li>
                <li className='leading-9'>
                  Conversamos temas de interés y contingentes.
                  <span className='inline-block	align-middle h-6 w-6 text-orange-400 ml-2'><Rocket /></span>
                </li>
                <li className='leading-9'>
                  <span className='inline-block	align-middle h-6 w-6 text-orange-400 mr-2'><Guest /></span>
                  Invitados de distintas áreas tecnológicas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
