import { Component, EventEmitter, OnInit } from '@angular/core';
import { TabItem, DialogService, ProductSpecDialogComponent } from './shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private dialogService: DialogService) {}
  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }
  removeDialog() {
    this.dialogService.close();
  }
}
