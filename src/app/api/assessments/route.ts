import { NextRequest, NextResponse } from 'next/server';

interface AssessmentSummary {
  trailMapStage?: string;
  dimensions?: Record<string, unknown>;
  topRecommendations?: unknown[];
  userHint?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as AssessmentSummary;
    
    // Validate the assessment summary structure
    if (!body.trailMapStage || !body.dimensions || !body.topRecommendations) {
      return NextResponse.json(
        { error: 'Invalid assessment summary format' },
        { status: 400 }
      );
    }

    // For now, just log the assessment (in production, save to database)
    console.log('Voice Assessment Summary:', {
      timestamp: new Date().toISOString(),
      summary: body,
      userAgent: req.headers.get('user-agent'),
      ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip')
    });

    // TODO: If Supabase is configured, save to voice_assessments table
    /*
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { createClient } = require('@supabase/supabase-js');
      const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );
      
      const { error } = await supabase
        .from('voice_assessments')
        .insert({
          summary_json: body,
          user_hint: body.userHint || null
        });
        
      if (error) {
        console.error('Supabase error:', error);
      }
    }
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Assessment summary received' 
    });

  } catch (error) {
    console.error('Assessment save error:', error);
    return NextResponse.json(
      { error: 'Failed to save assessment' },
      { status: 500 }
    );
  }
}
