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

React app split into four components. State is in-memory only; transactions are lost on page refresh.

| File | Responsibility |
|---|---|
| `src/App.jsx` | Holds `transactions` state and seed data; passes data and callbacks down |
| `src/Summary.jsx` | Receives `transactions`, computes and displays totalIncome, totalExpenses, balance |
| `src/TransactionForm.jsx` | Owns form state (description, amount, type, category); calls `onAdd(transaction)` on submit |
| `src/TransactionList.jsx` | Owns filter state (filterType, filterCategory); receives `transactions` and renders the table |

**Categories:** `food`, `housing`, `utilities`, `transport`, `entertainment`, `salary`, `other` — hardcoded in both `TransactionForm.jsx` and `TransactionList.jsx`.
