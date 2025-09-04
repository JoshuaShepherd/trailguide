# Vendor Documentation - DO NOT MODIFY

This directory contains reference documentation and examples from various AI/ML SDKs and services. These files are for **documentation and learning purposes only** and should **not be imported directly** into our codebase.

## Contents

### OpenAI Agents SDK (`openai-agents-js-main/`)
- **Purpose**: Core AI agents framework with multi-agent workflows
- **Key Features**: Tool calling, handoffs, streaming, guardrails
- **Examples**: `/examples/` directory contains working implementations
- **Documentation**: Comprehensive guides for building agent workflows

### OpenAI Realtime Agents (`openai-realtime-agents-main/`)
- **Purpose**: Voice-enabled real-time agents using WebRTC/WebSocket
- **Key Features**: Real-time voice interaction, streaming audio
- **Use Case**: Future voice interface for TrailKits and publishing platforms

### OpenAI Realtime API (`openai-realtime-api-beta-main/`)
- **Purpose**: Low-level realtime API for voice/audio interactions
- **Key Features**: Event-driven communication, audio streaming
- **Integration**: Used by realtime agents framework

### Supabase (`supabase/`)
- **Purpose**: Database and backend services
- **Key Features**: Real-time database, authentication, storage
- **Integration**: Current backend for TrailGuide platform

## Usage Guidelines

### ✅ DO
- Reference these files for learning and implementation patterns
- Copy and adapt code patterns for our specific use cases
- Use as documentation when implementing similar functionality
- Study the examples to understand best practices

### ❌ DON'T
- Import directly from `/vendor/` in our source code
- Modify any files in this directory
- Commit changes to vendor files
- Treat this as a git submodule or dependency

## Implementation Approach

When implementing AI agents for TrailGuide:

1. **Study the examples** in `openai-agents-js-main/examples/`
2. **Install the official packages** via npm/pnpm
3. **Adapt patterns** to TrailGuide's specific needs
4. **Build in `/src/agents/`** following our architecture

## Key Learning Resources

- **Basic Agent Setup**: `openai-agents-js-main/examples/basic/`
- **Tool Integration**: `openai-agents-js-main/examples/tools/`
- **Multi-Agent Workflows**: `openai-agents-js-main/examples/research-bot/`
- **Next.js Integration**: `openai-agents-js-main/examples/nextjs/`
- **Streaming Responses**: `openai-agents-js-main/examples/streamed/`

## TrailGuide Implementation Plan

See `/docs/AI_AGENTS_IMPLEMENTATION_PLAN.md` for our specific implementation strategy using these patterns.
