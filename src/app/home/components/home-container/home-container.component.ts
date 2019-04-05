import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TabItem, Banner, GridItem, Product } from 'src/app/shared';
import { Observable } from 'rxjs';

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
  // tabs: TabItem[] = [];
  tabs$: Observable<TabItem[]>;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // this.http
    //   .get<TabItem[]>('http://localhost:3000/tabs')
    //   .subscribe(items => (this.tabs = items));
    this.tabs$ = this.http.get<TabItem[]>('http://localhost:3000/tabs');
  }

  handleTabSelected(tabItem: TabItem) {
    this.router.navigate([`/home/${tabItem.link}`]);
  }
}
