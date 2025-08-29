---
mode: agent
---
Build app/agent-assessment/page.tsx — Voice Assessment (10-Minute AI Interview)

Purpose

Create a voice agent that conducts a 10-minute conversational assessment (one board member at a time) and returns a compact “pathway forward” summary at the end. UX is intentionally minimal (phone-call style). No transcript UI. We only show that the call is live and the mic is working.

Tech Targets
	•	Next.js App Router + TypeScript + Tailwind + shadcn/ui.
	•	Model: gpt-5. Use OpenAI’s realtime/streaming stack for two-way audio.
	•	Audio I/O: WebRTC (preferred) or WebSocket fallback + Web Audio API.
	•	State mgmt: simple reducer or finite state machine (your choice).

Do not include any business secrets in client code. Never store raw audio. Summaries only.

⸻

Page Route & Meta
	•	Route: /agent-assessment
	•	Title: “AI Voice Assessment”
	•	Description: “A 10-minute, live voice interview to map your AI pathway forward.”
	•	No index (robots: noindex) unless NEXT_PUBLIC_ALLOW_INDEX=1.

⸻

Screen Layout (minimal)

Single column, centered, with three stacked regions:
	1.	Header strip
	•	Left: Title “AI Voice Assessment”
	•	Right: Live badge (• Live / Connecting / Paused / Ended)
	2.	Call Card (primary)
	•	Mic permission gate (if not granted): large “Enable Microphone” button.
	•	Once granted:
	•	Circular VU meter (animated ring that reacts to input level).
	•	Small wave bar under the ring (simple 8–12 bars).
	•	Timer (mm:ss) counting up to 10:00 with subtle progress ring (100% at 10:00).
	•	Controls row:
	•	Primary: Start / Pause / Resume / End
	•	Secondary: Mute toggle
	•	Status text: “You’re connected. Speak naturally—this is a real-time conversation.”
	3.	After-Call Panel (hidden until End)
	•	“Assessment Summary” card showing:
	•	Suggested TrailMap Stage (Awareness / Experimentation / Adoption / Optimization / Leadership)
	•	4 Dimensions scores + one-line rationale each (People, Principles, Applications, Strategy)
	•	Top 3 recommendations (bullet list)
	•	Next steps (CTAs): “Start Your Assessment” (full web), “Sign Up for a Hike”, “Contact Us”
	•	Save options: Save to local (browser) and, if configured, POST to /api/assessments.
	•	Small privacy note: “We do not store your audio—only this summary.”

Keep everything on a single page. Use shadcn Card, Button, Badge, Separator, Dialog for permission help if needed.

⸻

States & Behavior

Finite states: idle → connecting → live → paused → ending → ended → summarizing → summaryReady
	•	idle: Show mic permission CTA.
	•	connecting: Show spinner + “Connecting…”.
	•	live: Show VU ring, timer ticking, Live badge = green dot + “Live”.
	•	paused: Timer stopped; badge = “Paused”; mic muted.
	•	ending: Fade out UI and stop streams.
	•	ended: Show “Generating your summary…”
	•	summarizing: Await JSON summary from model.
	•	summaryReady: Render After-Call Panel.

Timers
	•	Hard stop at 10:00. When reached, auto-transition to ending → summarizing.

Failures
	•	If WebRTC fails, offer WebSocket + PCM streaming fallback.
	•	If audio device missing, show Alert with steps and link to browser mic settings.

⸻

Voice/Realtime Integration (high-level)
	•	Create a client hook useVoiceAgent() that:
	•	Requests mic with getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } }).
	•	Displays live input level (RMS) for VU ring.
	•	Establishes a Realtime session to OpenAI with model: gpt-5.
	•	Sends system prompt (below) and a ten-minute agenda (tool message) on connect.
	•	Streams audio bidirectionally (model TTS out → play in <audio> element).
	•	Emits events: onConnecting, onConnected, onLevel, onError, onSummary.
	•	Exposes start(), pause(), resume(), end().
	•	No transcript UI. If you need transcripts internally to generate the summary, do so in memory and discard after summarization.
	•	Privacy / Storage
	•	Do not persist audio or raw transcript.
	•	Persist only the final JSON summary (if user taps Save).

⸻

Conversation Design

System Prompt (send at session start)

You are a calm, expert, approachable interviewer running a 10-minute AI readiness assessment for a nonprofit board member. Your job is to understand their context and recommend a realistic pathway forward for AI applications, adoption, and integration.
Use short, clear questions and active listening. Keep a friendly, steady pace.
Structure the interview around 4 dimensions — People, Principles, Applications, Strategy — and infer an overall TrailMap Stage (Awareness, Experimentation, Adoption, Optimization, Leadership).
Avoid jargon and hype. No transcript is needed. At the end, output a single compact JSON summary (schema provided) and then go silent.

Interview Flow (agent agenda / tool message)
	1.	Consent & setup (<=30s): “May I confirm you’re ready for a ~10-minute voice interview?” + “Any constraints I should know about?”
	2.	People (skills/roles) (2 min): team size, current tools, champions, training appetite.
	3.	Principles (ethics/policy) (2 min): data sensitivity, approvals, guardrails, board posture.
	4.	Applications (use-cases/tools) (3 min): current wins/pilots, pain points, candidate workflows.
	5.	Strategy (goals/measurement) (2 min): outcomes that matter, time/cost pressures, reporting needs.
	6.	Close (<=30s): “I’ll generate a quick summary and proposed next steps.”

	•	Keep interjections short (e.g., “Got it,” “Tell me more about the grant workflow,” “What would success look like next quarter?”).
	•	Nudge gently to keep timebox.

Required Final Output (JSON only; no prose)

Agent must return exactly one JSON block with this schema:
{
  "trailMapStage": "Awareness | Experimentation | Adoption | Optimization | Leadership",
  "dimensions": {
    "people": { "score": 1, "rationale": "..." },
    "principles": { "score": 1, "rationale": "..." },
    "applications": { "score": 1, "rationale": "..." },
    "strategy": { "score": 1, "rationale": "..." }
  },
  "topRecommendations": [
    "Recommendation 1",
    "Recommendation 2",
    "Recommendation 3"
  ],
  "quickWins": [
    "Win 1",
    "Win 2"
  ],
  "nextSteps": [
    { "label": "Start Your Assessment", "href": "/trailmap" },
    { "label": "Join a Grant Sprint", "href": "/hikes#grant" }
  ]
}

	•	Scores are 1–5 (1 = nascent, 5 = strong).
	•	Keep each string under ~160 characters.

⸻

UI Details

Live Badge
	•	States: Connecting (pulsing dot), Live (solid green dot), Paused (amber), Ended (gray).
	•	Tooltip shows connection info.

VU Ring + Bars
	•	Animated ring thickness grows with RMS level.
	•	Bars (8–12) flicker subtly; no rainbow colors—evergreen accents only.

Controls
	•	Start: creates session + starts timer.
	•	Pause: mutes mic and pauses model speech; timer stops.
	•	Resume: reverse Pause.
	•	End: stop streams → summarizing.

Timer
	•	Large, centered mm:ss.
	•	Progress ring fills to 100% at 10:00.
	•	At 09:30, show subtle “Wrapping soon…” caption.

After-Call Panel
	•	Show the JSON summary nicely formatted:
	•	Stage badge, 4 dimension chips with scores (1–5), bullets for top recommendations and quick wins, and CTAs.
	•	Buttons: Save Summary (local + POST if configured), Start Over.

⸻

Accessibility
	•	All interactive controls keyboard operable; visible focus rings.
	•	Live region (aria-live="polite") for connection status updates.
	•	Provide text alternative: “Microphone visualizer showing your voice activity.”

⸻

Config & Environment
	•	NEXT_PUBLIC_MODEL_ID="gpt-5"
	•	NEXT_PUBLIC_BOARD_MODE="voice-assessment"
	•	Optional: NEXT_PUBLIC_ALLOW_INDEX=0|1
	•	Optional server routes (create if missing):
	•	POST /api/voice/session → returns ephemeral token/URL for realtime.
	•	POST /api/assessments → store JSON summary (noop if not configured).

If Supabase env vars are present, store summaries under table voice_assessments with columns: id, created_at, user_hint (name/email if provided), summary_json.

Acceptance Criteria
	1.	Page mounts at /agent-assessment with minimal, phone-call-like interface.
	2.	User can grant mic, see live VU, see timer, and control Start/Pause/Resume/End.
	3.	Session auto-ends at 10:00 and shows Assessment Summary.
	4.	No transcript is shown; only a compact summary appears at the end.
	5.	No audio is stored; only summary can be saved.
	6.	Works with model gpt-5; if realtime unavailable, show clear fallback error.
	7.	A11y: keyboard, labels, and AA contrast pass.

⸻

Seed Copy (UI)
	•	Header subtitle: “Speak naturally—this is a live conversation. We’ll wrap at ten minutes.”
	•	Permission help: “If your browser blocks the mic, open Site Settings → Microphone → Allow.”
	•	Privacy footnote: “We don’t store audio. We only keep the end-of-call summary (if you choose).”