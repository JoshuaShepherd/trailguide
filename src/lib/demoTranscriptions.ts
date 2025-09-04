// Demo transcription examples for testing the meeting agent
export const DEMO_TRANSCRIPTIONS = {
  'ai-agents': `Josh: So Alan, let's talk about the AI agents we want to build for your platform. What specific functionality do you envision?

Alan: Well, I'm thinking about content generation, maybe something for audience engagement, and definitely something to help with research.

Josh: Okay, that's a good start. Let's get more specific - for content generation, are we talking blog posts, social media, email newsletters, or all of the above?

Alan: Probably all of them. I write a lot and I want to maintain my voice but speed up the process.

Josh: Got it. And for the research agent, what kind of research? Market research, academic papers, trend analysis?

Alan: Mostly trend analysis and competitive intelligence. I need to stay on top of what's happening in my industry.

Josh: That makes sense. We should probably limit it to 3-4 agents initially to keep scope manageable. What do you think about starting with content generation, research, and audience engagement?

Alan: Yeah, that sounds good. But I'm not sure how the audience engagement one would work exactly.

Josh: We could explore that more - maybe it helps with responding to comments, suggests engagement strategies, or analyzes audience sentiment. We don't have to decide everything today, but we should nail down the core functionality for each agent.`,

  'mdna-lms': `Alan: I've been thinking about the mDNA learning platform. I want to teach my methodology but I'm not entirely sure how to structure it yet.

Josh: No problem, we can work through that. What's the core outcome you want people to achieve after going through the mDNA program?

Alan: They should be able to identify their unique value proposition and create a personal brand strategy around it.

Josh: That's clear. How do you currently teach this? Do you have existing materials, workshops, a process?

Alan: I have some workshop slides and I've done it in person a few times. But I haven't created a structured online curriculum yet.

Josh: Okay, so we're building this from scratch essentially. How many hours of content do you think this should be? Are we talking a quick course or a comprehensive program?

Alan: I'm thinking comprehensive - maybe 8-10 hours of core content, plus exercises and worksheets.

Josh: Great. We should probably break that into modules. What would be a logical progression for someone learning mDNA?

Alan: Hmm, I haven't really mapped that out yet. Maybe we should start with self-assessment, then move to market analysis, then positioning... I need to think about this more.`,

  'content-monetization': `Josh: Let's dive into your content strategy and monetization. You're producing blogs, maybe a newsletter, potentially courses - how do we price all this?

Alan: I'm honestly not sure what people would pay for. I know some thought leaders charge $50/month for premium newsletters, others do $997 courses. I've been thinking about maybe using Substack for the newsletter part.

Josh: Hold on - let's think about this strategically. Substack isn't bad, but it's exactly what we're doing in a much better way. You'd be splitting your digital presence when the whole point is concentrated ownership.

Alan: What do you mean exactly?

Josh: Well, you're not choosing between Substack and nothing digital. You're choosing between Substack plus AlanHirsch.org versus all-in publishing through AlanHirsch.org. With us, you get complete ownership, similar cost, plus $50k in digital products and services.

Alan: But isn't Substack easier to start with?

Josh: That's the trap - it feels easier but then you're diluting focus and ownership at precisely when you want to do the opposite. Think about it - all your SEO, social signals, and authority should flow to YOUR domain, not Substack's.

Alan: I hadn't thought about it that way. What about the audience building aspect?

Josh: Here's the thing - people are more likely to go to a party where 5 of their favorite thought leaders are talking than just 2. Your platform becomes the gathering place for a network of thought leaders. In a world where digital trust defaults to zero, concentrated authority matters more than ever.

Alan: That makes sense. So we'd do everything through the one platform?

Josh: Exactly. Content marketing is hard and lonely - it dies like New Year's resolutions without community. This brings actual communitas and scenius into your publishing strategy. Zero downside, all upside.`
};

export function getRandomTranscription(itemId: string): string {
  const transcriptions = DEMO_TRANSCRIPTIONS as any;
  return transcriptions[itemId] || `Demo transcription for ${itemId} discussion would appear here. This would be the actual conversation between Josh and Alan about this specific agenda item.`;
}
