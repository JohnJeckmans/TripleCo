# TripleCo Solutions website

The TripleCo Solutions portfolio site: a single-page site with a video intro, an About card,
project tiles and contact details, plus two sub-pages (**Resume** and **Engineering Solutions**)
that open on top of the home page. It also works as an installable Progressive Web App.

Built with [Angular](https://angular.dev) 22 and [Font Awesome](https://fontawesome.com) icons,
hosted on Firebase Hosting.

## What you need

- [Node.js](https://nodejs.org) 22 or 24 (LTS). Check with `node -v`.

Then, once, in this folder:

```bash
npm install
```

## Everyday commands

| Command          | What it does                                                                 |
| ---------------- | ---------------------------------------------------------------------------- |
| `npm start`      | Runs the site locally at <http://localhost:4200>. It reloads when you save a file. |
| `npm test`       | Runs the automated tests (Vitest). Add `-- --watch=false` to run them once.  |
| `npm run lint`   | Checks the code for common mistakes (ESLint).                                |
| `npm run build`  | Makes the production version in `dist/PortfolioProject/browser`.             |

## Where things are

```
public/                    Files served as-is
  assets/img/              Photos, project images, background video
  assets/Font/             Web fonts
  assets/icons/            App icons and favicon
  manifest.webmanifest     PWA settings (name, colours, icons)
src/
  index.html               Page title and social-media preview tags
  app/
    app.html / app.css     Home page: intro, about, projects, contact, footer
    app.routes.ts          The /resume and /engineering pages
    app.config.ts          App setup, including which icons are available
    components/
      nav-menu/            Hamburger menu (phones) and hover sidebar (desktop)
      resume/              Resume page
      engineering/         Engineering Solutions page
```

To change text, edit the `.html` file for that page. To use a new Font Awesome icon,
add it to the list in `src/app/app.config.ts`.

## Deploying to Firebase

The project is linked to the Firebase project `john-portfolio-project` (see `.firebaserc`).

```bash
npm run build
npx firebase-tools deploy --only hosting
```

The first time, run `npx firebase-tools login` to sign in.

## Working from Dropbox

This folder lives in Dropbox. The `node_modules`, `.angular` and `dist` folders are marked
"ignored" for Dropbox, so their thousands of generated files don't sync. If you delete one of
those folders, mark it again before running `npm install` or `npm run build` (PowerShell, from this folder):

```powershell
New-Item -ItemType Directory -Force node_modules | Out-Null
Set-Content -Path node_modules -Stream com.dropbox.ignored -Value 1
```

## History

Originally built in 2019 with Angular 8, and modernized in 2026 to Angular 22.
The 2026 update changed the tooling, moved to standalone components, added tests and ESLint,
and fixed a few layout bugs.
