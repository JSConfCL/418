import classNames from "classnames";

import { StreamLink } from "@/components/StreamLink/StreamLink";

import { TeapotLogo } from "@/components/teapot418";
import { Question } from "@/components/icons/question";
import { Rocket } from "@/components/icons/rocket";
import { Guest } from "@/components/icons/guest";

import { EpisodeDetails } from "@/components/EpisodeDetails/EpisodeDetails";
import { EpisodePreview } from "@/components/EpisodePreview/EpisodePreview";

import { Episode } from "@/api/types";

export default function ClientPage({
  latestEpisodes: latestEpisodes,
}: {
  latestEpisodes: Episode[];
}) {
  const latestOrNextEpisode = latestEpisodes[0];
  const prevEpisodes = latestEpisodes.slice(1);

  return (
    <>
      <main className="flex max-w-5xl flex-1 items-center justify-center p-16 transition-all">
        <div
          className="
          relative flex flex-col items-center gap-4 text-center
        "
        >
          <div
            className={classNames(
              // layout
              `relative flex flex-col items-center gap-4 text-center`,
              // decoration
              `before:absolute before:left-[10%] before:top-[10%] before:-z-10 before:h-[80%] before:w-[80%] before:animate-gradient-svg before:rounded-full	before:bg-gradient-radial before:from-purple-400 before:to-pink-600 before:opacity-30 before:blur-3xl`
            )}
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
            <div className="mb-8">
              <EpisodeDetails {...latestOrNextEpisode} />
            </div>
            <h3 className="text-base text-slate-400 sm:text-lg xl:text-xl">
              Escucha en vivo
            </h3>
            <div className="my-4 flex h-8 justify-center gap-4 gap-x-8 text-slate-300">
              <StreamLink href="https://www.youtube.com/@javascriptchile" />
              <StreamLink href="https://www.twitch.tv/javascriptchile" />
              <StreamLink href="https://www.linkedin.com/company/javascript-chile/events/" />
              <StreamLink href="https://www.facebook.com/groups/JavascriptChile/events" />
            </div>
            <h3 className="mt-10 text-base text-slate-400 sm:text-lg xl:text-xl">
              Escucha los episodios anteriores
            </h3>
            <div className="my-4 flex h-8 justify-center gap-4 gap-x-8 text-slate-300">
              <StreamLink icon="apple" />
              <StreamLink icon="google" />
              <StreamLink icon="spotify" />
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
            <div>
              <h3 className="mb-4 mt-10 animate-gradient-text bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-base font-extrabold text-transparent sm:text-lg xl:text-xl">
                Episodios Anteriores
              </h3>
              <div className="grid grid-cols-12 gap-4">
                {prevEpisodes.map((episode) => (
                  <div
                    key={episode.episode}
                    className="col-span-12 lg:col-span-4"
                  >
                    <EpisodePreview {...episode} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
