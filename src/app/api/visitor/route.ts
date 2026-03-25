import { NextResponse } from "next/server";

export async function GET() {
  const websiteId = process.env.UMAMI_WEBSITE_ID;
  const token = process.env.UMAMI_API_TOKEN;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_UMAMI_SRC}/api/websites/${websiteId}/metrics?startAt=0&endAt=${Date.now()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    return NextResponse.json({
      visitors: data.visitors?.value,
    });
  } catch (err) {
    return NextResponse.json(err);
  }
}