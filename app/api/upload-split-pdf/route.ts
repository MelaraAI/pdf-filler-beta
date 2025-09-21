import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const pdfFile = formData.get('pdfFile') as File;
    const userId = formData.get('userId') as string;
    const originalFilenamesStr = formData.get('originalFilenames') as string;
    const processingType = formData.get('processingType') as string || 'pdf_split';
    
    if (!pdfFile || !userId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const pdfBytes = new Uint8Array(await pdfFile.arrayBuffer());
    const originalFilenames = JSON.parse(originalFilenamesStr || '[]');
    
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const splitFileName = pdfFile.name;
    const storagePath = `${userId}/${splitFileName}`;
    
    const { error: uploadError } = await supabase.storage
      .from("modified-files")
      .upload(storagePath, pdfBytes, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (uploadError) {
      return NextResponse.json(
        { success: false, error: `Storage upload failed: ${uploadError.message}` },
        { status: 500 }
      );
    }

    const { error: dbError } = await supabase
      .from('modified_documents')
      .insert({
        user_id: userId,
        filename: splitFileName,
        storage_path: storagePath,
        original_filename: originalFilenames.join(', '),
        processing_type: processingType
      });

    if (dbError) {
      return NextResponse.json(
        { success: false, error: `Database insert failed: ${dbError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      filename: splitFileName,
      storagePath: storagePath
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
