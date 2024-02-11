import { HeroHeader } from "@/components/hero-header";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "../actions";

//TODO: handle api errors
export default async function Categories() {
  const categories = await getCategories();
  return (
    <>
      <HeroHeader title="ALL CATEGORIES" />
      <section className="container">
        <ul className="m-auto py-8 flex flex-col gap-8 md:flex-row md:flex-wrap items-center justify-center">
          {categories.map(({ id, attributes: { name, image, value } }) => (
            <li key={id} className="overflow-hidden">
              <Link href={`/categories/${value}`}>
                <Image
                  src={image.data.attributes.url}
                  alt={image.data.attributes.alternativeText || name}
                  placeholder="empty"
                  width={250}
                  height={250}
                  className="transition-all hover:scale-105 object-cover bg-slate-100 m-auto"
                />
                <div className="space-y-1 mt-2 text-center">
                  <h3 className="font-medium leading-none">{name}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
