import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { role, email } = body;

    if (!role || typeof role !== "string") {
      return NextResponse.json({ error: "role is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    if (!process.env.GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL is not configured");
      return NextResponse.json({ error: "server configuration error" }, { status: 500 });
    }

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, email }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Google Script returned error:", response.status, text);
      return NextResponse.json({ error: "failed to submit" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json({ error: "internal server error" }, { status: 500 });
  }
}
