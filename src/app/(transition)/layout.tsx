"use client";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[calc(100vh_-_54px)] overflow-hidden bg-black">
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="sync">{children}</AnimatePresence>
      </LazyMotion>
    </div>
  );
}
