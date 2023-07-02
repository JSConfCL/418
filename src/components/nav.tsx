import Link from "next/link";
import { TeapotLogo } from "@/components/teapot418";

export const Nav = () => {
  return (
    <div className="fixed top-0 flex w-full justify-center py-4">
      <div className="md: xl: flex w-full max-w-5xl flex-row items-center justify-between px-6 transition-all md:px-10 xl:px-0">
        <div className="flex h-16 w-16 items-center justify-center">
          <TeapotLogo />
        </div>

        <div className="flex flex-1 justify-end ">
          <div className="flex flex-1 items-center justify-end gap-6">
            <Link
              href={"/pregunta"}
              className=" shrink-0 rounded border-b-4 border-amber-700  bg-amber-500 px-4 py-2 font-bold  text-white transition-all hover:border-amber-700 hover:bg-amber-600 hover:no-underline"
            >
              Haz una pregunta!
            </Link>
            <Link
              href={"/sponsors"}
              className=" shrink-0 p-2 font-bold transition-all hover:no-underline"
            >
              Sponsors
            </Link>
            <Link
              href={"/discord"}
              className=" shrink-0 p-2 font-bold transition-all hover:no-underline"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
