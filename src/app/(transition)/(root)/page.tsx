import { Metadata } from "next";
import Link from "next/link";

import { TeapotLogo } from "@/components/teapot418";
import { ApplePodcast } from "@/components/icons/apple_podcast";
import { GooglePodcast } from "@/components/icons/google_podcast";
import { Spotify } from "@/components/icons/spotify";
import { Youtube } from "@/components/icons/youtube";
import { LinkedIn } from "@/components/icons/linkedin";
import { Twitch } from "@/components/icons/tiwtch";
import { Facebook } from "@/components/icons/facebook";
import { Question } from "@/components/icons/question";
import { Rocket } from "@/components/icons/rocket";
import { Guest } from "@/components/icons/guest";

export const metadata: Metadata = {
  title: "Status 418: Im a Teapot",
  description:
    "Somos un Streaming y Podcast, de Tecnolog&iacute;a y Comunidad. Hecho con &hearts; por el equipo de JavaScript Chile.",
};

export default function Home() {
  return (
    <>
      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/enforces-negative-arbitrary-values
        className="
        absolute h-full w-full overflow-hidden
        before:absolute before:-left-[0%] before:-top-[0%] before:-z-10 before:h-1/5 before:w-1/5 before:rounded-full	before:bg-purple-400 before:opacity-80 before:blur-3xl after:absolute after:-bottom-[0%] after:-right-[0%]
        after:-z-10 after:h-1/5 after:w-1/5 after:rounded-full after:bg-pink-600 after:opacity-80 after:blur-3xl	lg:before:-left-[5%] lg:before:-top-[5%] lg:before:opacity-40 lg:after:-bottom-[5%] lg:after:-right-[5%] lg:after:opacity-40
      "
      />
      <main className="flex max-w-5xl items-center justify-center p-16 transition-all">
        <div
          className="
          relative flex flex-col items-center gap-4 text-center
        "
        >
          <div
            className="
            relative flex flex-col items-center gap-4 text-center
            before:absolute before:left-[10%] before:top-[10%] before:-z-10 before:h-[80%] before:w-[80%] before:animate-gradient-svg before:rounded-full	before:bg-gradient-radial before:from-purple-400 before:to-pink-600 before:opacity-30 before:blur-3xl
          "
          >
            <div className="h-32 w-32 animate-gradient-svg from-purple-400 to-pink-600 sm:h-64 sm:w-64">
              <TeapotLogo />
            </div>
            <h1 className="text-3xl font-extrabold shadow-slate-900 transition-all sm:text-5xl xl:text-6xl">
              <span>Status</span>
              <span className="ml-2 animate-gradient-text bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                418
              </span>
            </h1>
          </div>
          <h2 className="mb-4 text-lg text-slate-300 sm:text-xl xl:text-2xl">
            Un Podcast de Tecnología, Web y Comunidad.
          </h2>
          <div className="">
            <h3 className="text-base text-slate-400 sm:text-lg xl:text-xl">
              Escucha en vivo
            </h3>
            <div className="my-4 flex h-8 justify-center gap-4 gap-x-8 text-slate-300">
              <Link
                // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/enforces-negative-arbitrary-values
                className="
                  hover:before:-z-100 relative h-8 w-8 cursor-pointer hover:text-red-600
                  hover:no-underline hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:h-10 hover:before:w-10 hover:before:animate-gradient-svg hover:before:rounded-full hover:before:bg-gradient-radial hover:before:from-red-400 hover:before:to-red-600 hover:before:opacity-50 hover:before:blur
                "
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@javascriptchile"
              >
                <Youtube />
              </Link>
              <Link
                // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/enforces-negative-arbitrary-values
                className="
                  hover:before:-z-100 relative h-8 w-8 cursor-pointer hover:text-purple-600
                  hover:no-underline hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:h-10 hover:before:w-10 hover:before:animate-gradient-svg hover:before:rounded-full hover:before:bg-gradient-radial hover:before:from-purple-400 hover:before:to-purple-600 hover:before:opacity-50 hover:before:blur
                "
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitch.tv/javascriptchile"
              >
                <Twitch />
              </Link>
              <Link
                // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/enforces-negative-arbitrary-values
                className="
                  hover:before:-z-100 relative h-8 w-8 cursor-pointer hover:text-sky-600
                  hover:no-underline hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:h-10 hover:before:w-10 hover:before:animate-gradient-svg hover:before:rounded-full hover:before:bg-gradient-radial hover:before:from-sky-400 hover:before:to-sky-600 hover:before:opacity-50 hover:before:blur
                "
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/javascript-chile/events/"
              >
                <LinkedIn />
              </Link>
              <Link
                // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/enforces-negative-arbitrary-values
                className="
                  hover:before:-z-100 relative h-8 w-8 cursor-pointer hover:text-blue-600
                  hover:no-underline hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:h-10 hover:before:w-10 hover:before:animate-gradient-svg hover:before:rounded-full hover:before:bg-gradient-radial hover:before:from-blue-400 hover:before:to-blue-600 hover:before:opacity-50 hover:before:blur
                "
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/groups/JavascriptChile/events"
              >
                <Facebook />
              </Link>
            </div>
            <h3 className="mt-10 text-base text-slate-400 sm:text-lg xl:text-xl">
              Escucha los episodios anteriores
            </h3>
            <div className="my-4 flex h-8 justify-center gap-4 gap-x-8 text-slate-300">
              <span className="h-8 w-8 cursor-not-allowed">
                <ApplePodcast />
              </span>
              <span className="h-8 w-8 cursor-not-allowed">
                <GooglePodcast />
              </span>
              <span className="h-8 w-8 cursor-not-allowed">
                <Spotify />
              </span>
            </div>
            <h3 className="mt-10 text-base text-slate-400 sm:text-lg xl:text-xl">
              Nuestro Podcast
            </h3>
            <div>
              <ul className="text-slate-500">
                <li className="leading-9">
                  <span className="mr-2	inline-block h-6 w-6 align-middle text-orange-400">
                    <Question />
                  </span>
                  Agrega tus preguntas, las comentaremos en los siguientes
                  episodios.
                </li>
                <li className="leading-9">
                  Conversamos temas de interés y contingentes.
                  <span className="ml-2	inline-block h-6 w-6 align-middle text-orange-400">
                    <Rocket />
                  </span>
                </li>
                <li className="leading-9">
                  <span className="mr-2	inline-block h-6 w-6 align-middle text-orange-400">
                    <Guest />
                  </span>
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
