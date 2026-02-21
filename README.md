# Egg Product Export Inquiry Platform

Bilingual (EN/ZH) content-first web platform helping Chinese egg product producers evaluate export markets and navigate compliance requirements.

## Tech Stack

- **Astro v5** — Static site generator with content collections
- **Tailwind CSS v3** — Utility-first styling with typography plugin
- **TypeScript** — Strict mode
- **Fontsource** — Self-hosted Inter (EN) + Noto Sans SC (ZH) fonts

## Quick Start

```bash
pnpm install
pnpm dev          # → http://localhost:4321/en/
```

## Project Structure

```
├── .claude/          # Agent progress tracking and feature specs
├── docs/             # Project planning — brainstorm, PRD
├── public/           # Static assets — favicon
├── src/
│   ├── components/   # Reusable UI — Header, Footer, StatusBadge, LanguageSwitcher
│   ├── content/      # Markdown collections — markets and guides (EN + ZH)
│   ├── i18n/         # UI string translations and locale utilities
│   ├── layouts/      # Page layout templates
│   ├── pages/        # File-based routing (/en/, /zh/)
│   └── styles/       # Global CSS and Tailwind config
├── astro.config.mjs  # Astro configuration — integrations, i18n
├── tailwind.config.mjs # Tailwind theme — colors, fonts, typography
└── tsconfig.json     # TypeScript configuration
```

## Content Model

- **Markets** — Country/region export access pages with Open/Restricted/Closed status
- **Guides** — Regulatory compliance walkthroughs and process documentation

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview production build locally |
