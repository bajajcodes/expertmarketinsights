import { HeroHeader } from "@/components/hero-header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeroHeader title="OVERVIEW" />
      <div className="container relative">
        <section>
          <div className="overflow-hidden  bg-background mb-4">{children}</div>
        </section>
      </div>
    </>
  );
}
