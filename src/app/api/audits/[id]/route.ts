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

    const { data, error } = await supabaseServer
      .from("audits")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Audit not found",
      },
      { status: 404 },
    );
  }
}
