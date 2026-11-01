import { afterNextRender, Component, ElementRef, inject, viewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LanguageSwitcher } from './components/language-switcher/language-switcher';
import { NavMenu } from './components/nav-menu/nav-menu';
import { I18n } from './i18n/i18n';

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, NavMenu, LanguageSwitcher],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly t = inject(I18n).t;
  protected readonly year = new Date().getFullYear();
  protected readonly email = 'john.jeckmans@tripleco.nl';
  /** Contact card with name, email and mobile number (the number is deliberately not shown on the page). */
  protected readonly vcard = 'John-Jeckmans.vcf';

  private readonly heroVideo = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');

  constructor() {
    // Browsers only autoplay muted video. The `muted` attribute alone does not mute a video that
    // Angular creates, so set the property and start playback explicitly.
    afterNextRender(() => {
      const video = this.heroVideo()?.nativeElement;
      if (!video) return;
      video.muted = true;
      video.play()?.catch(() => {
        // Autoplay can still be refused (e.g. iPhone low-power mode): the first frame stays visible.
      });
    });
  }
}
