# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build
npm run lint      # run ESLint
npm run preview   # preview production build
```

No test framework is configured.

## Architecture

Single-component React app (`src/App.jsx`) — all state, logic, and UI live in one `App` component with no child components. State is in-memory only; transactions are lost on page refresh.

**Known bugs in the starter code** (intentional, per course design):
- `amount` is stored as a string, so `totalIncome` and `totalExpenses` use string concatenation instead of numeric addition — the summary cards display wrong values.
- "Freelance Work" is seeded as `type: "expense"` despite being income.

**Categories:** `food`, `housing`, `utilities`, `transport`, `entertainment`, `salary`, `other` — defined as a hardcoded array in `App.jsx`.
