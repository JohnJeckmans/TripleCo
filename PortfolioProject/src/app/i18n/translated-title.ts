import { effect, inject, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { Translations } from './en';
import { I18n } from './i18n';

type TitleKey = keyof Translations['titles'];

/**
 * Route `title`s in app.routes.ts are keys into `titles` in the language files.
 * The browser tab title follows both the page and the chosen language.
 */
@Injectable({ providedIn: 'root' })
export class TranslatedTitleStrategy extends TitleStrategy {
  private readonly i18n = inject(I18n);
  private readonly title = inject(Title);
  private readonly key = signal<TitleKey>('home');

  constructor() {
    super();
    effect(() => this.title.setTitle(this.i18n.t().titles[this.key()]));
  }

  override updateTitle(snapshot: RouterStateSnapshot) {
    this.key.set((this.buildTitle(snapshot) as TitleKey | undefined) ?? 'home');
  }
}
