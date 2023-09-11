import { StreamLink } from "@/components/StreamLink/StreamLink";

import { formatDate } from "@/utils/dates";
import { lasts } from "@/utils/time";

import { Episode } from "@/api/types";

export const EpisodeDetails = ({
  episode,
  date,
  runtime,
  title,
  description,
  youtubeUrl,
  twitchUrl,
  facebookUrl,
  linkedinUrl,
}: Episode) => {
  const urls = [youtubeUrl, twitchUrl, facebookUrl, linkedinUrl].filter(
    Boolean
  );

  return (
    <div className="gap-4 rounded-xl bg-[#232323] p-4 text-left font-bold text-slate-300">
      <div className="flex flex-col content-center items-start justify-center justify-items-center gap-4 text-center lg:flex-row lg:text-left">
        <div className="w-auto self-center">
          <div className="h-32 w-32">
            <img src="/cover.jpg" />
          </div>
        </div>
        <div className="w-full">
          <div className="text-base font-extrabold text-purple-400">
            Episodio {episode}
          </div>
          <div className="text-xl text-white">{title}</div>
          <div className="text-base text-slate-500">
            {date ? formatDate(date) : ""}
            {date && runtime ? " | " : ""}
            {runtime ? lasts(runtime) : ""}
          </div>
          <div className="">{description}</div>
        </div>
      </div>
      {urls.length ? (
        <div>
          <div className="my-4 flex h-4 justify-center gap-4 text-slate-300 lg:justify-end">
            {urls.map((url) =>
              url ? <StreamLink key={url} size="tiny" href={url} /> : null
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
