import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { App } from './app';
import { routes } from './app.routes';
import { en } from './i18n/en';

describe('App (business card page)', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
    TestBed.inject(FaIconLibrary).addIconPacks(fab, fas);
  });

  async function render() {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return { fixture, page: fixture.nativeElement as HTMLElement };
  }

  it('starts in English with name and headline', async () => {
    const { page } = await render();
    expect(page.querySelector('.hero-name')?.textContent).toContain('Jeckmans');
    expect(page.querySelector('.hero-headline')?.textContent).toContain('Board Advisor');
    expect(document.documentElement.lang).toBe('en-GB');
  });

  it('has every section the menu links to', async () => {
    const { page } = await render();
    for (const id of ['home', 'about', 'services', 'experience', 'contact']) {
      expect(page.querySelector(`#${id}`), `#${id}`).not.toBeNull();
    }
  });

  it('shows all services, roles, board roles and education', async () => {
    const { page } = await render();
    expect(page.querySelectorAll('.tile').length).toBe(en.services.items.length);
    expect(page.querySelectorAll('.timeline-item').length).toBe(en.experience.roles.length);
    expect(page.querySelectorAll('.plain-list li').length).toBe(
      en.experience.boards.length + en.education.items.length,
    );
  });

  it('offers email and a Save contact card, without showing the phone number', async () => {
    const { page } = await render();
    const mail = page.querySelector<HTMLAnchorElement>('a[href^="mailto:"]');
    expect(mail?.getAttribute('href')).toBe('mailto:john.jeckmans@tripleco.nl');

    const card = page.querySelector<HTMLAnchorElement>('a[download]');
    expect(card?.getAttribute('href')).toBe('John-Jeckmans.vcf');

    expect(page.textContent).not.toContain('+31');
    expect(page.textContent).not.toContain('0638619522');
  });

  it('shows the current year in the footer', async () => {
    const { page } = await render();
    expect(page.querySelector('.footer')?.textContent).toContain(String(new Date().getFullYear()));
  });

  it('switches the whole page with the language menu', async () => {
    const { fixture, page } = await render();

    page.querySelector<HTMLButtonElement>('app-language-switcher .current')!.click();
    await fixture.whenStable();
    const dutch = [...page.querySelectorAll<HTMLButtonElement>('#language-list button')].find((b) =>
      b.textContent?.includes('NL'),
    )!;
    dutch.click();
    await fixture.whenStable();

    expect(page.querySelector('#services .section-title')?.textContent).toContain('Hoe ik help');
    expect(page.querySelector('.hero-focus')?.textContent).toContain('Strategie, transformatie & groei');
    expect(document.documentElement.lang).toBe('nl-NL');
    expect(page.querySelector('#language-list')).toBeNull(); // menu closes after choosing
  });
});
