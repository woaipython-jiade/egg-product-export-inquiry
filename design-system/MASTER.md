# Design System — Egg Product Export Inquiry

## Style: Professional Editorial
A trustworthy, content-first design for regulatory/compliance information.
Clean, structured, scannable. Think Bloomberg Terminal meets government services — but approachable.

## Color Palette

### Primary (Trust Blue)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#eff6ff` | Subtle backgrounds |
| `primary-100` | `#dbeafe` | Hover states, highlight |
| `primary-600` | `#2563eb` | Primary links, CTA |
| `primary-700` | `#1d4ed8` | Hover on primary |
| `primary-900` | `#1e3a8a` | Headings, logo |
| `primary-950` | `#172554` | Hero background |

### Status (Semantic)
| Token | Color | Usage |
|-------|-------|-------|
| `status-open` | `#16a34a` (green-600) | Open market badge |
| `status-restricted` | `#d97706` (amber-600) | Restricted badge |
| `status-closed` | `#dc2626` (red-600) | Closed badge |

### Neutrals (Slate)
| Token | Usage |
|-------|-------|
| `slate-900` | Headings, body text |
| `slate-600` | Secondary text, nav links |
| `slate-500` | Meta text, captions |
| `slate-200` | Borders |
| `slate-50` | Section backgrounds |
| `white` | Card backgrounds, page bg |

## Typography

### Font Stack
- **Heading + Body (Latin)**: Inter 400, 700
- **Heading + Body (CJK)**: Noto Sans SC 400, 700
- **Fallback**: system-ui, sans-serif

### Scale
| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Hero h1 | text-3xl → text-5xl | 700 | -0.02em |
| Page h1 | text-3xl → text-4xl | 700 | -0.02em |
| Section h2 | text-2xl | 700 | -0.01em |
| Card title | text-base/text-lg | 600 | normal |
| Body | text-base (16px) | 400 | normal |
| Small/meta | text-sm / text-xs | 400–500 | normal |

### Prose Rules
- Max width: 75ch
- Line height body: 1.5–1.75
- Link color: primary-600, underline with 3px offset

## Spacing

| Context | Value |
|---------|-------|
| Page horizontal padding | px-4 sm:px-6 |
| Max content width | max-w-6xl (1152px) |
| Prose max width | max-w-4xl (896px) |
| Section vertical padding | py-12 (48px) |
| Card padding | p-5 (20px) |
| Grid gap | gap-4 (16px) |

## Components

### Cards
- Border: `border border-slate-200`
- Radius: `rounded-lg`
- Hover: `hover:border-primary-300 hover:shadow-md`
- Interactive: `cursor-pointer` on all clickable cards
- Transition: `transition-all duration-200`

### Buttons
- Primary: `bg-white text-primary-900` (on dark bg) / `bg-primary-600 text-white` (on light bg)
- Secondary: `border border-slate-300 text-slate-700`
- Size: min-height 44px for touch targets
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`
- Radius: `rounded-lg`

### Badges (StatusBadge)
- Shape: `rounded-full` pill
- Dot indicator: 6px colored circle
- Sizing: `px-2.5 py-0.5 text-sm`

### Navigation
- Desktop: inline horizontal links with gap-6
- Mobile: hamburger → slide-down panel
- Active state: `text-primary-700 font-semibold` on current page
- Focus: visible ring on keyboard nav

### Language Switcher
- Pill button with globe icon
- Border: subtle, hover-highlight

## Interaction Rules

1. **All clickable elements**: `cursor-pointer`
2. **Focus states**: `focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`
3. **Transitions**: `transition-colors duration-200` (color) or `transition-all duration-200` (layout)
4. **Reduced motion**: Respect `prefers-reduced-motion: reduce`
5. **Touch targets**: Minimum 44x44px

## Anti-Patterns to Avoid
- No emojis as icons — use SVG from Heroicons (outline, 24x24)
- No scale transforms on hover that shift layout
- No text lighter than slate-500 for readable content
- No missing alt text on images
- No invisible focus states
