import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

// ✅ Supabase client setup
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ✅ ElevenLabs SDK setup
const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY!,
});

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    const token = authHeader?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) {
      return NextResponse.json({ error: "Invalid user" }, { status: 401 });
    }

    const response = await elevenlabs.conversationalAi.conversations.getSignedUrl({
      agentId: process.env.ELEVENLABS_AGENT_ID!,
    });

    return NextResponse.json({ signed_url: response.signedUrl });
  } catch (err) {
    console.error("❌ Error getting signed URL:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
