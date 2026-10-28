import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';

import { I18n } from '../../i18n/i18n';

/** The page sections, in order; each id is also a key in `t().nav`. */
const SECTIONS = ['home', 'about', 'services', 'experience', 'contact'] as const;
type Section = (typeof SECTIONS)[number];

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
  host: {
    '(document:keydown.escape)': 'closeAll()',
  },
})
export class NavMenu {
  protected readonly t = inject(I18n).t;
  protected readonly sections = SECTIONS;
  /** Phone/tablet: whether the hamburger menu is open. */
  protected readonly mobileOpen = signal(false);
  /** Desktop: whether the hover sidebar is showing its links. */
  protected readonly sidebarOpen = signal(false);
  /** The section currently on screen, highlighted in both menus ("you are here"). */
  protected readonly active = signal<Section>('home');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') return;
      // A section counts as "current" when it crosses the middle of the screen
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id as Section);
          }
        },
        { rootMargin: '-50% 0px -50% 0px' },
      );
      for (const id of SECTIONS) {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected toggleMobile() {
    this.mobileOpen.update((open) => !open);
  }

  protected closeAll() {
    this.mobileOpen.set(false);
    this.sidebarOpen.set(false);
  }
}
