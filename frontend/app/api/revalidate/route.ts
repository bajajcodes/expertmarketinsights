import { API_CACHE_TAGS } from "@/types/api";
import { getSlug } from "@/utils/slugs";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Revalidate Acknowledged" });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  if (payload?.model === "category") {
    revalidateTag(API_CACHE_TAGS.CATEGORY_SLUGS);
    revalidateTag(API_CACHE_TAGS.CATEGORIES);
    revalidatePath("/categories", "page");
    const name = payload.entry.name;
    const id = payload.entry.id;
    const slug = getSlug(name, id);
    console.log({ name, id, slug });
    revalidatePath(`/reports/${slug}`, "page");
    // revalidatePath("/reports/[category]", "page");
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
