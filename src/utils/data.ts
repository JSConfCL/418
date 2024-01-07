const title = "Status 418: Im a Teapot";
const description =
  "Streaming de Tecnología, Web y Comunidad | Hecho por JavaScript Chile.";
const url = "https://418.jschile.org/";
const jsclUrl = "https://jschile.org/";
const images = "/og-image.jpg";

export const seo = {
  metadataBase: new URL(url),
  title,
  description,

  keywords: [
    "Podcast",
    "Streaming",
    "Tecnología",
    "Comunidades",
    "Chile",
    "Actualidad",
  ],
  authors: [{ name: "JSChile", url: jsclUrl }],

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#333" },
    { media: "(prefers-color-scheme: dark)", color: "#333" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // OpenGraph
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images,
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    domain: "jschile.org",
    url,
    title,
    description,
    images,
  },
};
