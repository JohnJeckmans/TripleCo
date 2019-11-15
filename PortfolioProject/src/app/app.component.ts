import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioProject';
  scrollToTop() {
    document.body.scrollTop = 0;  //for Safari
    document.documentElement.scrollTop = 0;
  }
}
