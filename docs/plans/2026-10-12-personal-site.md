# Personal Academic Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a ready-to-fill GitHub Pages personal website following the user's latest Teaching-page reference.

**Architecture:** Three static HTML pages share CSS and a profile/navigation renderer. All personal content lives in a single JavaScript configuration with empty fields. Relative asset references support GitHub Pages and local HTTP preview.

**Tech Stack:** Semantic HTML, responsive CSS, plain JavaScript, Python HTTP server for local preview.

---

### Task 1: Page structure and styles

- Create `index.html`, `publications/index.html`, and `teaching/index.html` with descriptive titles, a skip link, main content landmarks, and shared rendering mount points.
- Create `assets/css/style.css` matching the reference's header, sidebar, typography, blue links, and footer.
- Use blank portrait and copy slots when content is empty; add responsive and dark color rules.
- Verify all three routes return HTTP 200 and their local asset paths resolve.

### Task 2: Editable content and interactions

- Create `assets/js/content.js` with empty profile strings and content arrays, plus concise Chinese editing comments.
- Create `assets/js/site.js` to render shared navigation, profile, footer, biography, research, services, publications, and teaching records.
- Implement a keyboard-accessible theme button and mobile contact disclosure.
- Verify page navigation, theme persistence, omitted contact links, and populated content using a temporary local copy. Render personal text safely and reject invalid links.

### Task 3: Documentation and completion

- Add `.nojekyll`, `.gitignore`, and a neutral SVG favicon.
- Update `README.md` with content examples, portrait instructions, local preview command, and GitHub Pages settings.
- Inspect desktop and mobile screenshots and browser errors. Check JavaScript syntax and `git diff --check`.
- Leave reviewable workspace changes and open the local preview for the user.
