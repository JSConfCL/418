import { HomeIcon } from "@heroicons/react/24/solid";
import { TeapotLogo } from "./teapot418";

export const Nav = () => {
  return (
    <div className="flex justify-center items-center py-4 px-4">
      <div className="flex gap-8 flex-1 max-w-4xl justify-between items-center">
        <div className="h-16 w-16 flex justify-center items-center">
          <TeapotLogo />
        </div>

        <div className="navbar rounded-sm flex flex-1 justify-end">
          <div className="flex-1 flex justify-end gap-6">
            <a className="sentence-case text-md link link-primary	link-hover hover:no-underline transition-all font-bold">
              Haz una pregunta!
            </a>
            <a className="sentence-case text-md link link-primary	link-hover hover:no-underline transition-all font-bold">
              Sponsors
            </a>
            <a className="sentence-case text-md link link-primary	link-hover hover:no-underline transition-all font-bold">
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
