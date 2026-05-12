export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import { supabaseServer } from "@/lib/db/server";

import { sendAuditEmail } from "@/lib/email/sendAuditEmail";

export async function POST(request: Request) {
  try {
    if (!supabaseServer) {
      return NextResponse.json(
        {
          error: "Supabase not configured",
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    console.log("Lead Request:", body);

    const { data, error } = await supabaseServer
      .from("leads")
      .insert({
        email: body.email,

        company_name: body.companyName,

        role: body.role,

        audit_id: body.auditId,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase Error:", error);

      throw error;
    }

    await sendAuditEmail(body.email, body.savings);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Lead API Error:", error);

    return NextResponse.json(
      {
        error: "Failed to capture lead",
      },
      { status: 500 },
    );
  }
}
