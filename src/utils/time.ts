const clockFormat = (num: number) =>
  Math.floor(num).toString().padStart(2, "0");
export const lasts = (runtime: number) => {
  const minutes = (runtime / 60) % 60;
  const hours = runtime / 60 / 60;

  return `${clockFormat(hours)} hr ${clockFormat(minutes)} min`;
};
