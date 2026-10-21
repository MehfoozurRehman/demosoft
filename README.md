# demosoft

A small Vite and React landing layout with cards that show placeholder text.

**Status:** Starter. It is a Vite project with a single App component, but its content is lorem-ipsum copy, and the repo includes a second, nested copy of the same project.

## The problem

The code does not show a product goal. It is a layout prototype for a card-based page.

## What it does

- Renders a set of cards, each with a heading and body text, from `src/App.jsx`.
- Applies styles from `src/App.css` for a card wrapper layout.
- Mounts the app through `src/main.jsx`.

## How it's built

- Vite with React 18 and plain CSS, with no router, state library or backend.
- The project is a single component tree. The `demosdfasdf/` folder holds a second copy of the same Vite app.

## Running it locally

```bash
npm install
npm run dev        # vite
npm run build      # vite build
npm run preview    # vite preview
```

## What's left

- The card text is lorem ipsum and a placeholder heading.
- The `demosdfasdf/` folder duplicates the project and should be removed or merged.
- Firebase Hosting config is present, but no deployed URL is documented.
- There are no tests.
