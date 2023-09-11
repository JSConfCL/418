import { StreamLink } from "@/components/StreamLink/StreamLink";

import { formatDate } from "@/utils/dates";
import { lasts } from "@/utils/time";

import { Episode } from "@/api/types";

export const EpisodePreview = ({
  episode,
  date,
  runtime,
  title,
  youtubeUrl,
  twitchUrl,
  facebookUrl,
  linkedinUrl,
}: Episode) => {
  const urls = [youtubeUrl, twitchUrl, facebookUrl, linkedinUrl].filter(
    Boolean
  );

  return (
    <div
      className={`w-full gap-2 rounded-xl bg-[#222] px-4 py-6 text-left font-bold text-slate-300`}
    >
      <div className="flex flex-col content-center items-center justify-center justify-items-center gap-4 text-center lg:text-left">
        <div className="h-32 w-32">
          <img src="/cover.jpg" />
        </div>
        <div className="text-base font-extrabold text-purple-400">
          Episodio {episode}
        </div>
        <div className="text-xl text-white">{title}</div>
        <div className="text-base text-slate-500">
          {date ? formatDate(date) : ""}
          {date && runtime ? " | " : ""}
          {runtime ? lasts(runtime) : ""}
        </div>
        {urls.length ? (
          <div className="flex h-4 justify-center gap-4 text-slate-300">
            {urls.map((url) =>
              url ? <StreamLink key={url} size="tiny" href={url} /> : null
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
