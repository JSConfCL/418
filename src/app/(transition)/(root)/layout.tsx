import PageTransition from "@/components/PageTransition";
import { Footer } from "@/components/footer";
import { BackgroundDectoration } from "@/components/backgroundDectoration";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundDectoration />
      <PageTransition>
        {children}
        <Footer />
      </PageTransition>
    </>
  );
}
