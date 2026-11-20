# Saath — One day at a time

A browser-based daily-support prototype for people living with memory loss and their caregivers. Saath presents one routine activity at a time, familiar contacts and memory notes, with a separate caregiver demo view.

**[Try the live demo](https://saath-one-day-mvp4c4gt.gabbu-bruno.chatgpt.site/)**

**Status:** working frontend prototype. Data stays in the current browser. There are no authenticated accounts, cross-device syncing, background notifications or automatic caregiver alerts. This is a demonstration of daily-support interactions, not a clinically validated product, emergency service or treatment tool. Use fictional information.

## Try it in two minutes

1. Open the demo and choose **I've done this** on the next activity.
2. Open **Demo: Caregiver view** and inspect the completion count and timestamped history.
3. Enter fictional names in the blank profile fields, then add an activity with a time and helpful note. Edit its time, then return to **My day** to see the reordered routine.
4. Refresh: the browser retains the profile and activity state when storage is available.
5. Add a memory note, then visit **My memories**.
6. Open an activity's Remove dialog and choose Close to cancel.
7. Use **Reset demo** to clear the profile fields and restore the sample routines. Reset clears this browser's demo data.

Opening the site on another device creates a separate demo; it does not connect a caregiver to another person.

## Implemented

- Home view with date, labelled clock, next incomplete activity and caregiver contact dialog.
- Routines ordered by time, check-off and undo.
- Caregiver editing of profile details, routine creation, in-place editing and confirmed removal.
- Memory notes with confirmed removal.
- Timestamped check-off and undo history, limited to the most recent 200 entries.
- Daily routine reset using the device's local date while retaining history and memory notes.
- Local persistence with validation of previously stored data and graceful recovery from corrupt data.
- Save-failure notice if browser storage is unavailable or full.
- Updates between tabs using browser storage events; this is same-browser tab coordination, not server syncing.
- Responsive layouts, labelled inputs, visible keyboard focus, a skip link, focus on main content after navigation and reduced-motion styling.
- Explicit demo controls separated from the person's main navigation.

"My reminders" displays scheduled routines. It does not send notifications or ensure that an activity happens at its scheduled time. History records what someone clicked; it does not independently verify completion.

## Architecture

| File | Responsibility |
| --- | --- |
| `dist/index.html` | Page shell, main navigation and demo controls |
| `dist/styles.css` | Responsive layout, typography and focus styling |
| `dist/app.js` | View rendering, forms, dialogs and browser events |
| `dist/state.js` | State validation, persistence, daily resets and completion history |
| `tests/state.test.cjs` | State and persistence regression tests |

The browser renders views from a state object, passes routine changes through state operations and saves under the existing `saath-v1` localStorage key. Profile fields start blank. Existing custom profile details are preserved when upgrading from the bundled sample. User-supplied text is escaped before HTML rendering. The state module has no external dependencies and can run under Node for tests.

## Run locally

Requirements: Python 3 to serve the frontend; Node.js 20+ to run tests. No package installation or build step is required.

```sh
python3 -m http.server 8080 --directory dist
```

Visit `http://localhost:8080`.

```sh
node --check dist/app.js
node --test tests/state.test.cjs
```

Automated coverage includes completion/undo history, midnight rollover, legacy profile migration, malformed records, corrupt/unavailable storage and bounded history. Browser checks cover completion advancing the next activity, caregiver history, cancellation of removal and persistence after refresh. These checks do not establish full accessibility compliance.

## Deploy

Saath is a static site. On Vercel, import your repository, choose **Other** as the framework preset, and set the output directory to `dist`. Leave the build command empty. On any static host, publish the contents of `dist`.

The repository includes a GitHub Actions workflow that runs the JavaScript syntax check and state tests on pushes and pull requests.

## Design decisions

- A single next activity reduces the number of choices on the home screen.
- Written labels and consistent main navigation keep actions explicit.
- Caregiver controls are visibly labelled as demo controls; this switch provides no security boundary.
- Local storage makes the prototype easy to explore without an account, while limiting it to one browser.
- Confirmations reduce accidental removal of familiar routines and memories.
- Completion history provides a concrete foundation for a future caregiver dashboard.

## Next engineering milestone

- Authenticated caregiver accounts and a safe linked-person device flow.
- A server database for routines, memories and completion events.
- Server-enforced access checks with tests proving that unrelated accounts cannot access each other's data.
- Cross-device update delivery, connection-state feedback and retry handling.
- An isolated fictional demo that remains available without exposing personal profiles.
- Structured usability feedback and further accessibility testing before making claims about suitability for real-world care.

## Development transparency

This project is developed with AI assistance. Its capabilities should be described according to what is implemented and tested. No real-user outcomes or clinical effectiveness are claimed.
