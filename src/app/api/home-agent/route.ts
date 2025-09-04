import { NextRequest, NextResponse } from 'next/server';
import { generateResponse } from '@/agents/homePageAgent';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { userType?: string };
    const { userType } = body;

    if (!userType) {
      return NextResponse.json(
        { error: 'User type is required' },
        { status: 400 }
      );
    }

    // Create a readable stream for real-time response
    const encoder = new TextEncoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Send initial message
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'thinking', message: 'Thinking about what TrailGuide can do for you...' })}\n\n`)
          );

          // Generate the actual response
          const response = await generateResponse(userType);

          // Send the final response
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ 
              type: 'response', 
              message: response.message,
              nextStep: response.nextStep 
            })}\n\n`)
          );

          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ 
              type: 'error', 
              message: 'Sorry, something went wrong. Please try again.' 
            })}\n\n`)
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in home page agent API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
