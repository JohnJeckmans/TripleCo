import { TestBed } from '@angular/core/testing';

import { Engineering } from './engineering';

describe('Engineering', () => {
  it('shows the title and the main sections', async () => {
    const fixture = TestBed.createComponent(Engineering);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('.main-title')?.textContent).toContain('Solutions');
    for (const id of ['intro', 'experience']) {
      expect(el.querySelector(`#${id}`), `#${id}`).not.toBeNull();
    }
  });
});
