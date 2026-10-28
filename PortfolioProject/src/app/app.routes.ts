import { Routes } from '@angular/router';

// Resume and Engineering open as full-screen overlays on top of the home page.
// They are lazy-loaded, so visitors only download them when they click through.
// `title` is a key into `titles` in src/app/i18n/*.ts (see TranslatedTitleStrategy).
export const routes: Routes = [
  {
    path: 'resume',
    title: 'resume',
    loadComponent: () => import('./components/resume/resume').then((m) => m.Resume),
  },
  {
    path: 'engineering',
    title: 'engineering',
    loadComponent: () => import('./components/engineering/engineering').then((m) => m.Engineering),
  },
  { path: '**', redirectTo: '' },
];
