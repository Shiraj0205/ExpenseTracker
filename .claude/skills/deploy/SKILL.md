---
name: deploy
description: Run tests, build production bundle, and push to staging
---

Deploy this project to staging by following these steps in order:

**Step 1 — Tests**
Run `npm run lint` (this project has no test framework per CLAUDE.md, so linting is the quality gate). If lint fails with errors, stop and report them — do not proceed.

**Step 2 — Production build**
Run `npm run build`. If the build fails, stop and report the error.

**Step 3 — Push to staging**
Run `npm run preview` to verify the build locally, then report that the build artifact in `dist/` is ready for staging deployment. If a staging deployment command (e.g. `npm run deploy:staging`, a `gh pages` push, or an rsync command) exists in package.json, run it now. Otherwise, inform the user that the `dist/` directory is built and ready, and ask them to specify the staging target.

After all steps complete, summarise: what passed, what was skipped, and what needs manual follow-up.
