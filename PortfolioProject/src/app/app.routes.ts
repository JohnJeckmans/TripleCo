import { Routes } from '@angular/router';

// Resume and Engineering open as full-screen overlays on top of the home page.
// They are lazy-loaded, so visitors only download them when they click through.
export const routes: Routes = [
  {
    path: 'resume',
    title: 'John Jeckmans | TripleCo',
    loadComponent: () => import('./components/resume/resume').then((m) => m.Resume),
  },
  {
    path: 'engineering',
    title: 'Engineering Solutions | TripleCo',
    loadComponent: () => import('./components/engineering/engineering').then((m) => m.Engineering),
  },
  { path: '**', redirectTo: '' },
];
