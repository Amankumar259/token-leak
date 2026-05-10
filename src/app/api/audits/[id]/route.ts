export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/db/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    console.log(`[API] Fetching audit with id: ${id}`);

    const { data, error } = await supabaseServer
      .from("audits")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("[API] Supabase error:", error);
      return NextResponse.json(
        {
          error: "Database error",
          details: error.message,
        },
        { status: 500 },
      );
    }

    if (!data) {
      console.warn(`[API] No audit found for id: ${id}`);
      return NextResponse.json(
        {
          error: "Audit not found",
        },
        { status: 404 },
      );
    }

    console.log(`[API] Found audit:`, JSON.stringify(data, null, 2));
    return NextResponse.json(data);
  } catch (error) {
    console.error("[API] Error in GET /api/audits/[id]:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
