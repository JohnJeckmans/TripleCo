import { TestBed } from '@angular/core/testing';

import { de } from './de';
import { en } from './en';
import { I18n } from './i18n';
import { nl } from './nl';

describe('I18n', () => {
  beforeEach(() => localStorage.clear());

  it('starts in English', () => {
    expect(TestBed.inject(I18n).lang()).toBe('en');
  });

  it('remembers the chosen language for the next visit', () => {
    TestBed.inject(I18n).use('de');
    expect(localStorage.getItem('tripleco-language')).toBe('de');

    TestBed.resetTestingModule();
    const nextVisit = TestBed.inject(I18n);
    expect(nextVisit.lang()).toBe('de');
    expect(nextVisit.t().home.title).toBe('Willkommen bei TripleCo');
  });

  it('ignores an unknown stored language', () => {
    localStorage.setItem('tripleco-language', 'fr');
    expect(TestBed.inject(I18n).lang()).toBe('en');
  });

  // The type checker already makes sure every key exists; this also checks list lengths,
  // so a line added in English can't be forgotten in Dutch or German.
  it('has the same number of lines in every list for NL and DE', () => {
    const lengths = (texts: object): Record<string, number> => {
      const out: Record<string, number> = {};
      const walk = (value: unknown, path: string) => {
        if (Array.isArray(value)) out[path] = value.length;
        else if (value && typeof value === 'object')
          for (const [k, v] of Object.entries(value)) walk(v, path ? `${path}.${k}` : k);
      };
      walk(texts, '');
      return out;
    };
    expect(lengths(nl)).toEqual(lengths(en));
    expect(lengths(de)).toEqual(lengths(en));
  });
});
