import { Component } from '@angular/core';
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
    const top = 40;
    this.dialogService.open(ProductSpecDialogComponent, {
      inputs: { title: 'Hello' },
      outputs: {},
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }
  removeDialog() {
    this.dialogService.close();
  }
}
