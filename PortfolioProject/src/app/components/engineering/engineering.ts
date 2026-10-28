import { Component, inject } from '@angular/core';

import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.html',
  styleUrl: './engineering.css',
})
export class Engineering {
  protected readonly t = inject(I18n).t;
}
