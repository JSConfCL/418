import { Metadata } from "next";

import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "Status 418: Im a Teapot",
  description:
    "Somos un Streaming y Podcast, de Tecnolog&iacute;a y Comunidad. Hecho con &hearts; por el equipo de JavaScript Chile.",
};

export default function Page () {
  return <ClientPage />
}
