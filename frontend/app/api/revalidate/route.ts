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
    const name = payload.entry.name;
    const id = payload.entry.id;
    const slug = getSlug(name, id);

    revalidateTag(API_CACHE_TAGS.CATEGORY_SLUGS);
    revalidateTag(API_CACHE_TAGS.CATEGORIES);
    revalidatePath("/categories", "page");
    revalidatePath(`/reports/${slug}`, "page");
  }

  if (payload?.model === "report") {
    //TODO: call api to get category slug for a report
    // const id = payload.entry.id;
    // const name = payload.entry.reportTitle;
    // const reportSlug = getSlug(name, id);

    revalidateTag(API_CACHE_TAGS.CATEGORY_SLUGS);
    revalidateTag(API_CACHE_TAGS.CATEGORIES);
    revalidateTag(API_CACHE_TAGS.CATEGORY_REPORTS);
    revalidateTag(API_CACHE_TAGS.REPORT_BY_ID);
    revalidateTag(API_CACHE_TAGS.REPORTS);

    revalidatePath("/reports", "page");
  }

  revalidatePath("/", "layout");
  revalidatePath("/", "page");
  return NextResponse.json({ message: "Revalidate Done", revalidate: true });
}
