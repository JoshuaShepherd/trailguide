import { NextRequest, NextResponse } from 'next/server';

export async function POST(_req: NextRequest) {
  try {
    // Create ephemeral API key for voice session
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-realtime-preview-2025-06-03',
        voice: 'alloy'
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return NextResponse.json(
        { error: 'Failed to create session' },
        { status: response.status }
      );
    }

    const sessionData = await response.json() as {
      id?: string;
      client_secret?: { value: string };
      ephemeral_key?: string;
    };
    
    return NextResponse.json({
      ephemeralKey: sessionData.client_secret?.value || sessionData.ephemeral_key || '',
      sessionId: sessionData.id || ''
    });

  } catch (error) {
    console.error('Session creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
