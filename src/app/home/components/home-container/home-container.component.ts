import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TabItem, ImageSlider, GridItem, Product } from 'src/app/shared';
import { Observable } from 'rxjs';

export interface TabContent {
  products: Product[];
  tabLink: string;
  imageSliders?: ImageSlider[];
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
