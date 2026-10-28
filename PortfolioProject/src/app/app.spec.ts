import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { App } from './app';
import { routes } from './app.routes';

describe('App (home page)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
    TestBed.inject(FaIconLibrary).addIconPacks(fab, fas);
  });

  async function render() {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('shows the welcome title', async () => {
    const page = await render();
    expect(page.querySelector('#home h1')?.textContent).toContain('Welkom bij TripleCo');
  });

  it('has all four sections the menu links to', async () => {
    const page = await render();
    for (const id of ['home', 'about', 'projects', 'contact']) {
      expect(page.querySelector(`#${id}`), `#${id}`).not.toBeNull();
    }
  });

  it('lists six project tiles', async () => {
    const page = await render();
    expect(page.querySelectorAll('.project-item').length).toBe(6);
  });

  it('shows the current year in the footer', async () => {
    const page = await render();
    expect(page.querySelector('.footer-text')?.textContent).toContain(String(new Date().getFullYear()));
  });

  it('opens the resume and engineering pages', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/resume');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('app-resume')).not.toBeNull();

    await router.navigateByUrl('/engineering');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('app-engineering')).not.toBeNull();
  });
});
