import { Component } from '@angular/core';
import { TabItem } from './shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }
}
