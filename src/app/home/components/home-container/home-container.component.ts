import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabItem, ImageSlider, GridItem, Product } from 'src/app/shared';

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
  tabs: TabItem[] = [
    {
      title: '热门',
      link: 'hot'
    },
    {
      title: '男装',
      link: 'men'
    },
    {
      title: '百货',
      link: 'department'
    },
    {
      title: '运动',
      link: 'sports'
    },
    {
      title: '手机',
      link: 'mobile'
    },
    {
      title: '家纺',
      link: 'textile'
    },
    {
      title: '食品',
      link: 'food'
    },
    {
      title: '电器',
      link: 'appliance'
    },
    {
      title: '鞋包',
      link: 'shoes'
    },
    {
      title: '汽车',
      link: 'cars'
    },
    {
      title: '水果',
      link: 'fruits'
    },
    {
      title: '电脑',
      link: 'computers'
    },
    {
      title: '内衣',
      link: 'underwears'
    },
    {
      title: '家装',
      link: 'home'
    },
    {
      title: '母婴',
      link: 'baby'
    },
    {
      title: '美妆',
      link: 'makeup'
    },
    {
      title: '家具',
      link: 'furnitures'
    }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  handleTabSelected(tabItem: TabItem) {
    this.router.navigate([`/home/${tabItem.link}`]);
  }
}
