const YOUTUBE = "youtube";
const TWITCH = "twitch";
const LINKEDIN = "linkedin";
const FACEBOOK = "facebook";
const SPOTIFY = "spotify";
const APPLE = "apple";
const GOOGLE = "google";

export const STREAMS = {
  [YOUTUBE]: YOUTUBE,
  [TWITCH]: TWITCH,
  [LINKEDIN]: LINKEDIN,
  [FACEBOOK]: FACEBOOK,
  [SPOTIFY]: SPOTIFY,
  [APPLE]: APPLE,
  [GOOGLE]: GOOGLE,
};

export const ACTIVE_STREAMS = {
  [YOUTUBE]: true,
  [TWITCH]: true,
  [LINKEDIN]: true,
  [FACEBOOK]: true,
  [SPOTIFY]: false,
  [APPLE]: false,
  [GOOGLE]: false,
};

export type StreamKeys = keyof typeof STREAMS;
export type StreamValues = (typeof STREAMS)[keyof typeof STREAMS];
export type ActiveStreamKeys = keyof typeof STREAMS;
export type ActiveStreamValues = (typeof STREAMS)[keyof typeof STREAMS];
