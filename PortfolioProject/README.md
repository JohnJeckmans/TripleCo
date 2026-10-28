# John Jeckmans | TripleCo website

A one-page "digital business card" for John Jeckmans (Board Advisor, TripleCo). It has a video
introduction and five sections: Approach, How I help, Experience (with board roles, education and
sectors) and Contact. Visitors can email directly or save the contact card to their phone.
The content is based on the LinkedIn profile. The site also works as an installable Progressive Web App.

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
  assets/img/              Portrait photo, background video, social-media preview image
  assets/Font/             Web fonts
  assets/icons/            App icons and favicon
  manifest.webmanifest     PWA settings (name, colours, icons)
  John-Jeckmans.vcf        'Save contact' card: name, email, mobile number (not shown on the page)
src/
  index.html               Page title and social-media preview tags
  app/
    app.html / app.css     The whole page: introduction, approach, services, experience, contact
    app.routes.ts          Sends old links (/resume, /engineering) to the page
    app.config.ts          App setup, including which icons are available
    i18n/                  All texts in EN / NL / DE, and the language logic
    components/
      language-switcher/   Flag menu (top-right) for choosing the language
      nav-menu/            Hamburger menu (phones) and hover sidebar (desktop)
```

To use a new Font Awesome icon, add it to the list in `src/app/app.config.ts`.

## Languages and texts

The site is available in English, Dutch and German. Visitors pick a language with the flag
menu in the top-right corner. English is the default, and the site remembers each visitor's choice
on their device.

All visible text lives in three files, one per language:

```
src/app/i18n/en.ts   English
src/app/i18n/nl.ts   Dutch
src/app/i18n/de.ts   German
```

To change a text, edit it in all three files. The files must have the same items. If one is
missing, `npm run build` stops with an error that names the missing item, and `npm test`
checks that every list has the same number of lines in each language.

To change the contact card (e.g. a new phone number), edit `public/John-Jeckmans.vcf`.

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
