# Workbench — Workshop Reference

A responsive workshop reference website by Shaurya Chauhan, developed with AI assistance. This public edition preserves the original Workbench layout, 12 experiment titles and their order. Its explanations and conceptual SVG diagrams are newly authored rather than reproduced from college records.

## Features

- Welding, Carpentry, Sheet metal and Step fitting: three experiments in each
- Original Workbench homepage and full-record reading layout
- Aim, tools, materials, working principle, diagram, sequence of operation, observation/inference table, pre/post lab questions and results sections
- Full record, Diagrams and Questions tabs, with section navigation
- Diagram studio: pan, zoom, rotation, reset, white locked view and hold-to-unlock
- Remembered dark/light/system theme; browser-local study/review notes
- Level 2 and 3 faculty reminders; responsive styling and reduced-motion support
- No PDF downloads, accounts, database or runtime AI API

## Run locally

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000. Publish `dist/` with a static host. The included GitHub Actions workflow can publish it through GitHub Pages after Pages is enabled for the repository. No install or build is required to serve the committed files.

## Structure and authoring

`dist/index.html`, `styles.css`, `app.js` implement the original interface. `content.json` supplies the public reference records; `diagrams/` contains conceptual SVGs.

To regenerate the public content with Python's standard library:

```sh
python scripts/make-content.py
python scripts/build-public-records.py
```

The first script writes source concepts and diagrams. The second applies the original interface from `scripts/ui-template/` and creates the full-format content. Run both, in that order. Source templates contain only the interface code, not private record data or images.

## Scope

The public edition covers the same named experiments as the private academic project, but does not reproduce its record text, scanned diagrams or measured observation tables. Public diagrams are conceptual and not to scale. Narrated results are expected learning outcomes, not claims of completed practical work. The notes are not faculty-approved fabrication instructions or engineering specifications. Actual workshop work requires approved dimensions, equipment, supervision and safety procedures.

Study notes and theme choices are stored in the current browser only. Clearing browser data removes them. Google Fonts is used with local font fallbacks. Browser lock prevents diagram interactions, not device gestures or browser controls. Mobile touch behaviour should be checked on a physical device.

## Credits and license

Designed and developed by Shaurya Chauhan with AI assistance for code, design, content drafting and debugging. MIT license applies to included code and original content; it does not license any separate college records or private project materials. See LICENSE.
