import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

import { Banner, Product } from 'src/app/shared';
import { getShuffledArr } from 'src/app/utils';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}

interface Ad {
  imageUrl: string;
  link: string;
}
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  // tabContent: TabContent | null = null;
  products$: Observable<Product[]>;
  channels$: Observable<Channel[]>;
  banners$: Observable<Banner[]>;
  ad$: Observable<Ad>;
  tab$: Observable<string>;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // 嵌套的 subscribe 对于 rxjs 来说是一个不好的范式，因为 rx 的一个优点就是可以摆脱回调地狱。
    // 一旦发现嵌套，我们就要考虑需要使用 rxjs 的操作符来解决这些嵌套。
    // this.route.paramMap
    //   .pipe(
    //     filter(params => params.has('tabLink')),
    //     map(params => params.get('tabLink'))
    //   )
    //   .subscribe(tabLink => {
    //     this.tabContent = new TabContent();
    //     this.tabContent.tabLink = tabLink;
    //     this.http
    //       .get<Product[]>('http://localhost:3000/products', {
    //         params: { categories_like: tabLink }
    //       })
    //       .subscribe(
    //         products => (this.tabContent.products = getShuffledArr(products))
    //       );
    //     if (tabLink === 'hot') {
    //       this.http
    //         .get<Channel[]>('http://localhost:3000/channels')
    //         .subscribe(channels => (this.tabContent.gridItems = channels));
    //       this.http
    //         .get<Banner[]>('http://localhost:3000/banners')
    //         .subscribe(banners => (this.tabContent.imageSliders = banners));
    //     } else {
    //       this.http
    //         .get('http://localhost:3000/ads', {
    //           params: { categories_like: tabLink }
    //         })
    //         .subscribe(ads => (this.tabContent.ad = ads[0]));
    //     }
    //   });
    this.tab$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
    this.products$ = this.tab$.pipe(
      switchMap(tab =>
        this.http.get<Product[]>(`${environment.baseUrl}/products`, {
          params: { categories_like: tab }
        })
      ),
      map(products => getShuffledArr(products))
    );
    this.channels$ = this.tab$.pipe(
      filter(tab => tab === 'hot'),
      switchMap(_ =>
        this.http.get<Channel[]>(`${environment.baseUrl}/channels`)
      )
    );
    this.banners$ = this.tab$.pipe(
      filter(tab => tab === 'hot'),
      switchMap(_ => this.http.get<Banner[]>(`${environment.baseUrl}/banners`))
    );
    this.ad$ = this.tab$.pipe(
      filter(tab => tab !== 'hot'),
      switchMap(tab =>
        this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
          params: { categories_like: tab }
        })
      ),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );
  }
}
