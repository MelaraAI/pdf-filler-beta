// app/api/transcribe/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // or 'nodejs' if you need Node APIs

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file') as File | null;
    const modelId = (form.get('model_id') as string) || 'scribe_v1';
    const languageCode = (form.get('language_code') as string) || '';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const elevenForm = new FormData();
    elevenForm.append('model_id', modelId);
    elevenForm.append('file', file, file.name); // multipart/form-data
    if (languageCode) elevenForm.append('language_code', languageCode);
    // Add any other optional params you want:
    // elevenForm.append('diarize', 'true'); etc.

    const res = await fetch('https://api.elevenlabs.io/v1/speech-to-text', {
      method: 'POST',
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY || '',
        // DO NOT set Content-Type manually for FormData; fetch will set it with boundary
      },
      body: elevenForm,
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: res.status });
    }

    const data = await res.json();
    // data looks like:
    // { language_code, language_probability, text, words: [...] }
    return NextResponse.json(data, { status: 200 });
  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unexpected error' }, { status: 500 });
  }
}
