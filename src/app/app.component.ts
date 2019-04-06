import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TabItem, DialogService } from './shared';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private dialogService: DialogService) {}
  selectedTabName = 'home';
  ngOnInit(): void {
    this.routeEvent(this.router);
  }
  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }
  removeDialog() {
    this.dialogService.close();
  }
  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const arr = e.url.split('/');
        if (arr.length > 1) {
          this.selectedTabName = arr[1];
        }
      }
    });
  }
  get selectedIndex() {
    return this.selectedTabName === 'home'
      ? 0
      : this.selectedTabName === 'recommend'
      ? 1
      : this.selectedTabName === 'category'
      ? 2
      : this.selectedTabName === 'chat'
      ? 3
      : 4;
  }
}
