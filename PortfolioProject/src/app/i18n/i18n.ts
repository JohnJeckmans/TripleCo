import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

import { de } from './de';
import { en, Translations } from './en';
import { nl } from './nl';

export type Lang = 'en' | 'nl' | 'de';

export interface LanguageOption {
  code: Lang;
  /** Short ISO code shown in the menu. */
  label: string;
  /** Language name in its own language. */
  name: string;
  /** Value for <html lang>, used by screen readers, spell checkers and search engines. */
  htmlLang: string;
  flag: string;
}

export const LANGUAGES: readonly LanguageOption[] = [
  { code: 'en', label: 'EN', name: 'English', htmlLang: 'en-GB', flag: 'assets/flags/gb.svg' },
  { code: 'nl', label: 'NL', name: 'Nederlands', htmlLang: 'nl-NL', flag: 'assets/flags/nl.svg' },
  { code: 'de', label: 'DE', name: 'Deutsch', htmlLang: 'de-DE', flag: 'assets/flags/de.svg' },
];

const TEXTS: Record<Lang, Translations> = { en, nl, de };
const STORAGE_KEY = 'tripleco-language';
const DEFAULT_LANG: Lang = 'en';

/** Holds the visitor's language and the matching texts. The choice is remembered on their device. */
@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(readStoredLang() ?? DEFAULT_LANG);
  readonly language = computed(() => LANGUAGES.find((l) => l.code === this.lang())!);
  /** All texts for the current language, e.g. `t().home.title`. */
  readonly t = computed(() => TEXTS[this.lang()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.language().htmlLang;
    });
  }

  use(lang: Lang) {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage can be blocked (private mode); the choice then lasts for this visit only.
    }
  }
}

function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.some((l) => l.code === stored) ? (stored as Lang) : null;
  } catch {
    return null;
  }
}
