# AI Voice Assessment

A 10-minute AI-powered voice interview that assesses nonprofit boards' AI readiness and provides personalized recommendations.

## Features

- **Real-time Voice Conversation**: Uses OpenAI's GPT-4o Realtime API for natural two-way audio
- **Structured Assessment**: Evaluates 4 dimensions (People, Principles, Applications, Strategy)
- **Phone-call Style Interface**: Minimal UI focused on audio interaction
- **Accessibility First**: Full keyboard support, screen reader compatibility
- **Privacy Protected**: No audio storage, only final summaries retained
- **Auto-stop at 10 minutes**: Ensures consistent interview length

## Tech Stack

- **Next.js 15** with App Router + TypeScript
- **OpenAI Realtime API** for voice conversation
- **WebRTC/WebSocket** for audio streaming
- **Tailwind CSS + shadcn/ui** for styling
- **Web Audio API** for audio level monitoring

## UI Components

### Voice Interface
- Animated VU meter showing mic activity
- Real-time audio level visualization (12-bar display)
- Timer with progress ring (10:00 max)
- Live status badges (Connecting/Live/Paused/Ended)

### Assessment Summary
- TrailMap stage recommendation
- 4-dimension scores with rationales
- Top 3 actionable recommendations
- Quick wins and next steps
- Save options (local + server)

## User Flow

1. **Permission Gate**: Request microphone access with help dialog
2. **Live Interview**: 10-minute structured conversation
3. **AI Processing**: Generate JSON summary from conversation
4. **Results Display**: Present findings with actionable next steps

## Accessibility Features

- **Keyboard Shortcuts**:
  - `Space`: Start/Pause assessment
  - `Escape`: End assessment early
  - `M`: Toggle mute during live session
- **Screen Reader Support**: ARIA labels, live regions, role attributes
- **High Contrast**: AA-compliant color scheme
- **Focus Management**: Visible focus indicators

## API Endpoints

- `POST /api/voice/session` - Creates ephemeral OpenAI session
- `POST /api/assessments` - Stores assessment summaries (optional)

## Environment Variables

```env
NEXT_PUBLIC_MODEL_ID=gpt-4o-realtime-preview-2025-06-03
NEXT_PUBLIC_BOARD_MODE=voice-assessment
NEXT_PUBLIC_ALLOW_INDEX=0
OPENAI_API_KEY=your_openai_api_key
```

## Interview Structure

The AI follows a structured 10-minute agenda:

1. **Consent & Setup** (≤30s): Confirm readiness
2. **People Dimension** (2min): Team skills, champions, training
3. **Principles Dimension** (2min): Ethics, governance, policies
4. **Applications Dimension** (3min): Use cases, pilots, workflows
5. **Strategy Dimension** (2min): Goals, metrics, reporting
6. **Summary Generation** (≤30s): JSON output with recommendations

## Assessment Output

```json
{
  "trailMapStage": "Experimentation",
  "dimensions": {
    "people": {"score": 3, "rationale": "..."},
    "principles": {"score": 2, "rationale": "..."},
    "applications": {"score": 4, "rationale": "..."},
    "strategy": {"score": 3, "rationale": "..."}
  },
  "topRecommendations": ["...", "...", "..."],
  "quickWins": ["...", "..."],
  "nextSteps": [
    {"label": "Start Your Assessment", "href": "/trailmap"}
  ]
}
```

## Privacy & Security

- **No Audio Storage**: Voice data never persists
- **Summary Only**: Only JSON assessment results saved
- **User Control**: Optional local + server storage
- **Transparent**: Clear privacy notices throughout

## Error Handling

- **Mic Permission Denied**: Help dialog with troubleshooting steps
- **Connection Failures**: WebSocket fallback mechanisms
- **API Errors**: Graceful degradation with mock summaries in dev

## Development

```bash
npm run dev
```

Navigate to `/agent-assessment` to test the voice interface.

**Note**: Requires valid OpenAI API key with Realtime API access. In development, a mock summary generates after 30 seconds for testing.
