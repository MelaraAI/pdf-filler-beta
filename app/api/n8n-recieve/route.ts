import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const config = {
  api: {
    bodyParser: false, // required to handle raw binary
  },
};

export async function POST(req: NextRequest) {
  try {
    // 🔒 Verify secret from header
    if (req.headers.get("x-n8n-secret") !== process.env.N8N_SECRET) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get binary buffer
    const arrayBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Initialize Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Use a consistent timestamp for both upload and public URL
    const timestamp = Date.now();
    const { error } = await supabase.storage
      .from("modified-files") // your bucket name
      .upload(`processed-${timestamp}.pdf`, buffer, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from("modified-files")
      .getPublicUrl(`processed-${timestamp}.pdf`);

    return NextResponse.json({
      success: true,
      fileUrl: publicUrlData.publicUrl,
    });

  } catch (err) {
    console.error("Error receiving file:", err);
    return NextResponse.json(
      { success: false, error: (err as Error)?.message || String(err) },
      { status: 500 }
    );
  }
}
