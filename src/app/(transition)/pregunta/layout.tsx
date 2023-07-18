import PageTransition from "@/components/PageTransition";
import { Footer } from "@/components/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      {children}
      <Footer />
    </PageTransition>
  );
}
