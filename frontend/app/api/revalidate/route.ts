import { getCategoryByReportId } from "@/app/actions";
import { $TsFixMe } from "@/app/types";
import { API_CACHE_TAGS } from "@/types/api";
import { getSlug } from "@/utils/slugs";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Revalidate Acknowledged" });
}

export async function POST(request: NextRequest) {
  try {
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
      const id = payload.entry.id;
      const name = payload.entry.reportTitle;
      const reportSlug = getSlug(name, id);
      const category = await getCategoryByReportId(id);

      revalidateTag(API_CACHE_TAGS.CATEGORY_SLUGS);
      revalidateTag(API_CACHE_TAGS.CATEGORIES);

      if (!category) return;

      const categorySlug = getSlug(category.title, category.id);

      revalidatePath(`/reports/${categorySlug}/${reportSlug}`, "page");
      revalidatePath(`/reports/${categorySlug}`, "page");
      revalidatePath("/reports", "page");
    }

    return NextResponse.json({ message: "Revalidate Done", revalidate: true });
  } catch (err: $TsFixMe) {
    return NextResponse.json(
      {
        message: `Revalidate Failed: ${
          err?.message || "Failed To Revalidate, Something went Wrong!!"
        }`,
        revalidate: false,
      },
      {
        status: 400,
        statusText: "Revalidate Path Failed.",
      }
    );
  }
}
