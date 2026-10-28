import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCodepen,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faXTwitter,
  faXing,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Scroll to #section links (e.g. /resume#experience) and back to the top on page change.
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'top' })),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideAppInitializer(() => {
      inject(FaIconLibrary).addIcons(
        faGithub,
        faCodepen,
        faInstagram,
        faLinkedin,
        faMedium,
        faXing,
        faFacebook,
        faXTwitter,
        faCircle,
      );
    }),
  ],
};
