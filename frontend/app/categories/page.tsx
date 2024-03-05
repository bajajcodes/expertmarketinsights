import { HeroHeader } from "@/components/hero-header";
import { getSlug } from "@/utils/slugs";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "../actions";
import { Category } from "../types";

export const revalidate = 1800;

//TODO: handle api errors
export default async function Categories() {
  let categories: Array<Category> = [];
  try {
    categories = await getCategories();
  } catch (error) {
    //TODO: add ability to notify users about error
    console.error({ error });
    categories = [];
  }
  return (
    <>
      <HeroHeader title="ALL CATEGORIES" />
      <section className="container">
        <ul className="container max-w-screen-lg m-auto py-8 flex flex-col gap-8 md:flex-row md:flex-wrap items-center justify-center">
          {categories.map(({ id, attributes: { name, image } }) => {
            const category = getSlug(name, id);
            return (
              <li key={id} className="overflow-hidden">
                <Link href={`/reports/${category}`}>
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
            );
          })}
        </ul>
        {categories.length < 1 && (
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground text-center mb-8">
            No Categories Found :)
          </h4>
        )}
      </section>
    </>
  );
}
