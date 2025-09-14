import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const pdfFile = formData.get('pdfFile') as File;
    const userId = formData.get('userId') as string;
    const originalFilenamesStr = formData.get('originalFilenames') as string;
    
    if (!pdfFile || !userId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Convert file to array buffer
    const pdfBytes = new Uint8Array(await pdfFile.arrayBuffer());
    const originalFilenames = JSON.parse(originalFilenamesStr || '[]');
    
    // Initialize Supabase with service role
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('❌ Missing Supabase environment variables');
      return NextResponse.json(
        { success: false, error: 'Server configuration error: Missing Supabase credentials' },
        { status: 500 }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const timestamp = Date.now();
    const mergedFileName = `merged-${timestamp}.pdf`;
    const storagePath = `${userId}/${mergedFileName}`;
    
    // Upload to modified-files bucket
    const { error: uploadError } = await supabase.storage
      .from("modified-files")
      .upload(storagePath, pdfBytes, {
        contentType: "application/pdf",
        upsert: true,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return NextResponse.json(
        { success: false, error: `Storage upload failed: ${uploadError.message || uploadError}` },
        { status: 500 }
      );
    }

    console.log('✅ File uploaded to storage successfully');

    // Insert record into modified_documents table
    const { error: dbError } = await supabase
      .from('modified_documents')
      .insert({
        user_id: userId,
        filename: mergedFileName,
        storage_path: storagePath,
        original_filename: originalFilenames.join(', '),
        processing_type: 'pdf_merge'
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, error: `Database insert failed: ${dbError.message || dbError.details || dbError}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      filename: mergedFileName,
      storagePath: storagePath
    });

  } catch (error) {
    console.error("Error in upload-merged-pdf:", error);
    return NextResponse.json(
      { success: false, error: (error as Error)?.message || String(error) },
      { status: 500 }
    );
  }
}
