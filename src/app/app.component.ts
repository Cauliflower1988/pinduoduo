import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TabItem, DialogService } from './shared';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private dialogService: DialogService) { }
  selectedIndex$: Observable<number>;
  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(tab => this.getSelectedIndex(tab))
    );
  }
  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }
  removeDialog() {
    this.dialogService.close();
  }
  getSelectedIndex(tab: string) {
    return tab === 'home'
      ? 0
      : tab === 'recommend'
        ? 1
        : tab === 'category'
          ? 2
          : tab === 'chat'
            ? 3
            : 4;
  }
}
