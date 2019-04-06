import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TabItem, Banner, GridItem, Product } from 'src/app/shared';
import { HomeService } from '../../services';

/**
 * interface 是类型模版，不可以实例化，而 class 是实例化的
 */
export class TabContent {
  products: Product[] = [];
  tabLink = '';
  imageSliders?: Banner[];
  gridItems?: GridItem[];
  ad?: { imageUrl: string; link: string };
}

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  tabs$: Observable<TabItem[]>;
  constructor(private router: Router, private service: HomeService) {}

  ngOnInit() {
    this.tabs$ = this.service.getTabs();
  }

  handleTabSelected(tabItem: TabItem) {
    this.router.navigate([`/home/${tabItem.link}`]);
  }
}
