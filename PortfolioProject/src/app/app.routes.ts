import { Routes } from '@angular/router';

// The site is a single page; old links such as /resume and /engineering land on it.
export const routes: Routes = [{ path: '**', redirectTo: '' }];
