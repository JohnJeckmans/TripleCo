import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
})
export class NavMenu {
  /** Phone/tablet: whether the hamburger menu is open. */
  protected readonly mobileOpen = signal(false);
  /** Desktop: whether the hover sidebar is showing its links. */
  protected readonly sidebarOpen = signal(false);

  protected toggleMobile() {
    this.mobileOpen.update((open) => !open);
  }
}
