import Link from "next/link";

import { Youtube } from "@/components/icons/youtube";
import { LinkedIn } from "@/components/icons/linkedin";
import { Twitch } from "@/components/icons/tiwtch";
import { Facebook } from "@/components/icons/facebook";

import { cn } from "@/utils/libs";
import { STREAMS, StreamKeys } from "@/utils/consts";
import { ApplePodcast } from "../icons/apple_podcast";
import { GooglePodcast } from "../icons/google_podcast";
import { Spotify } from "../icons/spotify";

type Maybe<T> = T | null;

interface IconLinkProps {
  href?: Maybe<string>;
  target?: string;
  rel?: string;
  showDisabled?: boolean;
  variant?: string;
  icon?: string;
  size?: string;
}

const getVariant = (href: string) => {
  const patterns = [
    /^https?:\/\/www\.youtube\.com\//,
    /^https?:\/\/www\.twitch\.tv\//,
    /^https?:\/\/www\.linkedin\.com\//,
    /^https?:\/\/www\.facebook\.com\//,
    /^https?:\/\/open\.spotify\.com\//,
    /^https?:\/\/podcasts\.google\.com\//,
    /^https?:\/\/podcasts\.apple\.com\//,
  ];

  for (const pattern of patterns) {
    if (pattern.test(href)) {
      const match = href.match(/www\.(.*?)\./);
      if (match) {
        return match[1].replace(/^(open|podcasts)\./, "");
      }
    }
  }
};

const IconComponent = ({ name }: { name: StreamKeys }) => {
  const Icons = {
    youtube: Youtube,
    twitch: Twitch,
    linkedin: LinkedIn,
    facebook: Facebook,
    spotify: Spotify,
    apple: ApplePodcast,
    google: GooglePodcast,
  };
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return <Icon />;
};

const ICON_SIZES = {
  small: "small",
  tiny: "tiny",
};

export const StreamLink = ({
  href,
  target = "_blank",
  rel: _rel,
  showDisabled,
  variant: _variant,
  icon: _icon,
  size = "small",
}: IconLinkProps) => {
  if (!href && !showDisabled && !_icon) {
    return;
  }

  const variant = _variant ? _variant : href ? getVariant(href) : "";
  const icon = _icon ? _icon : variant;
  const rel = _rel
    ? _rel
    : target === "_blank"
    ? "noopener noreferrer"
    : "null";

  if (!variant && !icon) {
    return;
  }

  if (!href && icon) {
    return (
      <span
        className={cn(
          "cursor-not-allowed",
          size === ICON_SIZES.small ? "h-8 w-8" : "",
          size === ICON_SIZES.tiny ? "h-6 w-6" : ""
        )}
      >
        <IconComponent name={icon as StreamKeys} />
      </span>
    );
  }

  return (
    <Link
      href={href || ""}
      target={target}
      rel={rel}
      className={cn(
        "hover:before:-z-100 relative cursor-pointer  hover:no-underline hover:before:absolute hover:before:-left-[10%] hover:before:-top-[10%] hover:before:h-7 hover:before:w-7 hover:before:animate-gradient-svg hover:before:rounded-full hover:before:bg-gradient-radial hover:before:opacity-50 hover:before:blur",
        size === ICON_SIZES.small ? "h-8 w-8" : "",
        size === ICON_SIZES.tiny ? "h-6 w-6" : "",
        variant === STREAMS.youtube
          ? "hover:text-red-600 hover:before:from-red-400 hover:before:to-red-600"
          : "",
        variant === STREAMS.twitch
          ? "hover:text-purple-600 hover:before:from-purple-400 hover:before:to-purple-600"
          : "",
        variant === STREAMS.linkedin
          ? "hover:text-sky-600 hover:before:from-sky-400 hover:before:to-sky-600"
          : "",
        variant === STREAMS.facebook
          ? "hover:text-blue-600 hover:before:from-blue-400 hover:before:to-blue-600"
          : ""
      )}
    >
      <IconComponent name={icon as StreamKeys} />
    </Link>
  );
};
