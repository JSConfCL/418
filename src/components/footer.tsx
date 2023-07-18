import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-4 bg-black text-center">
      <div>Hecho con ❤️ por <Link href="https://jschile.org/" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-extrabold hover:no-underline text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">JavaScript Chile</Link>.</div>
      <div className="leading-8">
        <Link href="https://github.com/JSConfCL/code_of_conduct" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-extrabold hover:no-underline text-purple-600">Código de Conducta</Link>&nbsp;|&nbsp;
        <Link href="https://github.com/JSConfCL/code_of_conduct/tree/main/politica_de_privacidad" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-extrabold hover:no-underline text-pink-400">Privacidad</Link>
      </div>
    </footer>
  );
};
