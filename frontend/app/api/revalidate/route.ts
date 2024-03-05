import { API_CACHE_TAGS } from "@/types/api";
import { getSlug } from "@/utils/slugs";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Revalidate Acknowledged" });
}

export async function POST(request: NextRequest) {
  const path = request.nextUrl.toString();
  console.log({ path });
  const payload = await request.json();
  console.log({ payload });
  if (payload?.model === "category") {
    //revalidate cache for categories
    revalidatePath("/", "layout");
    revalidatePath("/", "page");
    revalidateTag(API_CACHE_TAGS.CATEGORY_SLUGS);
    revalidateTag(API_CACHE_TAGS.CATEGORIES);
    revalidatePath("/categories", "page");
    // revalidatePath("/reports/[category]", "page");
    const name = payload.entry.name;
    const id = payload.entry.id;
    const slug = getSlug(name, id);
    console.log({ name, id, slug });
    revalidatePath(`/reports/${slug}`, "page");
  }
  // if (payload?.model === "report") {
  //   revalidateTag(API_CACHE_TAGS.REPORTS);
  //   revalidateTag(API_CACHE_TAGS.CATEGORY_SLUGS);
  //   revalidateTag(API_CACHE_TAGS.CATEGORIES);
  //   // revalidatePath("/reports", "page");
  //   // revalidatePath("/reports/[category]", "page");
  //   // revalidatePath("/reports/[category]/[report]", "page");
  // }

  revalidatePath("/", "layout");
  revalidatePath("/", "page");
  return NextResponse.json({ message: "Revalidate Done", revalidate: true });
}

//category created
// payload: {
//   event: 'entry.create',
//   createdAt: '2024-03-04T07:32:41.037Z',
//   model: 'category',
//   uid: 'api::category.category',
//   entry: {
//     id: 6,
//     name: 'Example',
//     slug: 'example',
//     createdAt: '2024-03-04T07:32:36.157Z',
//     updatedAt: '2024-03-04T07:32:36.157Z',
//     publishedAt: null,
//     image: [Object],
//     reports: [Object]
//   }
// }
