# Dev Memory: Project Experiences & Stories

**Date:** 2026-10-30  
**Context:** Adding project experiences / technical stories to `apps/portfolio` (`joecodes.in`).

---

## 1. Core Principles & Decisions

### 1. Selective, Not Mandatory
* **Rule:** Not every project gets or needs a "Case Study / Story".
* Projects should only have a deep-dive experience button if there is a genuinely interesting problem, architecture choice, or funny/painful engineering hurdle behind it.
* If a project data object has no `story` or `experience` payload, the card remains clean with just standard links (e.g., Live Demo, GitHub), with no dead or placeholder buttons.

### 2. Anti-Formulaic Storytelling (No "Essay" Templates)
* **Rule:** Do NOT force every story into the same rigid outline (`1. Problem, 2. Architecture, 3. The Bug, 4. Results`). That feels generated, corporate, and tedious to read.
* Each project experience should have its own organic flow:
  * **Qwik Preview**: A punchy, developer-to-developer devlog about developer friction, the Screen Wake Lock API, and why typing IP addresses drove Joe crazy.
  * **Future Projects**: Might just be a quick benchmark report, a visual state-machine breakdown, or an honest post-mortem of a production mistake.
* The data structure for stories must support **flexible sections** (custom headings, varied section counts, optional code blocks, callouts, or quotes).

### 3. UI/UX: In-Page Drawer / Modal (Option A)
* **Format:** Interactive slide-over drawer or focused overlay modal.
* **Stack:** React 19 + `motion/react` (`AnimatePresence`) + Tailwind CSS v4.
* **Behavior:**
  * Opens smoothly when clicking the project's story button (e.g., "Behind the Build" or "Dev Story").
  * Background scroll-lock while open.
  * Closes via `Escape` key, backdrop click, or close button.
  * Zero page-navigation delay; keeps the visitor engaged directly on `joecodes.in`.

---

## 2. Proposed Data Schema for Projects

```js
{
  id: "qwik-preview",
  title: "Qwik Preview",
  // ...standard project fields...

  // OPTIONAL: Only defined if this project has a story worth telling
  story: {
    badge: "Behind the Build", // or "Devlog", "Field Note"
    readTime: "2 min read",
    headline: "Why I spent 8 hours so I'd never type an IP address again",
    // Flexible sections: unique per project, not a fixed formula
    sections: [
      {
        heading: "The Frustration",
        body: "...",
      },
      {
        heading: "The Unsung Hero: Screen Wake Lock API",
        body: "...",
        codeSnippet: {
          lang: "javascript",
          code: "const lock = await navigator.wakeLock.request('screen');"
        }
      }
    ]
  }
}
```

---

## 3. Implementation Status
1. [x] Defined flexible `story` schema in [Projects.jsx](file:///Users/jotheeswaran/workspace/my-portfolio/apps/portfolio/src/components/Projects.jsx).
2. [x] Removed duplicate/standalone "The Story of Qwik Preview" card from [About.jsx](file:///Users/jotheeswaran/workspace/my-portfolio/apps/portfolio/src/components/About.jsx).
3. [x] Built the animated, keyboard-accessible [ProjectStoryDrawer.jsx](file:///Users/jotheeswaran/workspace/my-portfolio/apps/portfolio/src/components/ProjectStoryDrawer.jsx) (`Esc` key, scroll-locking, zero-jargon narrative).
4. [x] Anti-text-bloat overhaul:
   - **Projects**: Slashed 75% of text on project cards. Replaced 4-line descriptions with 1-line taglines, simplified stack pills, and replaced bulky 2x2 paragraph cards with compact checkmark capability chips.
   - **About**: Replaced long manifesto quote and verbose "Week in the Life" essays with punchy 1-2 line cards while keeping 100% of the personality and humor.
5. [x] Lint and monorepo build passing cleanly. (Zero remote pushes per user rule).
