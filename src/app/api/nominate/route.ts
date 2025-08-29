import { NextRequest, NextResponse } from 'next/server';

interface NominationData {
  name: string;
  email: string;
  org: string;
  role: string;
  why: string;
  consent: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as NominationData;
    
    // Validate required fields
    const { name, email, org, role, why, consent } = body;
    
    if (!name || !email || !org || !role || !why || !consent) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // TODO: In a real implementation, you would:
    // 1. Save to database
    // 2. Send notification email to team
    // 3. Send confirmation email to nominator
    
    console.log('Board nomination received:', {
      name,
      email,
      org,
      role,
      why: why.substring(0, 100) + '...',
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing nomination:', error);
    return NextResponse.json(
      { error: 'Failed to process nomination' },
      { status: 500 }
    );
  }
}
