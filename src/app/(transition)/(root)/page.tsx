import { Metadata } from 'next';

import { API } from "@/api";
import { TeapotLogo } from "@/components/teapot418";

// import { LastEpisodeDocument } from "./lastEpisode.generated";

export const metadata: Metadata = {
  title: "Status 418: I&apos;m a Teapot",
  description:
    'Somos un Streaming y Podcast, de Tecnolog&iacute;a y Comunidad. Hecho con &hearts; por el equipo de JavaScript Chile.',
};

export default async function Home() {
  const data = await API.LastEpisode();
  const episodio = data.allEpisodio.at(0);

  return (
    <main className="flex w-full max-w-5xl flex-col items-center justify-between px-6 pt-36 transition-all md:px-10 md:pt-44 xl:px-0 xl:pt-52">
      <div className="flex flex-col gap-4 pb-16 text-center items-center">
        <div className="h-32 w-32 sm:h-64 sm:w-64 animate-gradient-svg from-purple-400 to-pink-600">
          <TeapotLogo />
        </div>
        <h1 className="text-5xl font-extrabold shadow-slate-900 transition-all sm:text-7xl xl:text-8xl">
          <span>Status</span>
          <span className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ml-2">418</span>
        </h1>
        <h2 className="text-base text-slate-700 sm:text-2xl xl:text-3xl">Un Podcast de Tecnología, Web y Comunidad.</h2>
      </div>
      <div className="flex flex-col gap-4">
        {episodio && (
          <div>
            <h2 className="text-2xl font-bold">Último episodio</h2>
            <h3 className="text-xl font-bold">{episodio.titulo}</h3>
            <p className="text-xl">{episodio.descripcion}</p>
          </div>
        )}
      </div>
    </main>
  );
}
