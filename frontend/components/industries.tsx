import { navConfig } from "@/config/nav";
import Link from "next/link";
import { Icons } from "./icons";

export function Industries() {
  return (
    <section>
      <div className="container py-12 px-6">
        <div className="heading-section mb-5 mt-3 mt-lg-0">
          <h2 className="mb-3 text-center font-extrabold text-3xl text-expertmarketinsight">
            Industries
          </h2>
        </div>
        <div className="grid auto-rows-[1fr] gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row mb-4 max-w-xs md:max-w-3xl m-auto">
          {navConfig.sidebarNav[1].items.map((item) => {
            const Icon = Icons[item.icon!];
            return (
              <Link href={item.href!} key={item.href} className="grid">
                <div className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 ">
                  <div className="flex flex-col items-center justify-center hover:text-accent-foreground hover:transform hover:scale-105 hover:lg:scale-110 transition-all">
                    <h6 className="bg-expertmarketinsight text-white text-xl p-2 h-11  w-14 mx-auto rounded-[50%] hover:bg-blue-500 transition-all delay-0 transform ease-in-out hover:duration-2000 hover:rotate-360">
                      <Icon className="m-auto mb-3 h-6 w-6 text-white" />
                    </h6>
                    <p className="text-base text-center mb-4">
                      <strong>{item.title}</strong>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
