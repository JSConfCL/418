"use client";
import { AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    //
    <div className="relative h-full overflow-hidden bg-blue-900 bg-gradient-to-b	from-blue-900 from-30% to-fuchsia-800">
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </div>
  );
}
