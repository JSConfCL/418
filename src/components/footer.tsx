import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black p-4 text-center">
      <div>
        Hecho con ❤️ por{" "}
        <Link
          href="https://jschile.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text font-extrabold text-transparent hover:no-underline"
        >
          JavaScript Chile
        </Link>
        .
      </div>
      <div className="leading-8">
        <Link
          href="https://github.com/JSConfCL/code_of_conduct"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer font-extrabold text-purple-600 hover:no-underline"
        >
          Código de Conducta
        </Link>
        &nbsp;|&nbsp;
        <Link
          href="https://github.com/JSConfCL/code_of_conduct/tree/main/politica_de_privacidad"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer font-extrabold text-pink-400 hover:no-underline"
        >
          Privacidad
        </Link>
      </div>
    </footer>
  );
};
