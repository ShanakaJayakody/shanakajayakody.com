---
task: "Build personal site, create public GitHub repo"
project: shanakajayakody.com
slug: 20260810-183500_personal-site-repo
effort: E3
effort_source: classifier
phase: observe
progress: 0/34
mode: interactive
started: 2026-08-10T18:35:00+10:00
updated: 2026-08-10T18:35:00+10:00
---

# ISA — shanakajayakody.com (personal site)

## Problem

Shanaka has no live personal site and no repository for one. The working directory `~/shanakajayakody` is empty, an older Figma-export portfolio exists but was explicitly not chosen, and the domain shanakajayakody.com has nothing to deploy. There is no canonical public home for who Shanaka is and what he builds.

## Vision

A visitor lands on shanakajayakody.com and within five seconds knows who Shanaka is, what he builds (education technology — UCAT prep, medical-admissions coaching, AI products), and how to reach him. The site feels fast, typographically confident, and personal — not a template. Editing content later is trivial: plain TSX/CSS, no CMS, no framework sprawl.

## Out of Scope

- Hosting, DNS, and deployment of shanakajayakody.com (explicitly deferred — "just the repo for now").
- Reuse of the old `~/Shanaka Jayakody Portfolio Website` Figma export.
- Blog/CMS, analytics, contact forms with backends, or any server-side code.
- GitHub Pages workflow or CNAME file (belongs to the deferred hosting task).

## Constraints

- bun toolchain only — no npm/npx artifacts (no `package-lock.json`).
- TypeScript only.
- Vite + React, vanilla CSS — no UI-kit or CSS-framework dependencies.
- Build output must never be piped through `head` — redirect to log file (PAI operational rule).
- Repo name `shanakajayakody.com` (NOT `shanakajayakody` — that name is reserved for the GitHub profile-README repo), public, under the ShanakaJayakody account.

## Goal

A new personal site exists in `~/shanakajayakody`, typechecks and builds cleanly with bun, and is pushed to a new public GitHub repository `ShanakaJayakody/shanakajayakody.com` whose live URL returns the code.

## Criteria

### Scaffolding
- [ ] ISC-1: `package.json` exists with `dev`/`build`/`preview` scripts
- [ ] ISC-2: `vite.config.ts` exists and compiles
- [ ] ISC-3: `tsconfig.json` exists with strict mode enabled
- [ ] ISC-4: `index.html` exists with `<title>` containing "Shanaka Jayakody"
- [ ] ISC-5: `src/main.tsx` mounts React root
- [ ] ISC-6: `src/App.tsx` exists and renders all page sections
- [ ] ISC-7: `src/styles.css` exists with CSS custom properties
- [ ] ISC-8: `.gitignore` excludes `node_modules` and `dist`
- [ ] ISC-9: `README.md` exists naming the project and bun commands
- [ ] ISC-10: `public/favicon.svg` exists

### Content sections
- [ ] ISC-11: Hero section renders name "Shanaka Jayakody"
- [ ] ISC-12: Hero renders a one-line role/identity statement
- [ ] ISC-13: About section renders
- [ ] ISC-14: Work/Projects section renders ≥3 project entries
- [ ] ISC-15: Contact section renders email link (mailto)
- [ ] ISC-16: Footer renders with current year
- [ ] ISC-17: Navigation with anchor links to sections renders

### Quality
- [ ] ISC-18: `index.html` has meta description tag
- [ ] ISC-19: `index.html` has Open Graph title + description tags
- [ ] ISC-20: Dark/light theme respects `prefers-color-scheme`
- [ ] ISC-21: Layout is responsive (mobile media query present in CSS)
- [ ] ISC-22: `bunx tsc --noEmit` exits 0
- [ ] ISC-23: `bun run build` exits 0 (output to log file, grepped)
- [ ] ISC-24: `dist/index.html` produced by build
- [ ] ISC-25: Built page renders in browser without console errors

### Repository
- [ ] ISC-26: `git init` done; working tree committed on `main`
- [ ] ISC-27: Public repo `ShanakaJayakody/shanakajayakody.com` exists on GitHub
- [ ] ISC-28: Local `main` pushed; remote HEAD matches local HEAD
- [ ] ISC-29: `curl` of the GitHub repo URL returns HTTP 200

### Anti-criteria
- [ ] ISC-30: Anti: no `package-lock.json` or `yarn.lock` in repo
- [ ] ISC-31: Anti: no secrets/tokens/API keys in any committed file
- [ ] ISC-32: Anti: no CNAME or deploy workflow committed (hosting deferred)
- [ ] ISC-33: Anti: repo is not named `shanakajayakody` (profile-README collision)

### Antecedent
- [ ] ISC-34: Antecedent: typographic hierarchy uses ≤2 font families with distinct display/body scale (precondition for "confident, not template" feel)

## Test Strategy

| isc | type | check | threshold | tool |
|-----|------|-------|-----------|------|
| 1–10 | file | file exists with expected content | present | Read/Grep |
| 11–21 | content | section markup/CSS present in source | present | Grep |
| 22 | build | typecheck exit code | 0 | Bash |
| 23–24 | build | build exit code + dist artifact | 0 / present | Bash (log file) |
| 25 | ui | preview renders, console clean | 0 errors | Browser preview |
| 26–28 | repo | git + gh CLI state | match | Bash |
| 29 | live | HTTP status of repo URL | 200 | curl |
| 30–33 | anti | absence checks | absent | Bash/Grep |
| 34 | antecedent | font-family count in CSS | ≤2 | Grep |

## Features

| name | description | satisfies | depends_on | parallelizable |
|------|-------------|-----------|------------|----------------|
| scaffold | Vite+React+TS project skeleton via bun | ISC-1..10 | — | no |
| content | Hero/About/Work/Contact/Footer/Nav sections | ISC-11..17, 34 | scaffold | no |
| quality | SEO meta, theming, responsive, build green | ISC-18..25 | content | no |
| repo | git init, gh repo create, push, verify | ISC-26..33 | quality | no |

## Decisions

- 2026-08-10: Repo named `shanakajayakody.com`, not `shanakajayakody` — the latter is GitHub's special profile-README repo name; using it would make the site code render on the profile page instead of a clean project repo.
- 2026-08-10: Delegation floor (E3 ≥2) relaxed — show-your-math: session harness restricts Agent-tool use unless user-requested; the work is single-author scaffolding where a Forge hand-off would cost more in coordination than it saves. Advisor (thinking capability) still fires at VERIFY.
- 2026-08-10: Vanilla CSS over Tailwind — zero-dependency styling keeps the repo trivially editable and the build fast; site is small enough that utility classes buy nothing.
- 2026-08-10: EnterPlanMode skipped despite E3 — user already approved scope via three explicit AskUserQuestion answers (build new / repo only / public); re-planning would re-litigate a made decision.

## Verification

(populated at VERIFY)
