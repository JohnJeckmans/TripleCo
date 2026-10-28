import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, TitleStrategy, withInMemoryScrolling } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBluesky,
  faCodepen,
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { routes } from './app.routes';
import { TranslatedTitleStrategy } from './i18n/translated-title';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Scroll to #section links (e.g. /resume#experience) and back to the top on page change.
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'top' })),
    { provide: TitleStrategy, useClass: TranslatedTitleStrategy },
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideAppInitializer(() => {
      inject(FaIconLibrary).addIcons(
        faGithub,
        faCodepen,
              faLinkedin,
              faBluesky,
        faXTwitter,
        faEnvelope,
        faAddressCard,
      );
    }),
  ],
};
