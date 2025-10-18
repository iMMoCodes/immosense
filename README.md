# 🧠 iMMoSense

**iMMoSense** is an AI-powered assistant built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — designed to explore intelligent document interaction and contextual chat experiences.

---

## 🚀 Tech Stack

- **Next.js 14 (App Router + Turbopack)**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** for accessible, modern components
- **Framer Motion** for animations
- **Supabase** (Database, Auth, Storage)
- **OpenAI API** for language understanding

---

## 🚑 Project Status
Currently in initial setup and base feature development phase:

✅ Accounts and API keys created
✅ Base project initialized with Next.js + TypeScript
✅ Tailwind + shadcn configured
✅ Project structure defined
✅ Main page layout and providers set up (themes + i18n)
✅ AI chat interface (first version) and API route added
✅ Language switcher and theme toggle components added
✅ Basic components created: chat, footer, navbar
✅ Utility helpers and initial translations started

Next steps:

- Implement PDF summarization
- Connect Supabase for message persistence
- Improve AI chat with memory/context handling
- Deploy first live version to Vercel

---

## ⚙️ Development

### Prerequisites

- Node.js 18+
- Yarn, npm or pnpm
- API keys for OpenAI and Supabase

### Getting Started

```bash
# Install dependencies
pnpm add

# Run development server
pnpm dev
```

---

## 🔐 Environment Variables

Create a .env.local file in the root directory with the following:
```bash
OPENAI_API_KEY=your_openai_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
```
(This file is ignored by Git — see .gitignore.)

---

## 📄 License

MIT License © 2025 — Built for personal use, learning and portfolio demonstration.

---

## 📒 Notes

This is an early-stage build of iMMoSense.
Future updates will include chat history persistence, PDF summarization, and semantic retrieval capabilities.

---
