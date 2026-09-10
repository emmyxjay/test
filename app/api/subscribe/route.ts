import { NextResponse } from "next/server";

/* Stub so the capture form does not 404 in the prototype.
   Wire this to the real email provider before launch: validate, store,
   and send the confirmation. Nothing is persisted right now. */
export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") ?? "").trim();

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const url = new URL("/", request.url);
  url.hash = "capture";
  url.searchParams.set("subscribed", valid ? "1" : "0");

  return NextResponse.redirect(url, { status: 303 });
}
