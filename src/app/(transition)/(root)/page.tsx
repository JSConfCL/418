import type { Metadata } from "next";

import { API } from "@/api";

import ClientPage from "./client-page";

import { seo } from "@/utils/data";

import { Episode } from "@/api/types";
import { formatDate } from "@/utils/dates";

export async function generateMetadata(): Promise<Metadata> {
  const data = await API.LatestEpisodes();
  const latestEpisodes = data?.allEpisode;
  const latestOrNextEpisode = latestEpisodes[0];

  let description = seo.description;
  if (
    latestOrNextEpisode.date &&
    new Date(latestOrNextEpisode.date) > new Date()
  ) {
    description += ` Ve en vivo nuestro próximo Episodio el ${formatDate(
      latestOrNextEpisode.date
    )}.`;
    description += ` Chequea nuestro último episodio: #${latestEpisodes[1].episode} - ${latestEpisodes[1].title}`;
  } else {
    description += ` Chequea nuestro último episodio: #${latestOrNextEpisode.episode} - ${latestOrNextEpisode.title}`;
  }

  return {
    ...seo,
    description,
    openGraph: {
      ...seo.openGraph,
      description,
    },
    twitter: {
      ...seo.twitter,
      description,
    },
  };
}

export default async function Page() {
  const data = await API.LatestEpisodes();
  const latestEpisodes = data?.allEpisode;

  return <ClientPage latestEpisodes={latestEpisodes as Episode[]} />;
}
