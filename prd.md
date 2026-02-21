# PRD: Egg Product Export Inquiry Platform (OpenSpec)

## 1. Document Control
- Product: Egg Product Export Inquiry Platform
- Version: 1.0 (Draft)
- Date: 2026-02-21
- Owner: Project Founder
- Source Baseline: `brainstorm.md`
- Regulatory Snapshot: As of 2026-02-21

## 2. Product Overview
A bilingual (English/Chinese) content-first web platform that helps Chinese egg product producers evaluate export markets and execute compliance workflows with practical, actionable guidance.

The platform is designed for:
- Real export planning and decision support (family business operations).
- Public knowledge positioning (professional portfolio and authority building).

## 3. Problem Statement
Chinese egg product producers face fragmented, fast-changing export rules across regions. Key pain points:
- No single operational reference for market access, documents, and compliance steps.
- High uncertainty about which markets are truly accessible now vs. long-term.
- Gaps between policy understanding and practical execution.
- Language barriers when navigating global and domestic regulatory sources.

## 4. Goals and Non-Goals
### Goals
- Provide a single source of truth for market access and exporter workflows.
- Classify markets consistently using `Open`, `Restricted`, `Closed`.
- Deliver bilingual, structured, and updateable content.
- Prioritize near-term actionable markets first (HK/Macau, Southeast Asia).
- Ship MVP quickly with low-cost, China-accessible infrastructure.

### Non-Goals (MVP)
- Not a legal advisory service.
- Not a customs brokerage platform.
- Not an automated compliance filing system.
- Not a full ERP/logistics management product.

## 5. Target Users
### Primary Users
- Chinese egg product manufacturers/export teams (egg powder, liquid egg, albumin).
- Owner-operators and compliance managers needing execution-ready guidance.

### Secondary Users
- Trade consultants and partner service providers.
- Industry observers and potential international buyers.

## 6. Core Value Proposition
- Market clarity: immediate visibility into where exports are feasible today.
- Execution readiness: document paths, process checklists, and official links.
- Bilingual usability: English and Chinese delivery in a single platform.
- Strategic planning: phased roadmap from accessible markets to future markets.

## 7. Scope
### In Scope (MVP)
- Public website with bilingual routing (`/en/`, `/zh/`).
- Structured content pages for:
  - Market access status by region/country.
  - GACC-side exporter requirements.
  - Core compliance guides (health certificate, residue controls).
  - HS code reference.
- Market index with status tags (`Open`, `Restricted`, `Closed`).
- Source-linked references and date-stamped “as-of” claims.

### Out of Scope (MVP)
- Tariff calculator implementation.
- Automated regulatory monitoring.
- Paid accounts, user dashboards, or CRM features.

## 8. Functional Requirements
### FR-1 Content and Routing
- The system shall support bilingual route structure: `/en/...` and `/zh/...`.
- The system shall provide a language switcher on all core pages.
- The system shall preserve user language preference.

### FR-2 Market Status Model
- Every market page shall include one status label: `Open`, `Restricted`, or `Closed`.
- Every status claim shall include an “As of YYYY-MM-DD” timestamp where time-sensitive.

### FR-3 Compliance Guidance
- The platform shall publish exporter-side process guidance for China (GACC baseline).
- The platform shall include critical compliance risk guidance (residue focus).

### FR-4 Source Integrity
- All key claims shall map to listed references.
- Reference entries shall follow `Source - Purpose` formatting for scannability.

### FR-5 Content Prioritization
- MVP publishing sequence shall be:
  1. HK/Macau
  2. Southeast Asia
  3. Japan/Korea
  4. GCC
  5. EU/US barrier explainers

## 9. Non-Functional Requirements
### NFR-1 Performance and Delivery
- Content-first static delivery with minimal client-side JS.
- Fast first render for users in/near mainland China.

### NFR-2 Availability and Cost
- Deployable on low-cost infrastructure (target ~USD 50-110/year baseline).
- CDN fronting and TLS enabled.

### NFR-3 Accessibility and Reachability
- No dependency on blocked third-party services for core rendering.
- Self-host critical assets (notably fonts).

### NFR-4 Maintainability
- Markdown-based content workflow for fast editorial updates.
- Clear section templates for repeatable country page production.

## 10. Information Architecture
### Core Sections
- Home / Overview
- Market Index
- Market Detail Pages
- China Export Requirements (GACC)
- Compliance Guides
- HS Codes
- References
- Legal Disclaimer

### Standard Market Page Template
- Status (`Open` / `Restricted` / `Closed`)
- Access summary (as-of date)
- Required certifications/documents
- Key authority portals
- Risk notes (residue/HPAI/tariff sensitivity)
- Action checklist

## 11. Success Metrics (MVP)
- Publish all `P0` content pages defined in roadmap.
- 100% of market pages include status label + as-of date.
- 100% of high-impact claims contain source references.
- Median content update turnaround < 1 business day from source change to publish.

## 12. Release Plan
### Phase 1: Foundation + First Content
- Astro scaffold, i18n routing, base layout, content schema.
- Publish GACC walkthrough + HK/Macau page.

### Phase 2: Core Content Sprint
- Publish all `P0` guides and Southeast Asia pages.
- Ship functional language switcher and market index.

### Phase 3: Expansion + Launch Readiness
- Add P1 content, Japan/Korea, GCC pages.
- SEO setup, production deployment, legal disclaimer.

### Phase 4: Completion + Operations
- Add P2/P3 content.
- Analytics and CI/CD.

### Phase 5: Enhancements
- HS search, tariff calculator, monitoring automation, updates section.

## 13. Risks and Mitigations
### Risk 1: Regulatory Volatility
- Mitigation: enforce “As of” timestamping and scheduled review cadence.

### Risk 2: Source Quality Drift
- Mitigation: prioritize official sources and label secondary sources clearly.

### Risk 3: Market Misinterpretation by Users
- Mitigation: add clear legal disclaimer and “reference only” messaging.

### Risk 4: Content Production Bottleneck
- Mitigation: use strict templates, phased priorities, and reusable checklists.

## 14. Dependencies
- Official regulatory portals (EU, USDA FSIS, GACC, destination authorities).
- Hosting stack (HK VPS + CDN + TLS).
- Editorial capacity for bilingual updates.

## 15. Acceptance Criteria
- `prd.md` aligns with `brainstorm.md` priorities and roadmap.
- All MVP requirements are testable and mapped to explicit sections.
- Terminology is consistent (`Open`, `Restricted`, `Closed`; `P0`-`P4`).
- Document is implementation-ready for Claude Code planning/execution prompts.

## 16. Open Decisions
- Final domain strategy (`.com` only vs future variants).
- Visual style direction (conservative compliance vs modern editorial).
- Tariff tool scope (estimator vs landed-cost model).
- Initial monitored URL set for automation.
- Preferred legal disclaimer strictness.

