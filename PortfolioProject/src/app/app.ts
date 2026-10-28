import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavMenu } from './components/nav-menu/nav-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FontAwesomeModule, NavMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly year = new Date().getFullYear();
}
