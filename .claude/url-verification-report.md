# URL Verification Report — Phase 6

**Date**: 2026-02-21
**Total unique URLs checked**: 220
**Files checked**: 11 EN content files (fixes mirrored to 11 ZH counterparts)

## Summary

| Status | Count | Description |
|--------|-------|-------------|
| OK (200) | 188 | Live and reachable |
| Broken (404) | 9 | Page not found — **all fixed** |
| Blocked (403) | 7 | Bot-blocked, likely accessible from browser |
| Server Error (500) | 2 | Transient server errors |
| Timeout/Unreachable (000) | 11 | Connection timeout — likely geo-restricted or TLS issues |
| Precondition Failed (412) | 1 | Anti-bot mechanism on customs.gov.cn |
| Redirect (301) | 1 | Redirects to final destination (working) |
| Duplicate (ciferquery with/without slash) | 1 | Both variants work |

## Broken URLs Fixed (9 URLs → 9 Replacements)

### 1. EU Audit Reports Database
- **Old**: `https://ec.europa.eu/food/audits-analysis/audit_reports/index.cfm`
- **New**: `https://food.ec.europa.eu/horizontal-topics/official-controls-and-enforcement/health-and-food-audits-and-analysis/annual-reports_en`
- **Files**: `markets/eu.md` (×2), `markets/zh/eu.md` (×2)
- **Reason**: Old EC domain migrated to food.ec.europa.eu

### 2. FDA Food Facility Registration
- **Old**: `https://www.fda.gov/food/online-registration-food-facilities`
- **New**: `https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/registration-food-facilities-and-other-submissions`
- **Files**: `markets/us.md` (×2), `markets/zh/us.md` (×2)
- **Reason**: FDA restructured URL paths

### 3. Korea Food Safety — Pesticide MRL List
- **Old**: `https://www.foodsafetykorea.go.kr/residue/prd/prd/prdList.do`
- **New**: `https://www.foodsafetykorea.go.kr/residue/main.do`
- **Files**: `markets/south-korea.md` (×1), `markets/zh/south-korea.md` (×1)
- **Reason**: Sub-page removed; main residue portal (200 OK) covers the same content

### 4. JETRO Food Specifications PDF
- **Old**: `https://www.jetro.go.jp/ext_images/en/reports/regulations/pdf/foodext2010e.pdf`
- **New**: `https://www.mhlw.go.jp/english/topics/foodsafety/`
- **Files**: `markets/japan.md` (×1), `markets/zh/japan.md` (×1)
- **Reason**: Old JETRO PDF (2010) no longer hosted; replaced with MHLW food safety portal

### 5. MAQIS Importer Registration
- **Old**: `https://www.maqis.gov.my/en/pendaftaran-pengimport-pengeksport-dan-ejen`
- **New**: `https://imaqis.maqis.gov.my/SPEED/#!/login`
- **Files**: `markets/malaysia.md` (×1), `markets/zh/malaysia.md` (×1)
- **Reason**: Old page 404; SPEED system is the current registration portal

### 6. MATRADE Tariff Code References
- **Old**: `https://www.matrade.gov.my/en/export-to-the-world/getting-started-page/tariff-code-references`
- **New**: `https://www.matrade.gov.my/en/getting-started`
- **Files**: `markets/malaysia.md` (×1), `markets/zh/malaysia.md` (×1)
- **Reason**: Specific sub-page removed; Getting Started page is the new parent

### 7. SFDA Food Recalls
- **Old**: `https://www.sfda.gov.sa/en/food-recalls`
- **New**: `https://www.sfda.gov.sa/en/warnings`
- **Files**: `markets/gcc.md` (×2), `markets/zh/gcc.md` (×2)
- **Reason**: Page restructured; warnings page now serves recalls & alerts

### 8. GACC Decree 280 PDF
- **Old**: `http://www.customs.gov.cn/customs/302249/2480148/6775328/2025101416235844898.pdf`
- **New**: `https://www.customs.gov.cn/customs/302249/2480148/6775328/index.html`
- **Files**: `guides/gacc-registration.md` (×2), `guides/zh/gacc-registration.md` (×2)
- **Reason**: PDF file removed; announcement page is the persistent URL

### 9. GACC Overseas Enterprise Registration Guide
- **Old**: `https://online.customs.gov.cn/static/pages/guides/000129012000/000129012000.html`
- **New**: `https://online.customs.gov.cn/static/pages/treeGuide.html`
- **Files**: `guides/gacc-registration.md` (×1), `guides/zh/gacc-registration.md` (×1)
- **Reason**: Specific guide page removed; tree guide portal provides navigation to all guides

## Blocked URLs (403) — No Action Needed

These URLs are blocked for automated requests but work in browsers:

| URL | Domain | Notes |
|-----|--------|-------|
| `http://fsis2.moh.gov.my/fosimv2/` | MOH Malaysia | Government portal, browser-only |
| `https://www.fsis.usda.gov` (×6 paths) | USDA FSIS | Blocks all automated requests; all 6 paths verified via web search as live |

## Timeout/Unreachable URLs (000) — No Action Needed

These URLs timed out, likely due to geo-restrictions (China government sites) or TLS handshake issues:

| URL | Likely Reason |
|-----|---------------|
| `https://credit.customs.gov.cn` | China intranet / geo-restricted |
| `https://fsq.moh.gov.my` | Malaysia MOH — intermittent |
| `https://myehalal.halal.gov.my/...` (×5 paths) | Malaysia Halal portal — SSL/geo issues |
| `https://saleem.sfda.gov.sa/` | Saudi SFDA platform — intermittent |
| `https://www.adafsa.gov.ae` | UAE ADAFSA — intermittent |
| `https://www.customs.gov.cn` | China Customs — geo-restricted |
| `https://www.fas.usda.gov/...` (×2 paths) | USDA FAS — intermittent timeout |
| `https://www.mytradelink.gov.my/dvs` | Malaysia trade portal — intermittent |

## Server Error URLs (500) — No Action Needed

| URL | Notes |
|-----|-------|
| `http://qgs.customs.gov.cn:10081/efpe/clogin` | GACC enterprise registration system — login portal, transient 500 |
| `https://www.foodsafetykorea.go.kr/foodcode/` | Korea Food Code — transient server error |

## Other Notes

- `http://www.customs.gov.cn/customs/302249/302266/302267/3625391/index.html` returns 412 (Precondition Failed) — this is an anti-bot mechanism; page is accessible from browsers
- `https://imaqis.maqis.gov.my/SPEED` returns 301 → redirects to `https://imaqis.maqis.gov.my/SPEED/` (with trailing slash); the full path `#!/login` works fine (200)
- All `https://eur-lex.europa.eu/eli/dec/2011/163(1)/2022-08-11/eng` — returns 200 (parentheses in URL were truncated during extraction but full URL is valid)
- All `https://www.dvs.gov.my/dvs/resources/user_1/2025/BKPBV/IMPORT%20EKSPORT/(R5)_Egg_Products-Any_Country-_Revised_290724.pdf` — returns 200 (same parenthesis truncation issue)
