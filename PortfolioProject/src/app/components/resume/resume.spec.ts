import { TestBed } from '@angular/core/testing';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Resume } from './resume';

describe('Resume', () => {
  it('shows the name and the main sections', async () => {
    TestBed.inject(FaIconLibrary).addIconPacks(fab, fas);
    const fixture = TestBed.createComponent(Resume);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('.main-title')?.textContent).toContain('Jeckmans');
    for (const id of ['intro', 'experience', 'skills', 'interests']) {
      expect(el.querySelector(`#${id}`), `#${id}`).not.toBeNull();
    }
  });
});
