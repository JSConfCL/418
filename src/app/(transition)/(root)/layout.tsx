import PageTransition from "@/components/PageTransition";
import { Footer } from "@/components/footer";
import { BackgroundDecoration } from "@/components/backgroundDecoration";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundDecoration />
      <PageTransition>
        {children}
        <Footer />
      </PageTransition>
    </>
  );
}
