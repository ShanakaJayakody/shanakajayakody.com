---
task: "Build personal site, create public GitHub repo"
project: shanakajayakody.com
slug: 20260810-183500_personal-site-repo
effort: E3
effort_source: classifier
phase: complete
progress: 34/34
mode: interactive
started: 2026-08-10T18:35:00+10:00
updated: 2026-08-10T18:55:00+10:00
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
- [x] ISC-1: `package.json` exists with `dev`/`build`/`preview` scripts
- [x] ISC-2: `vite.config.ts` exists and compiles
- [x] ISC-3: `tsconfig.json` exists with strict mode enabled
- [x] ISC-4: `index.html` exists with `<title>` containing "Shanaka Jayakody"
- [x] ISC-5: `src/main.tsx` mounts React root
- [x] ISC-6: `src/App.tsx` exists and renders all page sections
- [x] ISC-7: `src/styles.css` exists with CSS custom properties
- [x] ISC-8: `.gitignore` excludes `node_modules` and `dist`
- [x] ISC-9: `README.md` exists naming the project and bun commands
- [x] ISC-10: `public/favicon.svg` exists

### Content sections
- [x] ISC-11: Hero section renders name "Shanaka Jayakody"
- [x] ISC-12: Hero renders a one-line role/identity statement
- [x] ISC-13: About section renders
- [x] ISC-14: Work/Projects section renders ≥3 project entries
- [x] ISC-15: Contact section renders email link (mailto)
- [x] ISC-16: Footer renders with current year
- [x] ISC-17: Navigation with anchor links to sections renders

### Quality
- [x] ISC-18: `index.html` has meta description tag
- [x] ISC-19: `index.html` has Open Graph title + description tags
- [x] ISC-20: Dark/light theme respects `prefers-color-scheme`
- [x] ISC-21: Layout is responsive (mobile media query present in CSS)
- [x] ISC-22: `bunx tsc --noEmit` exits 0
- [x] ISC-23: `bun run build` exits 0 (output to log file, grepped)
- [x] ISC-24: `dist/index.html` produced by build
- [x] ISC-25: Built page renders in browser without console errors

### Repository
- [x] ISC-26: `git init` done; working tree committed on `main`
- [x] ISC-27: Public repo `ShanakaJayakody/shanakajayakody.com` exists on GitHub
- [x] ISC-28: Local `main` pushed; remote HEAD matches local HEAD
- [x] ISC-29: `curl` of the GitHub repo URL returns HTTP 200

### Anti-criteria
- [x] ISC-30: Anti: no `package-lock.json` or `yarn.lock` in repo
- [x] ISC-31: Anti: no secrets/tokens/API keys in any committed file
- [x] ISC-32: Anti: no CNAME or deploy workflow committed (hosting deferred)
- [x] ISC-33: Anti: repo is not named `shanakajayakody` (profile-README collision)

### Antecedent
- [x] ISC-34: Antecedent: typographic hierarchy uses ≤2 font families with distinct display/body scale (precondition for "confident, not template" feel)

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

- ISC-1..10: Write/Read — all scaffold files confirmed on disk with expected content
- ISC-11..17: browser screenshot — hero name, kicker, About, 3 project cards, mailto link, footer year, nav anchors all render
- ISC-18..19: Grep index.html — `meta name="description"`, `og:title`, `og:description` present
- ISC-20..21: Grep styles.css — `prefers-color-scheme: dark` block and `max-width: 480px` media query present
- ISC-22..24: Bash — `bun run build` (runs `tsc --noEmit && vite build`) exit 0; output to /tmp/sj-build.log; `dist/index.html` 1.40 kB produced
- ISC-25: browser console read (errors only) — "No console logs"
- ISC-26: Bash — commit `a7ef7e0` on `main`, 13 files tracked
- ISC-27: gh — repo created, `visibility: PUBLIC`, default branch `main`
- ISC-28: Bash — local HEAD `a7ef7e05cf18…` == `git ls-remote origin main`
- ISC-29: curl — https://github.com/ShanakaJayakody/shanakajayakody.com → HTTP 200
- ISC-30: Bash — no package-lock.json/yarn.lock; bun.lock only
- ISC-31: `git grep -nE "(ghp_|gho_|sk-…|AKIA…)"` exit 1 — no matches
- ISC-32: Bash — no CNAME, no .github/ directory
- ISC-33: gh repo view — name `shanakajayakody.com` ≠ username
- ISC-34: Grep — exactly 2 families ("Fraunces", "Inter") in styles.css
- Advisor note: `Inference.ts --mode advisor` exited 1 (infra failure, same as session classifier); one attempt per Rule 3, surfaced to user rather than looped

## Changelog

- conjectured: the working directory named after the user contained the website to be pushed.
- refuted by: `ls` showed the directory empty except a stray `default.profraw`; user confirmed via AskUserQuestion that a new site should be built.
- learned: "this website" in a repo-creation request must be resolved to an actual directory with probes before scaffolding a repo around it — the referent may not exist yet.
- criterion now: ISC-1..10 (build the site first), ISC-33 (Anti: repo name must not collide with the profile-README repo name).
