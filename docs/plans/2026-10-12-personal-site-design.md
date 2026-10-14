# Personal academic website design

## Scope

Create a GitHub Pages template in this repository. The user's latest visual reference is https://pku-zlr.github.io/teaching/. All personal information, photos, publications, and teaching records start empty.

## Design

Use the reference's AcademicPages-style structure: a slim horizontal navigation bar, a circular portrait and profile column, an open main content column, gray body text, blue links, and a full-width pale footer. Keep the default light appearance and include the reference's light/dark toggle. On narrow screens, move the profile above the content and offer a contact disclosure button when contact information exists.

Pages: About me (`/`), Publications (`/publications/`), and Teaching (`/teaching/`). Leave deliberate blank space under empty section headings. Display neutral geometric placeholders for the unfilled portrait, name, and biography without inventing personal data. Do not include another person's text or photographs.

## Implementation choice

Buildless HTML, CSS, and JavaScript fit this empty repository and can be served directly by GitHub Pages. A full Jekyll theme would add Ruby dependencies; a frontend framework would add a build step without helping these three static pages. Shared profile and navigation rendering keeps personal details in one editable content file.

## Data and behavior

`assets/js/content.js` contains empty profile fields and empty arrays for biography, research, service, publications, and teaching. Render configured text as text, validate link protocols, resolve local asset paths relative to the repository root, and hide unconfigured contact links. A missing or invalid portrait returns to the blank portrait slot. Preserve the selected color theme between page visits when browser storage is available.

## Verification

Check HTTP responses and local paths; inspect the three pages in the browser; test dark mode, page navigation, and a narrow viewport; and temporarily populate a local test copy to confirm that profile and records render while the delivered configuration remains empty. Document customization and GitHub Pages setup in Chinese.
