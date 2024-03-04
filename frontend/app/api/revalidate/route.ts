import { API_CACHE_TAGS } from "@/types/api";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Revalidate Acknowledged" });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  if (payload?.model === "category") {
    //revalidate cache for categories
    revalidateTag(API_CACHE_TAGS.CATEGORY_SLUGS);
    revalidatePath("/categories");
    revalidatePath("/reports/[category]", "page");
  }
  // if (payload?.model === "report") {
  //   revalidatePath("/reports");
  //   revalidatePath("/reports/[category]", "page");
  //   revalidatePath("/reports/[category]/[report]", "page");
  // }
  console.log({ payload });
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
