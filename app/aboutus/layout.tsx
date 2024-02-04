import { InputWithButton } from '@/components/input-with-button';
import { images } from '@/data/layout';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <div className="relative h-[100px]">
          <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
          <Image
            src={images.banner.src}
            alt="about banner"
            width={100}
            height={100}
            className={
              'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
            }
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <InputWithButton className="min-w-[max-content]" direction="row" />
          </div>
        </div>
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
