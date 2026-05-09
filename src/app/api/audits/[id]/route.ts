import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/db/server";

export async function GET(
  request: Request,
  context: {
    params: {
      id: string;
    };
  },
) {
  try {
    const { id } = context.params;

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
