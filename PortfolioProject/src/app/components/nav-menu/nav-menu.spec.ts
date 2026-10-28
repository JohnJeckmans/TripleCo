import { TestBed } from '@angular/core/testing';

import { NavMenu } from './nav-menu';

describe('NavMenu', () => {
  async function render() {
    const fixture = TestBed.createComponent(NavMenu);
    await fixture.whenStable();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('opens and closes the mobile menu with the hamburger button', async () => {
    const { fixture, el } = await render();
    const button = el.querySelector<HTMLButtonElement>('#menu-bars')!;
    const nav = el.querySelector('#mobile-nav')!;

    expect(nav.classList).not.toContain('nav-expand');
    expect(button.getAttribute('aria-expanded')).toBe('false');

    button.click();
    await fixture.whenStable();
    expect(nav.classList).toContain('nav-expand');
    expect(button.getAttribute('aria-expanded')).toBe('true');

    button.click();
    await fixture.whenStable();
    expect(nav.classList).not.toContain('nav-expand');
  });

  it('closes the mobile menu after picking a link', async () => {
    const { fixture, el } = await render();
    el.querySelector<HTMLButtonElement>('#menu-bars')!.click();
    await fixture.whenStable();

    el.querySelector<HTMLAnchorElement>('#mobile-nav a[href="#services"]')!.click();
    await fixture.whenStable();
    expect(el.querySelector('#mobile-nav')!.classList).not.toContain('nav-expand');
  });

  it('closes the mobile menu with Escape and hides it from the keyboard while closed', async () => {
    const { fixture, el } = await render();
    const nav = el.querySelector('#mobile-nav')!;
    expect(nav.hasAttribute('inert')).toBe(true);

    el.querySelector<HTMLButtonElement>('#menu-bars')!.click();
    await fixture.whenStable();
    expect(nav.hasAttribute('inert')).toBe(false);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(nav.classList).not.toContain('nav-expand');
  });

  it('opens the desktop links with the keyboard', async () => {
    const { fixture, el } = await render();
    el.querySelector<HTMLButtonElement>('#sidebar-toggle')!.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await fixture.whenStable();
    expect(el.querySelector('#desktop-nav')!.classList).not.toContain('display-none');
  });

  it('shows the desktop links while hovering the sidebar', async () => {
    const { fixture, el } = await render();
    const sidebar = el.querySelector('.sidebar-container')!;
    const links = el.querySelector('#desktop-nav')!;

    expect(links.classList).toContain('display-none');

    sidebar.dispatchEvent(new MouseEvent('mouseenter'));
    await fixture.whenStable();
    expect(links.classList).not.toContain('display-none');

    sidebar.dispatchEvent(new MouseEvent('mouseleave'));
    await fixture.whenStable();
    expect(links.classList).toContain('display-none');
  });
});
