import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Banner, Product } from 'src/app/shared';
import { getShuffledArr } from 'src/app/utils';
import { HomeService } from '../../services';
import { Channel, Ad } from '../../domain';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  products$: Observable<Product[]>;
  channels$: Observable<Channel[]>;
  banners$: Observable<Banner[]>;
  ad$: Observable<Ad>;
  tab$: Observable<string>;
  constructor(private route: ActivatedRoute, private service: HomeService) {}

  ngOnInit() {
    this.tab$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
    this.products$ = this.tab$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab)),
      map(products => getShuffledArr(products))
    );
    this.channels$ = this.tab$.pipe(
      filter(tab => tab === 'hot'),
      switchMap(_ => this.service.getChannels())
    );
    this.banners$ = this.tab$.pipe(
      filter(tab => tab === 'hot'),
      switchMap(_ => this.service.getBanners())
    );
    this.ad$ = this.tab$.pipe(
      filter(tab => tab !== 'hot'),
      switchMap(tab => this.service.getAdsByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );
  }
}
