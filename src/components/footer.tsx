import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-4 bg-black text-center">
      Hecho con ❤️ por <Link href="https://jschile.org/" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-extrabold hover:no-underline text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">JavaScript Chile</Link>.
    </footer>
  );
};
