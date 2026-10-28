import { Component, inject, signal } from '@angular/core';

import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
})
export class NavMenu {
  protected readonly t = inject(I18n).t;
  /** Phone/tablet: whether the hamburger menu is open. */
  protected readonly mobileOpen = signal(false);
  /** Desktop: whether the hover sidebar is showing its links. */
  protected readonly sidebarOpen = signal(false);

  protected toggleMobile() {
    this.mobileOpen.update((open) => !open);
  }
}
