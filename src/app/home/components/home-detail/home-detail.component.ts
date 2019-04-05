import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { TabContent } from '../home-container';
import { Banner, GridItem, Product } from 'src/app/shared';
import { getShuffledArr } from 'src/app/utils';

interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  imageSliders: Banner[] = [];
  gridItems: GridItem[] = [];

  products: Product[] = [];
  tabContent: TabContent | null = null;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )
      .subscribe(tabLink => {
        this.tabContent = new TabContent();
        this.tabContent.tabLink = tabLink;
        this.http
          .get<Product[]>('http://localhost:3000/products', {
            params: { categories_like: tabLink }
          })
          .subscribe(
            products => (this.tabContent.products = getShuffledArr(products))
          );
        if (tabLink === 'hot') {
          this.http
            .get<Channel[]>('http://localhost:3000/channels')
            .subscribe(channels => (this.tabContent.gridItems = channels));
          this.http
            .get<Banner[]>('http://localhost:3000/banners')
            .subscribe(banners => (this.tabContent.imageSliders = banners));
        } else {
          this.http
            .get('http://localhost:3000/ads', {
              params: { categories_like: tabLink }
            })
            .subscribe(ads => (this.tabContent.ad = ads[0]));
        }
      });
  }
}
