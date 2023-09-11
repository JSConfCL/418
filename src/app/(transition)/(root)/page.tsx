import { Metadata } from "next";

import { API } from "@/api";
import { Episode } from "@/api/types";

import ClientPage from './client-page';

export const metadata: Metadata = {
  title: "Status 418: Im a Teapot",
  description:
    "Somos un Streaming y Podcast, de Tecnolog&iacute;a y Comunidad. Hecho con &hearts; por el equipo de JavaScript Chile.",
};

export default async function Page() {
  const data = await API.LatestEpisodes()
  const latestEpisodes = data?.allEpisode

  return <ClientPage latestEpisodes={latestEpisodes as Episode[]} />
}
