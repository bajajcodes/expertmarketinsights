import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization");
  if (
    !authorization ||
    authorization.startsWith?.("Bearer ") ||
    authorization !== `Bearer ${process.env.STRAPI_API_TOKEN}`
  ) {
    return NextResponse.error();
  }
  console.log({ request });
  console.log({ body: request.body });
  return NextResponse.json({ revalidated: true });
}

export async function GET(request: Request) {
  return NextResponse.json({ message: "Yes Revalidate Route is Working!!" });
}
