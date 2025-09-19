"use client";

import React, { useState } from "react";
import { 
  Clock, 
  DollarSign, 
  Star, 
  ChevronRight, 
  ChevronDown,
  BookOpen, 
  Target, 
  Lightbulb, 
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  FileText,
  Settings,
  TrendingUp,
  Shield,
  BarChart3,
  Globe
} from "lucide-react";

// Type definitions
interface CoreWay {
  id: string;
  title: string;
  description: string;
  outcome: string;
  icon: React.ReactElement;
  color: string;
}

interface Approach {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface MicroProcess {
  id: string;
  title: string;
  duration: string;
  steps: string;
  icon: React.ReactElement;
}

interface CaseStudy {
  id: string;
  persona: string;
  title: string;
  task: string;
  approach: string;
  efficiency: string;
  revenue: string;
  improvement: string;
  artifacts: string[];
  icon: React.ReactElement;
  color: string;
}

const coreWays: CoreWay[] = [
  {
    id: "reframe",
    title: "Reframe narrow prompts into strategic deliverables",
    description: "Start with a tactical question ('Where do I buy X?') and expand it into rubrics, benchmarks, playbooks, and 90-day plans.",
    outcome: "Turns a single answer into a reusable asset (report, framework, brief).",
    icon: <Target className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "rubrics",
    title: "Build lightweight, custom rubrics (0–100) to score work",
    description: "Define criteria → score current state → compare against competitors → derive priorities.",
    outcome: "Creates objectivity and a shared language for decisions.",
    icon: <Star className="h-5 w-5" />,
    color: "yellow"
  },
  {
    id: "compress",
    title: "Compress multi-role work into one thread",
    description: "Researcher (find), Analyst (synthesize), Strategist (prioritize), Copywriter (draft), Designer (spec).",
    outcome: "5–10x speed without hiring a team; you still edit and own the output.",
    icon: <Zap className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "template",
    title: "Template the result for reuse",
    description: "Convert a one-off into a repeatable pattern (e.g., city brief template, learning module template, site spec template).",
    outcome: "Every future project starts at 60–80% complete.",
    icon: <FileText className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "quantify",
    title: "Quantify impact and potential",
    description: "Always estimate time saved vs. the 'old way,' and revenue potential when applicable.",
    outcome: "Moves conversation from 'interesting' to 'investable.'",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "emerald"
  },
  {
    id: "anchor",
    title: "Anchor in original voice / mission",
    description: "Quote authors (e.g., Brad Brisco), align with brand/values, and state guardrails (no plagiarism, human oversight).",
    outcome: "Quality + integrity; AI assists, you author.",
    icon: <Shield className="h-5 w-5" />,
    color: "red"
  },
  {
    id: "implement",
    title: "Make it implementation-ready",
    description: "End with a 90-day plan, backlog, or executable prompts (for staff, devs, comms).",
    outcome: "Avoids 'inspiration without execution.'",
    icon: <PlayCircle className="h-5 w-5" />,
    color: "indigo"
  }
];

const approaches: Approach[] = [
  {
    id: "input-shaping",
    title: "Input Shaping",
    description: "Gather constraints (audience, tone, doctrine/ethics, success metrics). Supply context snippets (briefs, quotes, data tables) before asking for synthesis.",
    icon: <Settings className="h-5 w-5" />
  },
  {
    id: "progressive",
    title: "Progressive Elaboration",
    description: "Draft → critique → refine → format → finalize. Ask AI for its own 'assumptions' and 'unknowns' to close gaps quickly.",
    icon: <ArrowRight className="h-5 w-5" />
  },
  {
    id: "comparative",
    title: "Comparative Analysis",
    description: "Ask for competitor/peer benchmarking; use a scoring rubric. Extract the top 3 deltas that would change outcomes fastest.",
    icon: <Target className="h-5 w-5" />
  },
  {
    id: "cross-format",
    title: "Cross-format Conversion",
    description: "One core text → slide outline, donor note, social posts, discussion guide, 1-page brief. Improves reach and multiplies value.",
    icon: <FileText className="h-5 w-5" />
  },
  {
    id: "decision",
    title: "Decision Frameworks",
    description: "Turn messy choices into decision trees/checklists (e.g., planter health, channel selection, grant fit). Captures tacit expertise in a usable tool.",
    icon: <CheckCircle className="h-5 w-5" />
  },
  {
    id: "metric-first",
    title: "Metric-First Planning",
    description: "Define 2–3 KPIs per deliverable (e.g., hours saved, response rate, # of qualified leads). Enables quick post-experiment review ('adopt, adapt, abandon').",
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    id: "ethical",
    title: "Ethical Guardrails",
    description: "Disallow AI in authorship zones that would undermine integrity. Require disclosure, editing, and human theological/relational oversight.",
    icon: <Shield className="h-5 w-5" />
  }
];

const microProcesses: MicroProcess[] = [
  {
    id: "rubric-builder",
    title: "Rubric Builder",
    duration: "10 min",
    steps: "List criteria → weight → draft 0–100 rubric → sample score → fix bias → finalize.",
    icon: <Star className="h-5 w-5" />
  },
  {
    id: "donor-segmentation",
    title: "Donor Segmentation",
    duration: "15 min",
    steps: "Export CSV → ask AI to cluster RFM (recency/frequency/amount) → write 3 tailored scripts → schedule.",
    icon: <Users className="h-5 w-5" />
  },
  {
    id: "meeting-summary",
    title: "Meeting Auto-Summary",
    duration: "10 min",
    steps: "Upload transcript → ask for decisions/tasks/owners/dates → push to task list.",
    icon: <FileText className="h-5 w-5" />
  },
  {
    id: "content-clarity",
    title: "Content Clarity Pass",
    duration: "8 min",
    steps: "Paste draft → request 8th-grade read, jargon removal, 3 alt hooks → accept/rewrite.",
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    id: "grant-prospecting",
    title: "Grant Prospecting",
    duration: "20 min",
    steps: "Mission tags → ask for 20 aligned funders + award sizes + next deadlines → shortlist 5 → draft LOI shell.",
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    id: "sermon-support",
    title: "Sermon Support",
    duration: "20 min",
    steps: "Text/pericope → lexical/context research summary → guardrail: no sermon drafting → produce outline prompts for reflection.",
    icon: <BookOpen className="h-5 w-5" />
  }
];

const caseStudies: CaseStudy[] = [
  {
    id: "paulo-donor",
    persona: "Paulo (Church Planter)",
    title: "Donor Care Flywheel",
    task: "Retain and re-engage 100 donors.",
    approach: "Export CRM → AI clusters by RFM → generate 3 tailored email shells (new, lapsed, major) → Paulo edits in his voice → schedule.",
    efficiency: "4 hrs vs. 18 hrs manual (save ~14 hrs).",
    revenue: "+1–2 gifts/month from lapsed; 3–5 major-donor touchpoints/quarter.",
    improvement: "Clearer, segmented messaging; consistent cadence.",
    artifacts: ["RFM rubric", "90-day touch plan", "editable email bank"],
    icon: <DollarSign className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "paulo-sermon",
    persona: "Paulo (Church Planter)",
    title: "Sermon Research Support (Guardrailed)",
    task: "Contextual exegesis on a pericope.",
    approach: "Provide passage + constraints; AI compiles lexical, historical, intertextual notes; no drafting, only research scaffolding; Paulo journals insights.",
    efficiency: "45 min vs. 3–4 hrs library dig (save ~2–3 hrs).",
    revenue: "N/A.",
    improvement: "Broader sources synthesized; stronger clarity without authorship compromise.",
    artifacts: ["Research digest", "outline prompts", "reflection worksheet"],
    icon: <BookOpen className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "yeonji-discipleship",
    persona: "Yeonji (YA Leader)",
    title: "Multiplying Discipleship Guides",
    task: "Create weekly discussion guides for a 10-week series.",
    approach: "Seed one master outline + Scripture; AI drafts question banks at three difficulty levels + leader notes; Yeonji edits tone/examples.",
    efficiency: "2 hrs vs. 12–15 hrs (save ~10+ hrs).",
    revenue: "N/A; possible retreat upsell via sign-ups.",
    improvement: "Better scaffolding for new small-group leaders.",
    artifacts: ["Series template", "per-week guide", "facilitator cheat sheets"],
    icon: <Users className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "yeonji-events",
    persona: "Yeonji (YA Leader)",
    title: "Event Pipeline Booster",
    task: "Increase retreat registrations by 20%.",
    approach: "AI builds audience personas, messaging angles, 4-week promo cadence, and landing copy; Yeonji localizes testimonies.",
    efficiency: "3 hrs vs. 10–12 hrs.",
    revenue: "If 30 more attendees × $75 = $2,250.",
    improvement: "Cohesive funnel; consistent multi-channel messaging.",
    artifacts: ["Promo calendar", "email/social variants", "landing page draft"],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "orange"
  },
  {
    id: "susan-health",
    persona: "Susan (Systems/Movement Leader)",
    title: "Planter Health Dashboard",
    task: "Monitor 30 planters for risk.",
    approach: "AI helps define health rubric (spiritual, relational, financial, ministry KPIs); monthly self-report → AI summary → Susan triage list.",
    efficiency: "2 hrs/mo vs. ~12 hrs/mo manual (save ~10 hrs/mo).",
    revenue: "Indirect—earlier support prevents costly burnout/attrition.",
    improvement: "Objective triage; targeted coaching.",
    artifacts: ["Rubric", "monthly report form", "red-flag SOP", "coaching playbook"],
    icon: <Shield className="h-5 w-5" />,
    color: "red"
  },
  {
    id: "susan-grants",
    persona: "Susan (Systems/Movement Leader)",
    title: "Grant Prospecting Engine",
    task: "Identify 15 aligned funders for a church-planting initiative.",
    approach: "Mission tags + geography → AI list with award ranges, deadlines, themes → LOI shell for top 5.",
    efficiency: "2–3 hrs vs. 15–20 hrs.",
    revenue: "If 1 grant at $25k–$50k lands, clear ROI.",
    improvement: "Focused pipeline; faster cycles.",
    artifacts: ["Funder matrix", "LOI library", "timeline/Gantt"],
    icon: <DollarSign className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "flora-study",
    persona: "Flora (Seminarian)",
    title: "Integrity-First Study Workflow",
    task: "Write a 2,000-word paper with original argument.",
    approach: "AI for scope note, outline options, counterarguments, annotated bib pointers; Flora drafts herself; AI only for clarity pass and citation checks.",
    efficiency: "5–6 hrs vs. 10–12 hrs.",
    revenue: "N/A (academic success; scholarships indirectly).",
    improvement: "Stronger thesis; clearer structure; better sources.",
    artifacts: ["Outline tree", "literature map", "revision checklist", "ethics note"],
    icon: <BookOpen className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "flora-teaching",
    persona: "Flora (Seminarian)",
    title: "Teaching Lab for Practicum",
    task: "Design a 4-week teaching series.",
    approach: "AI co-creates learning objectives, assessment rubrics, diverse modalities (discussion, case study, journaling), and accessibility notes; Flora authors content.",
    efficiency: "3 hrs vs. 10 hrs.",
    revenue: "N/A; portfolio value.",
    improvement: "Pedagogical rigor; inclusive design.",
    artifacts: ["Syllabus", "lesson plans", "rubrics", "feedback forms"],
    icon: <Users className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "stew-financial",
    persona: "Stew (Donor/Board)",
    title: "Financial Clarity Brief",
    task: "Understand budget and impact quickly for fiduciary decisions.",
    approach: "Upload CSVs; AI produces 1-page impact summary with charts, program ROI snapshots, and variance notes; staff verifies.",
    efficiency: "1 hr vs. 6–8 hrs spreadsheet wrangling.",
    revenue: "Better board confidence → higher giving / approvals.",
    improvement: "Transparency; data-driven stewardship.",
    artifacts: ["Monthly 1-pager", "glossary", "board Q&A script"],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "emerald"
  },
  {
    id: "cross-meeting",
    persona: "Cross-Persona",
    title: "Meeting → Action in 10 Minutes",
    task: "Turn a 60-minute cross-team meeting into execution.",
    approach: "Record → transcript → AI extracts decisions, owners, due dates; sends draft recap; leader edits and posts to task tool.",
    efficiency: "10 min vs. 60–90 min manual recap.",
    revenue: "Indirect—less drift, faster campaigns and appeals.",
    improvement: "Shared clarity; tighter follow-through.",
    artifacts: ["Recap template", "decision log", "RACI cheat sheet"],
    icon: <FileText className="h-5 w-5" />,
    color: "indigo"
  },
  {
    id: "paulo-volunteer",
    persona: "Paulo (Church Planter)",
    title: "Volunteer Coordination",
    task: "Transform messy volunteer sign-up data into clear weekly schedules and text reminders.",
    approach: "Upload volunteer spreadsheet → AI creates organized schedules by role/time → generates personalized reminder texts → Paulo reviews and sends.",
    efficiency: "Saves 3–4 hours weekly vs. manual texts/emails.",
    revenue: "Indirect—higher volunteer reliability reduces event costs.",
    improvement: "Better communication flow and less burnout for Paulo.",
    artifacts: ["Weekly schedule templates", "text reminder scripts", "volunteer role matrix"],
    icon: <Users className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "paulo-community",
    persona: "Paulo (Church Planter)",
    title: "Community Needs Scan",
    task: "Summarize local news, census updates, and city council agendas into a 2-page community context brief.",
    approach: "Feed AI local news links and city data → request community needs analysis → generate 2-page brief with ministry opportunities → Paulo adds local insights.",
    efficiency: "1 hr vs. 6–8 hrs of reading/compiling.",
    revenue: "Helps sharpen donor pitches ('here's the need we're addressing').",
    improvement: "Gives Paulo clearer vision alignment with his city.",
    artifacts: ["Community context brief template", "ministry opportunity matrix", "donor pitch talking points"],
    icon: <FileText className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "yeonji-devotional",
    persona: "Yeonji (YA Leader)",
    title: "Digital Devotional Series",
    task: "Expand handwritten reflections into a 6-week devotional, with discussion prompts for small groups.",
    approach: "Upload handwritten notes → AI expands into structured devotional format → adds discussion questions and reflection prompts → Yeonji edits for voice consistency.",
    efficiency: "2 hrs vs. 10–12 hrs of drafting.",
    revenue: "Could be self-published or distributed to raise retreat funds ($500–$1,000 potential).",
    improvement: "Professional polish while preserving her authentic voice.",
    artifacts: ["6-week devotional series", "small group discussion guides", "reflection journal prompts"],
    icon: <BookOpen className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "yeonji-social",
    persona: "Yeonji (YA Leader)",
    title: "Social Media Engagement",
    task: "Create post drafts, hashtags, and story arcs that highlight student testimonies.",
    approach: "Provide student testimony snippets → AI creates engaging post formats → generates relevant hashtags → develops content calendar → Yeonji personalizes and schedules.",
    efficiency: "1–2 hrs/week vs. 6 hrs.",
    revenue: "Indirect—higher engagement supports donor confidence.",
    improvement: "More consistent messaging across platforms.",
    artifacts: ["Content calendar template", "hashtag bank", "testimony post formats", "engagement tracking sheet"],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "pink"
  },
  {
    id: "susan-policy",
    persona: "Susan (Systems/Movement Leader)",
    title: "Policy Drafting",
    task: "Draft template policies for child safety, financial accountability, and digital use.",
    approach: "Define policy scope and compliance requirements → AI drafts comprehensive policy templates → Susan adapts for network context → legal review → rollout to planters.",
    efficiency: "4 hrs vs. 20+ hrs of manual drafting.",
    revenue: "Indirect—stronger compliance avoids liability risks that could cost thousands.",
    improvement: "Raises governance standards network-wide.",
    artifacts: ["Child safety policy template", "financial accountability framework", "digital use guidelines", "implementation checklist"],
    icon: <Shield className="h-5 w-5" />,
    color: "red"
  },
  {
    id: "susan-annual-report",
    persona: "Susan (Systems/Movement Leader)",
    title: "Annual Report Builder",
    task: "Synthesize planter reports, attendance, and baptisms into a professional annual impact report.",
    approach: "Upload planter data and metrics → AI creates narrative structure with data visualizations → synthesizes stories and statistics → Susan adds personal touches and photos.",
    efficiency: "6 hrs vs. 30 hrs of staff work.",
    revenue: "Direct—better reports increase donor trust, supporting $50k–100k in renewals.",
    improvement: "Professional storytelling that celebrates planters more effectively.",
    artifacts: ["Annual impact report template", "data visualization templates", "story integration framework", "donor communication packet"],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "emerald"
  },
  {
    id: "flora-language",
    persona: "Flora (Seminarian)",
    title: "Language Study",
    task: "Generate Greek/Hebrew parsing drills and vocabulary quizzes based on syllabus.",
    approach: "Upload syllabus and vocabulary lists → AI creates custom parsing exercises → generates progressive difficulty quizzes → Flora practices and tracks progress.",
    efficiency: "1 hr vs. 5 hrs of flashcard prep.",
    revenue: "N/A.",
    improvement: "Deepens retention, freeing time for reflective study.",
    artifacts: ["Custom parsing drill sets", "progressive vocabulary quizzes", "study tracking system", "retention analytics"],
    icon: <BookOpen className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "flora-internship",
    persona: "Flora (Seminarian)",
    title: "Internship Prep",
    task: "Rehearse pastoral care conversations through roleplay prompts.",
    approach: "Define common pastoral scenarios → AI creates realistic roleplay prompts → practice responses and approaches → AI provides feedback on empathy and approach → build confidence.",
    efficiency: "30 min vs. hours of awkward trial/error.",
    revenue: "N/A.",
    improvement: "Builds confidence and empathy before stepping into real-life ministry.",
    artifacts: ["Pastoral care scenario library", "response practice framework", "empathy development exercises", "confidence building checklist"],
    icon: <Users className="h-5 w-5" />,
    color: "teal"
  },
  {
    id: "stew-portfolio",
    persona: "Stew (Donor/Board)",
    title: "Portfolio Alignment",
    task: "Review giving history and generate report showing alignment with stated values.",
    approach: "Upload giving history and value statements → AI analyzes alignment patterns → identifies gaps and opportunities → generates strategic giving recommendations → Stew refines approach.",
    efficiency: "1 hr vs. many hrs of spreadsheet review.",
    revenue: "Guides strategic giving, potentially increasing donations by 10–20%.",
    improvement: "Aligns generosity with mission impact, raising satisfaction.",
    artifacts: ["Giving alignment analysis", "strategic giving recommendations", "values-impact matrix", "portfolio optimization plan"],
    icon: <DollarSign className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "stew-peer-influence",
    persona: "Stew (Donor/Board)",
    title: "Peer Influence Notes",
    task: "Draft short summaries of funded projects for sharing with peers and board members.",
    approach: "Provide project details and outcomes → AI crafts compelling success story summaries → includes key metrics and impact → Stew personalizes for specific audiences → shares with network.",
    efficiency: "30 min vs. 3–4 hrs writing summaries himself.",
    revenue: "Sharing success stories often sparks new gifts from network ($10k+ potential).",
    improvement: "Clearer, more confident storytelling of why he gives.",
    artifacts: ["Project success story templates", "impact summary formats", "peer sharing strategies", "network engagement tracker"],
    icon: <FileText className="h-5 w-5" />,
    color: "indigo"
  },
  {
    id: "paulo-launch-budget",
    persona: "Paulo (Church Planter)",
    title: "Launch Budget Drafting",
    task: "Generate a first-pass launch budget with typical categories and sample numbers.",
    approach: "Define church context and location → AI creates budget template with rent, supplies, insurance categories → includes typical cost ranges → Paulo customizes for local market.",
    efficiency: "1 hr vs. 6–8 hrs of manual spreadsheet building.",
    revenue: "Improves donor trust by showing financial transparency early.",
    improvement: "Gives Paulo a framework to adapt instead of starting from scratch.",
    artifacts: ["Launch budget template", "expense category guides", "donor transparency report", "financial planning checklist"],
    icon: <DollarSign className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "paulo-prayer-walk",
    persona: "Paulo (Church Planter)",
    title: "Neighborhood Prayer Walk Guide",
    task: "Create a contextualized prayer walk script tied to zip code's demographic data.",
    approach: "Input neighborhood demographics and ministry vision → AI creates prayer prompts for specific community needs → includes scriptural anchors → Paulo adds local insights.",
    efficiency: "30 min vs. 3 hrs prep.",
    revenue: "Indirect—engages donors with stories of 'prayer data in action.'",
    improvement: "Enhances intentionality of team engagement.",
    artifacts: ["Prayer walk script template", "demographic prayer prompts", "community engagement stories", "team mobilization guide"],
    icon: <Users className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "paulo-sermon-archive",
    persona: "Paulo (Church Planter)",
    title: "Sermon Archive Indexing",
    task: "Tag and organize past sermons into themes with summaries.",
    approach: "Upload sermon transcripts or notes → AI categorizes by themes (discipleship, justice, mission) → creates searchable index → generates summary descriptions → Paulo reviews and refines.",
    efficiency: "2 hrs vs. 15 hrs manual indexing.",
    revenue: "Opens possibility of publishing a sermon e-book for supporters.",
    improvement: "Gives Paulo clearer recall and storytelling tools.",
    artifacts: ["Sermon index database", "theme categorization system", "sermon summaries", "e-book publication template"],
    icon: <BookOpen className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "paulo-donor-deck",
    persona: "Paulo (Church Planter)",
    title: "Donor Vision Deck",
    task: "Turn Paulo's notes into a 10-slide donor pitch deck with key stats and vision framing.",
    approach: "Provide vision notes and community data → AI creates slide structure → develops compelling narrative flow → includes visual suggestions → Paulo adds personal touches and local photos.",
    efficiency: "1 hr vs. 8–10 hrs designing.",
    revenue: "Could yield $5k–$20k in launch gifts.",
    improvement: "Professionalizes communication of his vision.",
    artifacts: ["10-slide pitch deck template", "vision narrative framework", "donor presentation guide", "visual design specifications"],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "orange"
  },
  {
    id: "paulo-calendar",
    persona: "Paulo (Church Planter)",
    title: "Calendar Integration",
    task: "Suggest weekly rhythms optimized for energy and focus.",
    approach: "Assess current schedule and energy patterns → AI suggests optimal timing for sermon prep, donor calls, pastoral visits → creates weekly template → Paulo tests and adjusts.",
    efficiency: "30 min vs. 2 hrs of manual trial and error.",
    revenue: "Indirect—helps avoid burnout, sustaining donor confidence.",
    improvement: "Builds healthier, more sustainable rhythms.",
    artifacts: ["Weekly rhythm template", "energy optimization guide", "calendar management system", "sustainability checklist"],
    icon: <Clock className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "yeonji-worship-scripts",
    persona: "Yeonji (YA Leader)",
    title: "Worship Night Scripts",
    task: "Produce run sheets with timing, transitions, and scripture tie-ins.",
    approach: "Define worship theme and format → AI creates detailed run sheet with timing → includes transition scripts and scripture connections → Yeonji customizes for team and venue.",
    efficiency: "30 min vs. 4 hrs of drafting.",
    revenue: "Better planning increases attendance → possible donor interest.",
    improvement: "Smoother flow for volunteers and attendees.",
    artifacts: ["Worship run sheet template", "transition script library", "scripture connection guide", "volunteer coordination checklist"],
    icon: <PlayCircle className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "yeonji-training-manual",
    persona: "Yeonji (YA Leader)",
    title: "Volunteer Training Manual",
    task: "Turn scattered policies into a clear 10-page training doc for student leaders.",
    approach: "Gather existing policies and guidelines → AI organizes into coherent training manual → adds practical examples and scenarios → Yeonji reviews and adds personal insights.",
    efficiency: "2 hrs vs. 12 hrs.",
    revenue: "Indirect—reduces leader turnover costs.",
    improvement: "Consistent training, fewer gaps.",
    artifacts: ["10-page training manual", "policy organization system", "practical example library", "leader development checklist"],
    icon: <BookOpen className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "yeonji-survey-analysis",
    persona: "Yeonji (YA Leader)",
    title: "Student Survey Analysis",
    task: "Summarize anonymous feedback from 100 students into 5 key themes.",
    approach: "Upload survey responses → AI identifies patterns and themes → creates summary with actionable insights → generates visualization suggestions → Yeonji develops response strategy.",
    efficiency: "1 hr vs. 6–8 hrs.",
    revenue: "Feedback improves retreat design, potentially raising registrations.",
    improvement: "Clearer, data-driven adjustments to programs.",
    artifacts: ["Survey analysis report", "theme identification system", "actionable insights summary", "program improvement recommendations"],
    icon: <BarChart3 className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "yeonji-scripture-art",
    persona: "Yeonji (YA Leader)",
    title: "Scripture Art Prompts",
    task: "Generate visual prompts for Instagram posts that match devotional themes.",
    approach: "Provide devotional themes and target audience → AI suggests visual concepts and scripture pairings → creates design prompts → Yeonji creates or commissions artwork.",
    efficiency: "1 hr vs. 5 hrs of manual design.",
    revenue: "Indirect—better engagement leads to broader donor awareness.",
    improvement: "More visually appealing, resonant communications.",
    artifacts: ["Visual concept library", "scripture art prompts", "Instagram content calendar", "engagement tracking templates"],
    icon: <Star className="h-5 w-5" />,
    color: "pink"
  },
  {
    id: "yeonji-conflict-roleplay",
    persona: "Yeonji (YA Leader)",
    title: "Conflict Roleplay",
    task: "Simulate tough pastoral conversations for skill development.",
    approach: "Define common conflict scenarios → AI creates realistic roleplay situations → provides response options and feedback → Yeonji practices and builds confidence.",
    efficiency: "30 min vs. weeks of trial/error in the field.",
    revenue: "N/A.",
    improvement: "Builds empathy, confidence, and skill in conflict resolution.",
    artifacts: ["Conflict scenario library", "roleplay practice framework", "response development guide", "skill assessment checklist"],
    icon: <Users className="h-5 w-5" />,
    color: "red"
  },
  {
    id: "susan-planter-onboarding",
    persona: "Susan (Systems/Movement Leader)",
    title: "New Planter Onboarding",
    task: "Create an onboarding workbook from existing resources.",
    approach: "Compile existing training materials → AI organizes into structured workbook → creates progression milestones → adds assessment tools → Susan reviews and customizes.",
    efficiency: "4 hrs vs. 20 hrs.",
    revenue: "Indirect—smooth onboarding retains planters, protecting investment.",
    improvement: "Standardizes leader experience.",
    artifacts: ["Onboarding workbook template", "milestone tracking system", "assessment tools", "retention optimization guide"],
    icon: <CheckCircle className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "susan-board-prep",
    persona: "Susan (Systems/Movement Leader)",
    title: "Board Meeting Prep",
    task: "Condense a 60-page report into a 2-page executive summary.",
    approach: "Upload comprehensive report → AI extracts key decisions, metrics, and recommendations → creates executive summary format → Susan adds strategic context and priorities.",
    efficiency: "1 hr vs. 6 hrs.",
    revenue: "Increases board effectiveness, unlocking strategic gifts.",
    improvement: "More focused board discussions.",
    artifacts: ["Executive summary template", "key metrics dashboard", "decision tracking framework", "board communication guide"],
    icon: <FileText className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "susan-policy-benchmarking",
    persona: "Susan (Systems/Movement Leader)",
    title: "Policy Benchmarking",
    task: "Compare organization's policies with peer networks and highlight gaps.",
    approach: "Gather peer network policies → AI compares against current policies → identifies gaps and best practices → creates improvement recommendations → Susan prioritizes implementation.",
    efficiency: "2 hrs vs. 15 hrs.",
    revenue: "Reduces compliance risks that could cost thousands.",
    improvement: "Higher trust from donors and planters.",
    artifacts: ["Policy comparison matrix", "gap analysis report", "best practices library", "implementation priority guide"],
    icon: <Shield className="h-5 w-5" />,
    color: "red"
  },
  {
    id: "susan-job-descriptions",
    persona: "Susan (Systems/Movement Leader)",
    title: "Staff Job Description Drafts",
    task: "Write role descriptions from Susan's notes and organizational needs.",
    approach: "Define role requirements and organizational context → AI drafts comprehensive job descriptions → includes qualifications and responsibilities → Susan refines for culture fit.",
    efficiency: "1 hr vs. 6 hrs.",
    revenue: "Clearer roles prevent costly mis-hires.",
    improvement: "Professional HR documentation.",
    artifacts: ["Job description templates", "role requirement matrices", "qualification frameworks", "hiring process guide"],
    icon: <Users className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "susan-strategic-foresight",
    persona: "Susan (Systems/Movement Leader)",
    title: "Strategic Foresight",
    task: "Scan articles and reports to summarize trends in church planting.",
    approach: "Gather relevant articles and trend reports → AI analyzes patterns and emerging trends → creates strategic implications summary → Susan develops organizational response strategy.",
    efficiency: "1 hr vs. 8 hrs reading.",
    revenue: "Positions organization as thought leader, attracting grants.",
    improvement: "Data-driven strategy sessions.",
    artifacts: ["Trend analysis reports", "strategic implications summary", "thought leadership content", "grant positioning framework"],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "emerald"
  },
  {
    id: "flora-reflection-journal",
    persona: "Flora (Seminarian)",
    title: "Internship Reflection Journal",
    task: "Provide reflection prompts tied to weekly ministry experiences.",
    approach: "Share weekly ministry activities → AI generates targeted reflection questions → connects experiences to theological learning → Flora journals responses and insights.",
    efficiency: "30 min vs. hours of self-generated journaling.",
    revenue: "N/A.",
    improvement: "Deeper self-awareness, more fruitful supervision.",
    artifacts: ["Reflection prompt library", "theological connection framework", "supervision preparation guide", "spiritual formation tracker"],
    icon: <BookOpen className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "flora-debate-prep",
    persona: "Flora (Seminarian)",
    title: "Theological Debate Prep",
    task: "Simulate counterarguments to paper topics for stronger academic preparation.",
    approach: "Define thesis and theological position → AI generates potential counterarguments → provides supporting evidence for opposing views → Flora develops stronger defense and nuanced understanding.",
    efficiency: "1 hr vs. 4 hrs of manual reading.",
    revenue: "N/A.",
    improvement: "Stronger arguments, better defense in class.",
    artifacts: ["Counterargument library", "defense strategy framework", "evidence compilation system", "academic preparation guide"],
    icon: <Target className="h-5 w-5" />,
    color: "red"
  },
  {
    id: "flora-resume",
    persona: "Flora (Seminarian)",
    title: "Resume Enhancement",
    task: "Turn experiences into a polished ministry CV.",
    approach: "Compile ministry experiences and education → AI formats into professional CV structure → highlights relevant skills and calling → Flora personalizes and refines presentation.",
    efficiency: "1 hr vs. 5 hrs.",
    revenue: "Increases chances of scholarship/fellowship offers.",
    improvement: "Professional representation of calling and skills.",
    artifacts: ["Ministry CV template", "skill highlighting framework", "calling articulation guide", "opportunity application system"],
    icon: <FileText className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "flora-theology-summaries",
    persona: "Flora (Seminarian)",
    title: "Comparative Theology Summaries",
    task: "Summarize key contrasts between major theologians on specific doctrines.",
    approach: "Define theological topic and key figures → AI compares positions and highlights differences → creates study-ready summaries → Flora adds personal analysis and synthesis.",
    efficiency: "1 hr vs. 6 hrs reading.",
    revenue: "N/A.",
    improvement: "Clarity for exams, stronger synthesis.",
    artifacts: ["Theological comparison charts", "doctrine study guides", "synthesis frameworks", "exam preparation materials"],
    icon: <BookOpen className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "flora-prayer-liturgies",
    persona: "Flora (Seminarian)",
    title: "Prayer Liturgies",
    task: "Generate draft prayers in specific traditions for adaptation.",
    approach: "Define liturgical tradition and prayer purpose → AI creates prayer drafts in appropriate style → Flora adapts for personal use and group facilitation.",
    efficiency: "30 min vs. 2–3 hrs.",
    revenue: "N/A.",
    improvement: "Richer personal prayer and group facilitation.",
    artifacts: ["Prayer liturgy templates", "tradition-specific guides", "facilitation frameworks", "spiritual practice library"],
    icon: <Star className="h-5 w-5" />,
    color: "teal"
  },
  {
    id: "stew-grant-review",
    persona: "Stew (Donor/Board)",
    title: "Grant Review Companion",
    task: "Analyze grant proposals, highlighting strengths and risks for board review.",
    approach: "Upload grant proposals → AI analyzes against evaluation criteria → highlights key strengths and potential risks → creates board-ready summary → Stew adds strategic insights.",
    efficiency: "1 hr vs. 6 hrs of reading.",
    revenue: "Guides more confident investment decisions.",
    improvement: "More transparent decision-making.",
    artifacts: ["Grant analysis framework", "risk assessment template", "board summary format", "decision support tools"],
    icon: <CheckCircle className="h-5 w-5" />,
    color: "green"
  },
  {
    id: "stew-donor-newsletter",
    persona: "Stew (Donor/Board)",
    title: "Donor Network Newsletter",
    task: "Draft a quarterly newsletter for peer sharing about giving focus.",
    approach: "Compile giving activities and impact stories → AI creates engaging newsletter format → includes peer influence strategies → Stew personalizes and distributes to network.",
    efficiency: "1 hr vs. 5 hrs.",
    revenue: "Inspires peer gifts, $10k+ potential.",
    improvement: "Strengthens peer influence role.",
    artifacts: ["Newsletter template", "impact story formats", "peer engagement strategies", "network influence tracker"],
    icon: <FileText className="h-5 w-5" />,
    color: "blue"
  },
  {
    id: "stew-missionary-prep",
    persona: "Stew (Donor/Board)",
    title: "Missionary Visit Prep",
    task: "Brief with talking points and cultural insights before hosting missionaries.",
    approach: "Provide missionary background and cultural context → AI creates briefing document with conversation starters → includes cultural sensitivity tips → Stew reviews and personalizes approach.",
    efficiency: "30 min vs. 2 hrs.",
    revenue: "Builds trust, encourages more effective support.",
    improvement: "Deeper, more informed engagement.",
    artifacts: ["Missionary briefing templates", "cultural insight guides", "conversation starter library", "relationship building framework"],
    icon: <Globe className="h-5 w-5" />,
    color: "purple"
  },
  {
    id: "stew-giving-reflection",
    persona: "Stew (Donor/Board)",
    title: "Annual Giving Reflection",
    task: "Create a personal 'giving year in review' summary.",
    approach: "Compile year's giving activities and outcomes → AI creates reflection summary with impact analysis → includes alignment with values assessment → Stew adds personal insights.",
    efficiency: "30 min vs. 4 hrs.",
    revenue: "May inspire increased gifts in the new year.",
    improvement: "Deeper satisfaction, alignment with values.",
    artifacts: ["Annual giving summary", "impact reflection guide", "values alignment assessment", "strategic giving planner"],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "emerald"
  },
  {
    id: "stew-board-talking-points",
    persona: "Stew (Donor/Board)",
    title: "Board Meeting Talking Points",
    task: "Draft concise talking points for board meeting advocacy.",
    approach: "Define key issues and desired outcomes → AI creates persuasive talking points → includes supporting data and strategic framing → Stew practices and refines delivery.",
    efficiency: "30 min vs. 2 hrs.",
    revenue: "Sharper advocacy for projects, possibly unlocking new funding.",
    improvement: "Better presence and leadership influence.",
    artifacts: ["Talking points templates", "advocacy frameworks", "persuasion strategy guides", "leadership influence toolkit"],
    icon: <Target className="h-5 w-5" />,
    color: "red"
  }
];

export default function PersonasExperimentationPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const selectedStudy = selectedCaseStudy ? caseStudies.find(study => study.id === selectedCaseStudy) : null;

  if (selectedStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 py-8">
          {/* Back Navigation */}
          <button
            onClick={() => setSelectedCaseStudy(null)}
            className="mb-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ChevronRight className="h-4 w-4 rotate-180 mr-2" />
            Back to Teaching Framework
          </button>

          {/* Case Study Detail */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-r from-${selectedStudy.color}-900/30 to-${selectedStudy.color}-800/30 p-8 border-b border-slate-700`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-${selectedStudy.color}-500/20 rounded-xl flex items-center justify-center mr-4`}>
                    {selectedStudy.icon}
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">{selectedStudy.persona}</div>
                    <h1 className="text-3xl font-bold text-white mb-2">{selectedStudy.title}</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-8 space-y-8">
              {/* Task */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Task</h3>
                <p className="text-slate-300 text-lg">{selectedStudy.task}</p>
              </div>

              {/* Approach */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Approach</h3>
                <p className="text-slate-300 leading-relaxed">{selectedStudy.approach}</p>
              </div>

              {/* Metrics Row */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-blue-300 font-medium">Efficiency</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{selectedStudy.efficiency}</div>
                </div>
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-green-300 font-medium">Revenue</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{selectedStudy.revenue}</div>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-purple-400 mr-2" />
                    <span className="text-purple-300 font-medium">Improvement</span>
                  </div>
                  <div className="text-lg font-semibold text-white">{selectedStudy.improvement}</div>
                </div>
              </div>

              {/* Artifacts */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Artifacts Created</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedStudy.artifacts.map((artifact, index) => (
                    <div key={index} className="flex items-center bg-slate-700/30 rounded-lg p-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{artifact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Teaching Framework:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI for Efficiencies, Revenues & Improvements
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Synthesized ways, approaches, and processes to save time, generate revenue, and improve quality of work. 
            Use as a teaching module or implementation checklist.
          </p>
        </div>

        {/* Core Ways Section */}
        <div className="mb-12">
          <div 
            className="flex items-center justify-between cursor-pointer mb-6"
            onClick={() => toggleSection("core-ways")}
          >
            <h2 className="text-3xl font-bold text-white">A. Core Ways You Use AI</h2>
            {expandedSection === "core-ways" ? 
              <ChevronDown className="h-6 w-6 text-slate-400" /> : 
              <ChevronRight className="h-6 w-6 text-slate-400" />
            }
          </div>
          
          {expandedSection === "core-ways" && (
            <div className="grid lg:grid-cols-2 gap-6">
              {coreWays.map((way) => (
                <div key={way.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 bg-${way.color}-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      {way.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{way.title}</h3>
                      <p className="text-slate-300 text-sm mb-3">{way.description}</p>
                      <div className="bg-slate-700/30 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">Outcome</div>
                        <div className="text-sm text-slate-200">{way.outcome}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Repeatable Approaches Section */}
        <div className="mb-12">
          <div 
            className="flex items-center justify-between cursor-pointer mb-6"
            onClick={() => toggleSection("approaches")}
          >
            <h2 className="text-3xl font-bold text-white">B. Repeatable Approaches (The "How")</h2>
            {expandedSection === "approaches" ? 
              <ChevronDown className="h-6 w-6 text-slate-400" /> : 
              <ChevronRight className="h-6 w-6 text-slate-400" />
            }
          </div>
          
          {expandedSection === "approaches" && (
            <div className="grid lg:grid-cols-2 gap-6">
              {approaches.map((approach) => (
                <div key={approach.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {approach.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{approach.title}</h3>
                      <p className="text-slate-300 text-sm">{approach.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Micro-Processes Section */}
        <div className="mb-12">
          <div 
            className="flex items-center justify-between cursor-pointer mb-6"
            onClick={() => toggleSection("micro-processes")}
          >
            <h2 className="text-3xl font-bold text-white">C. Micro-Processes You Can Teach</h2>
            {expandedSection === "micro-processes" ? 
              <ChevronDown className="h-6 w-6 text-slate-400" /> : 
              <ChevronRight className="h-6 w-6 text-slate-400" />
            }
          </div>
          
          {expandedSection === "micro-processes" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microProcesses.map((process) => (
                <div key={process.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                      {process.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{process.title}</h3>
                      <div className="text-green-400 text-sm font-medium">{process.duration}</div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{process.steps}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Case Studies Section */}
        <div className="mb-12">
          <div 
            className="flex items-center justify-between cursor-pointer mb-6"
            onClick={() => toggleSection("case-studies")}
          >
            <h2 className="text-3xl font-bold text-white">D. 45 Clear Case Studies: Applying These Ways to Typical Needs</h2>
            {expandedSection === "case-studies" ? 
              <ChevronDown className="h-6 w-6 text-slate-400" /> : 
              <ChevronRight className="h-6 w-6 text-slate-400" />
            }
          </div>
          
          {expandedSection === "case-studies" && (
            <div className="space-y-4">
              <p className="text-slate-300 text-center mb-8">
                Each case shows how a leader could use AI the way you do—as a consultant/accelerator—while keeping authorship and ethics intact.
              </p>
              <div className="grid lg:grid-cols-2 gap-6">
                {caseStudies.map((study) => (
                  <div
                    key={study.id}
                    onClick={() => setSelectedCaseStudy(study.id)}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-${study.color}-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-${study.color}-500/30 transition-colors`}>
                          {study.icon}
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">{study.persona}</div>
                          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                            {study.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>

                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">{study.task}</p>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-blue-400 text-xs font-medium">{study.efficiency.split('(')[0]}</div>
                        <div className="text-slate-500 text-xs">Efficiency</div>
                      </div>
                      <div>
                        <div className="text-green-400 text-xs font-medium">{study.revenue}</div>
                        <div className="text-slate-500 text-xs">Revenue</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Start Guide */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">How to Teach This in 10 Minutes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-blue-300 mb-2">Name one friction</h4>
              <p className="text-slate-300 text-sm">(unwanted inefficiency) per person.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-green-300 mb-2">Pick a fitting micro-process</h4>
              <p className="text-slate-300 text-sm">from Section C above.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-purple-300 mb-2">Run the experiment</h4>
              <p className="text-slate-300 text-sm">this week (≤30 minutes).</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-400 font-bold">4</span>
              </div>
              <h4 className="font-semibold text-yellow-300 mb-2">Quantify</h4>
              <p className="text-slate-300 text-sm">time saved and any revenue signals.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-400 font-bold">5</span>
              </div>
              <h4 className="font-semibold text-red-300 mb-2">Decide</h4>
              <p className="text-slate-300 text-sm">adopt, adapt, or abandon.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-400 font-bold">6</span>
              </div>
              <h4 className="font-semibold text-indigo-300 mb-2">Template it</h4>
              <p className="text-slate-300 text-sm">so others can repeat without you.</p>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
            <h4 className="font-semibold text-blue-300 mb-3">Ethic</h4>
            <p className="text-blue-200 italic">
              AI is your <strong>assistant and consultant</strong>, not your ghostwriter. Keep authorship, 
              disclose responsibly, and prioritize relationships and formation over raw speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}