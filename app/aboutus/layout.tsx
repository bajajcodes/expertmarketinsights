import { SearchReport } from '@/components/search-report';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <SearchReport />
        <div className="bg-[#413c69] px-8 py-4 text-white gap-2 flex items-center">
          <span>
            <Link href="/" className="text-[#b0e0e6]">
              HOME
            </Link>
          </span>
          <span>/</span>
          <span>OVERVIEW</span>
        </div>
      </div>
      <div className="container relative">
        <section>
          <div className="overflow-hidden  bg-background mb-4">{children}</div>
        </section>
      </div>
    </>
  );
}
