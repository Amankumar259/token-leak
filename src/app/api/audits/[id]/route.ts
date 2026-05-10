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

    console.log(`Fetching audit with id: ${id}`);

    const { data, error } = await supabaseServer
      .from("audits")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    if (!data) {
      console.warn(`No audit found for id: ${id}`);
      return NextResponse.json(
        {
          error: "Audit not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in GET /api/audits/[id]:", error);

    return NextResponse.json(
      {
        error: "Audit not found",
      },
      { status: 404 },
    );
  }
}
