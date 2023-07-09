import Link from "next/link";
import { TeapotLogo } from "@/components/teapot418";

export const Nav = () => {
  return (
    <div className="fixed top-0 z-10 flex w-full justify-center py-4">
      <div className="md: xl: flex w-full max-w-5xl flex-row items-center justify-between px-6 transition-all md:px-10 xl:px-0">
        <Link
          href={"/"}
          className="group cursor-pointer items-center justify-center px-4 py-2 pl-0 font-bold hover:no-underline"
        >
          <span className="flex shrink-0 items-center justify-center ">
            <span className="h-8 w-8 mr-2 group-hover:animate-gradient-svg from-purple-400 to-pink-600 group-hover:-translate-y-3 transform group-hover:rotate-45 transition duration-500 ease-in-out">
              <TeapotLogo />
            </span>
            Status <span className="group-hover:animate-gradient-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 ml-2">418</span>
          </span>
        </Link>

        <div className="flex flex-1 justify-end">
          <div className="flex flex-1 items-center justify-end gap-6">
            <Link
              href={"/"}
              className="shrink-0 p-2 text-slate-400 transition-all hover:no-underline"
            >
              Episodios
            </Link>
            <Link
              href={"/sponsors"}
              className="shrink-0 p-2 text-slate-400 transition-all hover:no-underline"
            >
              Sponsors
            </Link>
            <Link
              href={"/discord"}
              className="shrink-0 p-2 text-slate-400 transition-all hover:no-underline"
            >
              Discord
            </Link>
            <Link
              href={"/pregunta"}
              className="
                text-white shrink-0 p-2 transition-all hover:no-underline
                border border-transparent rounded-md
                relative box-border bg-black bg-clip-padding
                hover:animate-gradient-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-600 hover:text-black
                before:absolute before:inset-0 before:-z-10 before:blur-md before:bg-clip-padding before:animate-gradient-text before:bg-gradient-to-r before:from-amber-400 before:to-orange-600
                after:absolute after:-left-px after:-top-px after:-z-[1] after:bg-red after:rounded-md after:bg-gradient-to-r after:from-amber-400 after:to-orange-600 after:w-[calc(100%_+_2px)] after:h-[calc(100%_+_2px)]
              "
            >
              Haz una pregunta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
