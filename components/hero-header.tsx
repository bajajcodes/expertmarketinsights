import Link from "next/link";
import { SearchReport } from "./search-report";

export function HeroHeader({ title }: { title: string }) {
  return (
    <div>
      <SearchReport />
      <div className="bg-[#413c69] px-8 py-4 text-white gap-2 flex items-center">
        <span>
          <Link href="/" className="text-[#b0e0e6] font-medium">
            HOME
          </Link>
        </span>
        <span>/</span>
        <span className="font-medium">{title}</span>
      </div>
    </div>
  );
}
