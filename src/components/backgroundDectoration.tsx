import classNames from "classnames";

export const BackgroundDectoration = () => {
  return (
    <div
      className={classNames(
        // wrapper layout
        `absolute bottom-0 left-0 right-0 top-0 z-10 overflow-hidden`,
        // disable mouse interaction
        "pointer-events-none",
        // first circle
        `before:absolute before:-left-[0%] before:-top-[0%] before:-z-10 before:h-1/5 before:w-1/5 before:rounded-full	before:bg-purple-400 before:opacity-80 before:blur-3xl`,
        // second circle
        `after:absolute after:-bottom-[0%] after:-right-[0%] after:-z-10 after:h-1/5 after:w-1/5 after:rounded-full after:bg-pink-600 after:opacity-80 after:blur-3xl`,
        // Conditional logic for big screens
        `lg:before:-left-[5%] lg:before:-top-[5%] lg:before:opacity-40 lg:after:-bottom-[5%] lg:after:-right-[5%] lg:after:opacity-40`
      )}
    />
  );
};
