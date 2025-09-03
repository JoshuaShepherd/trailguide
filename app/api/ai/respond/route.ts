import { NextRequest, NextResponse } from 'next/server';
import { getKitBySlug } from '@/kits';
import type { AgentRequest, QuickAction } from '@/types/kit';

export async function POST(request: NextRequest) {
  try {
    const body: AgentRequest = await request.json();
    
    // Validate request
    if (!body.orgId || !body.kit || !body.userId || !body.action) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get kit configuration
    const kit = getKitBySlug(body.kit);
    if (!kit) {
      return NextResponse.json(
        { error: 'Kit not found' },
        { status: 404 }
      );
    }

    // Find the action
    const action = kit.quickActions.find((a: QuickAction) => a.id === body.action);
    if (!action) {
      return NextResponse.json(
        { error: 'Action not found' },
        { status: 404 }
      );
    }

    // Build system prompt
    const systemPrompt = buildSystemPrompt(kit, body);
    console.log('System prompt generated:', systemPrompt.length, 'characters');
    
    // Mock AI response for now (replace with actual OpenAI call)
    const response = await generateMockResponse(action, body, kit);
    
    // Log the run (in real implementation, save to database)
    const runLog = {
      id: crypto.randomUUID(),
      orgId: body.orgId,
      kitSlug: body.kit,
      userId: body.userId,
      action: body.action,
      inputs: body.inputs,
      response: response.content,
      createdAt: new Date().toISOString(),
    };

    console.log('AI Run:', runLog);

    return NextResponse.json({
      success: true,
      data: {
        content: response.content,
        runId: runLog.id,
        citations: response.citations || [],
        suggestedActions: response.suggestedActions || [],
      }
    });

  } catch (error) {
    console.error('AI Response Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function buildSystemPrompt(kit: { name: string; stage: string; description: string; guardrails?: Array<{ title: string; body: string }> }, request: AgentRequest): string {
  const stageGuidance = {
    'Awareness': 'Provide cautious, foundational advice. Focus on education and basic best practices.',
    'Experimentation': 'Offer exploratory suggestions with clear next steps. Encourage testing and learning.',
    'Adoption': 'Give operational, actionable guidance. Focus on implementation and process optimization.',
    'Optimization': 'Provide advanced optimization strategies and efficiency improvements.',
    'Leadership': 'Offer thought leadership perspectives and industry-leading practices.'
  };

  let prompt = `You are an AI assistant specialized in ${kit.name.toLowerCase()} for nonprofit organizations.

ORGANIZATION CONTEXT:
- Organization ID: ${request.orgId}
- User Role: ${request.role}
- TrailMap Stage: ${request.context.stage}

KIT CONTEXT:
- Kit: ${kit.name}
- Stage: ${kit.stage}
- Description: ${kit.description}

STAGE GUIDANCE: ${stageGuidance[request.context.stage as keyof typeof stageGuidance]}

GUARDRAILS (CRITICAL - ALWAYS FOLLOW):`;

  if (kit.guardrails) {
    kit.guardrails.forEach((guardrail: { title: string; body: string }) => {
      prompt += `\n- ${guardrail.title}: ${guardrail.body}`;
    });
  }

  prompt += `\n\nGENERAL GUARDRAILS:
- Never expose private/sensitive data unless explicitly selected by the user
- Provide sources when citing numbers; ask for confirmation when uncertain
- Avoid overstating impact; suggest human review for legal/financial claims
- Focus on mission alignment and organizational sustainability

AVAILABLE CONTEXT:
- Current KPIs: ${JSON.stringify(request.context.kpis)}
- Selected Records: ${JSON.stringify(request.context.selectedRecords || [])}
- Documents Available: ${JSON.stringify(request.context.docs || [])}

Respond helpfully while strictly adhering to all guardrails.`;

  return prompt;
}

async function generateMockResponse(action: QuickAction, request: AgentRequest, kit: { name: string }) {
  // Mock responses based on action type
  const mockResponses = {
    donor_appeal_v1: {
      content: `# Donor Appeal Draft - ${request.inputs?.segment || 'General'} Segment

## Subject Line Options:
1. "Your impact this year has been extraordinary"
2. "Together, we're changing lives in our community"
3. "A heartfelt thank you and an important opportunity"

## Draft Appeal:

Dear [Donor Name],

As we reflect on this year's impact, your partnership has been at the heart of every success story we've shared.

**Your 2024 Impact:**
- Supported 1,847 community members through our programs
- Achieved 73% success rate in participant outcomes
- Contributed to $284,250 in total program funding

**Looking Ahead:**
We're excited to share an opportunity to deepen your impact in 2025. Your continued support will help us expand our most successful programs and reach even more families in need.

**Next Steps:**
- Personal meeting to discuss your philanthropic goals
- Site visit to see programs in action
- Customized giving options aligned with your interests

Would you be available for a brief call next week to discuss how we can partner together for even greater impact?

With gratitude,
[Development Team]

---
*Generated using TrailKit best practices for donor-centered communications*`,
      citations: ['Donor-Centered Fundraising Guidelines', 'TrailKit Communications Standards'],
      suggestedActions: ['Schedule follow-up meeting', 'Prepare site visit materials', 'Create stewardship plan']
    },

    prospect_research_v1: {
      content: `# Prospect Research Brief

## Prospect Profile:
**Name:** ${request.inputs?.prospectName || 'John Smith'}
**Capacity Indicators:** $25,000 - $50,000 (based on available public information)

## Connection Points:
- Board member at similar nonprofit organization
- Previously supported education initiatives
- Strong community involvement in local area

## Engagement Strategy:
1. **Initial Approach:** Warm introduction through mutual contact
2. **Meeting Goal:** Learn about philanthropic interests and priorities
3. **Follow-up:** Share relevant program information based on interests

## Recommended Next Steps:
- Schedule introductory meeting
- Prepare program materials aligned with education focus
- Research potential mutual connections

## Ethical Considerations:
- All information gathered from public sources only
- Focus on mission alignment over capacity
- Respect privacy and build authentic relationships

---
*Research conducted following ethical fundraising guidelines*`,
      citations: ['Public Records', 'AFP Ethical Guidelines', 'Donor Privacy Best Practices'],
      suggestedActions: ['Schedule introduction meeting', 'Prepare program overview', 'Identify mutual connections']
    },

    grants_loi_v1: {
      content: `# Letter of Inquiry Draft

**TO:** ${request.inputs?.funderName || 'Foundation Program Officer'}
**FROM:** [Organization Name]
**DATE:** ${new Date().toLocaleDateString()}
**RE:** Letter of Inquiry - ${request.inputs?.programName || 'Community Impact Program'}

## Organization Overview:
[Organization Name] has served our community for [X years], focusing on [mission area]. We have successfully managed $[amount] in grant funding and served [number] individuals annually.

## Program Description:
Our proposed ${request.inputs?.programName || 'Community Impact Program'} addresses the critical need for [problem statement]. The program will serve [target population] through [key activities].

## Funding Request:
We respectfully request $${request.inputs?.amount || '50,000'} over [timeframe] to support:
- Program delivery and coordination
- Direct services to participants
- Outcome measurement and evaluation
- Administrative support

## Expected Outcomes:
- [X number] individuals served
- [Specific outcome metric] achieved
- [Community impact measurement]

## Organizational Capacity:
Our team includes experienced staff with [relevant expertise]. We have strong partnerships with [key collaborators] and a track record of successful program delivery.

We would welcome the opportunity to submit a full proposal and discuss how this initiative aligns with [Foundation Name]'s priorities.

Respectfully submitted,
[Executive Director]

---
*Draft prepared using grant writing best practices*`,
      citations: ['Grant Writing Standards', 'Funder Guidelines', 'Proposal Best Practices'],
      suggestedActions: ['Review funder guidelines', 'Gather supporting documents', 'Schedule proposal planning meeting']
    },

    default: {
      content: `# ${action.label} - Analysis Complete

Based on your request and the current context of your ${kit.name.toLowerCase()} operations, here are my recommendations:

## Key Insights:
- Current performance indicators show [analysis based on KPIs]
- Opportunities for improvement in [relevant areas]
- Alignment with your ${request.context.stage} stage priorities

## Recommended Actions:
1. **Immediate:** [Short-term actionable step]
2. **Short-term (30 days):** [Medium-term planning item]
3. **Long-term (90 days):** [Strategic initiative]

## Resources Needed:
- Staff time: [estimate]
- Budget considerations: [if applicable]
- External support: [if needed]

## Success Metrics:
- [Specific measurable outcome 1]
- [Specific measurable outcome 2]
- [Specific measurable outcome 3]

## Next Steps:
Based on your organization's ${request.context.stage} stage, I recommend starting with [specific first step] and then building toward [longer-term goal].

Would you like me to elaborate on any of these recommendations or help you develop an implementation timeline?`,
      citations: [`${kit.name} Best Practices`, 'TrailKit Standards', 'Industry Guidelines'],
      suggestedActions: ['Create implementation timeline', 'Identify required resources', 'Set up tracking metrics']
    }
  };

  // Return appropriate mock response
  const responseKey = action.promptId || 'default';
  return mockResponses[responseKey as keyof typeof mockResponses] || mockResponses.default;
}
