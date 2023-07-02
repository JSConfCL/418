import PageTransition from "@/components/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition key="root-layout">{children}</PageTransition>;
}
