import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/db/server";

import { runAudit } from "@/lib/audit-engine/runAudit";

import { generateSummary } from "@/lib/ai/generateSummary";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = runAudit(body);

    const aiSummary = await generateSummary(result);

    const { data, error } = await supabaseServer
      .from("audits")
      .insert({
        team_size: body.teamSize,
        use_case: body.useCase,
        tools: body.tools,
        result,
        ai_summary: aiSummary,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate audit",
      },
      { status: 500 },
    );
  }
}
