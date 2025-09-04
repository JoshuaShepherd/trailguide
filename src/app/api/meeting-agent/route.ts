import { NextRequest, NextResponse } from 'next/server';
import { Agent, run } from '@openai/agents';
import { z } from 'zod';

const transcriptionAnalysisSchema = z.object({
  summary: z.string().describe('Concise summary of what was discussed for this agenda item'),
  keyDecisions: z.array(z.string()).describe('Clear decisions that were made during the conversation'),
  actionItems: z.array(z.string()).describe('Specific action items with owners and timelines if mentioned'),
  decisionQuality: z.enum(['complete', 'partial', 'insufficient']).describe('Assessment of decision completeness'),
  coaching: z.string().describe('Constructive coaching feedback on what might be missing or needs clarification'),
  nextSteps: z.string().describe('Recommended immediate next steps to move this item forward')
});

const meetingAgent = new Agent({
  name: 'Meeting Dictation & Coaching Agent',
  model: 'gpt-4o',
  instructions: `You are an expert meeting facilitator, project manager, and business coach specializing in thought leadership platform development. Your job is to analyze meeting transcriptions and provide coaching on decision quality.

CONTEXT: This is a strategic planning meeting between Josh (platform developer) and Alan (thought leader client) about building Alan's complete digital presence and business platform.

PROJECT BACKGROUND:
- Building custom publishing platform for thought leaders
- Focus on content ownership, audience building, and revenue optimization
- Technical implementation includes AI agents, LMS, content strategy, design, and launch planning
- Goal is to help thought leaders escape traditional publishing and own their entire value chain

YOUR ANALYSIS SHOULD:
1. **Summarize** what was actually discussed and decided
2. **Extract clear decisions** - be specific about what was definitively decided
3. **Identify action items** - who does what by when
4. **Assess decision quality** using project management best practices:
   - COMPLETE: Clear decision with specific next steps and ownership
   - PARTIAL: Decision made but missing key details or next steps
   - INSUFFICIENT: Discussion happened but no clear decision reached
5. **Provide coaching** - What's missing? What needs clarification? What risks do you see?
6. **Recommend next steps** - Specific actions to move this forward effectively

BE CONSTRUCTIVE BUT DIRECT. Focus on helping them make better decisions and avoid common project pitfalls.

DOMAIN-SPECIFIC CONSIDERATIONS:
- AI Agents: Need clear scope, user stories, and technical specifications
- mDNA LMS: Requires curriculum outline, learning objectives, and delivery method
- Monetization: Must have clear pricing strategy and revenue projections  
- Design: Needs brand guidelines, visual references, and approval process
- Content Strategy: Requires audience definition, content calendar, and distribution plan
- Launch: Needs timeline, marketing strategy, and success metrics`,
  outputType: transcriptionAnalysisSchema,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { transcription?: string; agendaItem?: string };
    const { transcription, agendaItem } = body;

    if (!transcription || !agendaItem) {
      return NextResponse.json(
        { error: 'Transcription and agenda item are required' },
        { status: 400 }
      );
    }

    // Create a readable stream for real-time response
    const encoder = new TextEncoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'analyzing', message: 'Analyzing meeting discussion...' })}\n\n`)
          );

          const result = await run(meetingAgent, `
AGENDA ITEM: ${agendaItem}

MEETING TRANSCRIPTION:
${transcription}

Please analyze this discussion and provide your assessment of decision quality and coaching recommendations.
          `);

          if (!result.finalOutput) {
            throw new Error('No analysis generated');
          }

          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ 
              type: 'analysis', 
              analysis: result.finalOutput 
            })}\n\n`)
          );

          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ 
              type: 'error', 
              message: 'Failed to analyze meeting. Please try again.' 
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
    console.error('Error in meeting agent API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
