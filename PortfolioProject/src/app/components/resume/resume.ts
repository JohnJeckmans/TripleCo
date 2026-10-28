import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-resume',
  imports: [FontAwesomeModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  protected readonly t = inject(I18n).t;
}
