MASTER PROMPT — Build Full-Stack Expert Publisher Example

We are creating a fully functional, live example of our Expert Publisher platform—a demo site that shows prospective users exactly what their full digital presence, content engine, and monetization stack will look like when they launch with us.

Purpose

This isn’t just a marketing site—it’s an interactive showroom:
	•	Demonstrates the end-to-end capabilities of our platform.
	•	Shows how each feature benefits the user’s goals (building an audience, monetizing, scaling).
	•	Educates the user by example: the site itself is a model of best practices.

This build must feel real—with seeded content, working flows, and integrated AI-driven tooling.

⸻

Scope

The platform includes everything from A–M in our breakdown:

⸻

A) Site Map (Public-Facing Pages)
	•	Home: Hero, value proposition, highlights of content/products, clear CTAs (subscribe, become a member, hire).
	•	About: Story, mission, credibility markers, human-first photos.
	•	Articles / Blog: Index + full article pages, supporting public and paywalled content.
	•	Podcast / Video: Index + individual episode pages with player, transcripts, and SEO-ready metadata.
	•	Resources / Library: Lead magnets, downloadable guides (gated via email capture).
	•	Products / Offers:
	•	Membership: Benefits, pricing, testimonials.
	•	Courses/Cohorts: Catalog, detail pages with curriculum previews and CTA to purchase/enroll.
	•	Workshops/Events: List, detail pages, ticketing integration.
	•	Books/Toolkits: Landing pages for specific works.
	•	Speaking/Consulting: Topics, testimonials, booking form (integrated with Calendly).
	•	Newsletter: Standalone opt-in page with sample issue archive.
	•	Case Studies/Results: Outcomes achieved using this platform.
	•	Contact: General inquiries, press/media kit.
	•	Ethics: Human-first, transparent AI usage, privacy assurances.
	•	Legal: Privacy policy, terms, cookie policy.

Hero Section Structural Options (Human-First Hero with Actual Image)

1. Full-Bleed Portrait with Overlay

Structure:
	•	Background: Full-bleed photo (person in context—stage, outdoors, workspace).
	•	Foreground: Gradient/scrim for contrast.
	•	Content block: Headline, subheadline, CTA stacked in lower-left or center.

Use When:
	•	You have a strong, high-res environmental portrait.
	•	You want immediate emotional connection and immersive impact.
	•	Works well for solo authors/speakers where the person is the brand.

⸻

2. Split Hero (Text Column + Portrait “Card”)

Structure:
	•	Two columns:
	•	Left (or right): Headline, subhead, CTAs, social proof.
	•	Opposite side: Portrait in a framed “card” (rounded corners, subtle shadow).
	•	Background: Solid or lightly textured.

Use When:
	•	You want clean typography focus with supporting human image.
	•	Perfect for professional audiences (consultants, educators, movement leaders).
	•	Works well for responsive design—portrait stacks above text on mobile.

⸻

3. Collage Hero (Multi-Image Authenticity)

Structure:
	•	Grid or layered collage of 3–5 images (e.g., headshot, speaking shot, community moment, product/book).
	•	Content block overlay or adjacent.

Use When:
	•	You have good but not “single perfect” photos.
	•	You want to emphasize breadth of work/personality (not just a face).
	•	Great for movement leaders showing personal + community context.

⸻

4. Video/Looping Motion Hero

Structure:
	•	Background: Short, looped, muted video (e.g., on stage, workshop moments).
	•	Overlay: Gradient/scrim for legible text.
	•	Content block: Headline, subheadline, CTA.

Use When:
	•	The leader has compelling dynamic presence (speaking, teaching).
	•	You want to signal action, credibility, and authority instantly.
	•	Include poster image fallback and honor prefers-reduced-motion.

⸻

5. Hybrid Hero (Person + Product/Offer)

Structure:
	•	Main: Medium-sized portrait (left/right or floating above fold).
	•	Secondary: Product visual—book cover, course UI, framework diagram.
	•	Content: Headline focused on the offer (“Get my framework”).
	•	Layout emphasizes what they have to give, anchored by their identity.

Use When:
	•	The person is known but their IP is the draw (book, course, toolkit).
	•	Bridges personal authority + tangible deliverable.

⸻

6. Community/Impact-Focused Hero (Person as Part of Group)

Structure:
	•	Primary image: Leader in action with others (discussion, event, mission field).
	•	Headline/subhead: Mission-driven (“Equipping leaders worldwide”).
	•	Secondary callouts: Stats, map, or partner logos.

Use When:
	•	The leader’s movement or network is the story.
	•	Balances personal presence with collective credibility.

⸻

7. “Human Note” Hero (Portrait + Personal Markers)

Structure:
	•	Portrait (full-bleed or card).
	•	Overlaid handwritten signature, date/location, or stamp-style badge (“Field Notes from Melbourne • 2025”).
	•	Content: Short personal invitation headline (“Come with me on this journey”).

Use When:
	•	You want to emphasize authenticity and intimacy.
	•	Differentiates from AI-generated sameness—subtle human “proof”.

⸻

Implementation Notes
	•	All options:
	•	Use next/image with priority + optimized sizes for LCP.
	•	Maintain object-position on eyes ("50% 30%") for full-bleed/collage.
	•	Provide gradient/scrim where text overlays images.
	•	Offer dark mode adjustments (image brightness/contrast).
	•	Include CTA above the fold (subscribe, hire, explore).
	•	Choose option based on audience goal:
	•	Personal trust → Full-Bleed or Split.
	•	Breadth of impact → Collage or Community.
	•	Dynamic authority → Video/Looping.
	•	Selling IP → Hybrid.
	•	Intimate connection → Human Note.    

⸻

B) Account & Member Flows
	•	Auth: Email/passwordless or OAuth.
	•	Onboarding: Collect preferences/interests for personalized experience.
	•	Member Dashboard: Latest posts, saved content, personalized recommendations.
	•	Profile/Billing: Manage subscription, view invoices, change plan.
	•	Bookmarks/History: Saved content for quick return.
	•	Community Area: Optional but seeded—forum or chat integration.

⸻

C) Monetization Stack
	•	Subscriptions & Paywalls: Soft (teasers) + hard (members-only).
	•	Stripe Integration: Recurring billing, one-time payments, receipts.
	•	Donations: One-time + recurring.
	•	Products: Digital product checkout, course enrollments.
	•	Bundles & Upsells: Combined offers, checkout bumps.
	•	Affiliate/Referral Program: Codes, tracking.

⸻

D) Content Production (Creator UX)
	•	CMS Editor: Tiptap-based WYSIWYG with:
	•	Blocks (image, video, quote, embed, tables, code).
	•	Paywall markers inside posts.
	•	SEO settings (title, meta, OG image).
	•	Media Library: Upload/crop/organize assets.
	•	Scheduling & Drafts: Publish in future, autosave drafts.
	•	Series & Collections: Group content for long-term readers.
	•	Co-authoring & Comments: Feedback on drafts.

⸻

E) AI Agent Workspace
	•	Writing Agent: Outline → draft → improve with style presets.
	•	Repurposing Agent: Convert posts to emails, threads, shorts.
	•	SEO Agent: Research keywords, suggest titles/meta, internal link suggestions.
	•	Transcript Agent: Podcast/video transcription + summary.
	•	Analytics Agent: Weekly digest of subscriber growth, top-performing content.
	•	Launch Agent: Auto-generate launch campaigns for new products/courses.

Each agent must produce drafts only—never auto-publish.

⸻

F) Distribution & Growth
	•	Email Marketing: Broadcasts, automations, segmented lists.
	•	Lead Magnets: Gated resources with auto-delivery.
	•	SEO & Discovery: JSON-LD schema, sitemaps, canonical tags.
	•	Social Syndication: Auto-post summaries to X, LinkedIn, etc.
	•	Referral Incentives: Encourage sharing via rewards.

⸻

G) Design System & Templates
	•	Global Theme: Color tokens, typography scale, responsive spacing.
	•	Hero Variants: Full-bleed photo/video, split layout, productized hybrid.
	•	Reusable Blocks: Features, testimonials, stats, pricing tables, FAQs.
	•	Dark Mode: Optional toggle.
	•	Brand Kit Support: Easily swap logo/palette/fonts per client.

⸻

H) Performance & Accessibility
	•	Next.js Optimized: Image, fonts, ISR/Edge.
	•	Core Web Vitals: LCP/CLS/INP budgeted.
	•	Accessibility: Keyboard, contrast, ARIA, skip links, captions.

⸻

I) Analytics & Ops
	•	Business Metrics: Subs, MRR, churn, LTV.
	•	Content Metrics: Reads, read time, conversion.
	•	Attribution: UTM, campaign tracking.
	•	Error Monitoring: Sentry/logging integration.

⸻

J) Integrations
	•	Payments: Stripe.
	•	Email: Resend/Sendgrid/ConvertKit.
	•	Auth: NextAuth/Clerk.
	•	Database: Supabase/Postgres.
	•	Community: Circle/Discord integration.
	•	Calendar: Calendly/Cron.
	•	Storage/CDN: Vercel/S3.

⸻

K) Legal & Trust
	•	Privacy/Terms/Cookies
	•	AI & Ethics Statement
	•	DMCA Process
	•	Accessibility Statement

⸻

L) Admin Tools (For Us)
	•	Multi-Tenant Ready: Switch between client instances.
	•	Content Queue & Approvals
	•	Billing Dashboard (if rev-share).
	•	Template Switcher: Rebrand easily.
	•	Exports & Backups

⸻

M) Onboarding & Education
	•	Interactive Setup Checklist (domain, branding, first content).
	•	30-Day Launch Plan (pre-seeded tasks, best practices).
	•	Contextual Help (tooltips, guides).
	•	Resource Hub (tutorials, walkthroughs, case studies).

⸻

Execution
	•	Build this as a real, functioning site—seed it with:
	•	Realistic content (articles, podcast episodes, products).
	•	Demo members, analytics dashboards with plausible data.
	•	Active AI agents producing example drafts.
	•	Style it with human-first visuals: authentic photography, not generic stock.
	•	Ensure every page/feature is linked from a central “What You Get” tour.

Outcome

A prospective user should:
	1.	See themselves in the example (content, structure, monetization).
	2.	Understand the end-to-end journey from zero to thriving.
	3.	Trust that we’ve built everything they’ll need.
	4.	Be motivated to click Start Your Assessment to get their own.