import { Component, OnInit } from '@angular/core';
import { TabContent } from 'src/app/home';
import { Product } from 'src/app/shared';
import { getShuffledArr } from 'src/app/utils';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css']
})
export class RecommendContainerComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      title: '佑诗2018冬季新羊剪绒大衣女水貂绒领中长款羊毛颗粒皮草外套修身',
      imageUrl:
        'https://t00img.yangkeduo.com/goods/images/2018-12-03/c3af8ddf0744c071be4a6e958094545f.jpeg@750w_1l_50Q.src',
      tags: ['全场包邮', '不中退款'],
      price: 18.1,
      priceDesc: '已拼10万+件',
      buyerAvatars: [
        '/assets/avatars/avatar001.png',
        '/assets/avatars/avatar002.png'
      ]
    },
    {
      id: 2,
      title: 'JEEP/吉普加绒加厚牛仔裤男商务休闲直筒宽松大码中高腰长裤男',
      imageUrl:
        'https://t00img.yangkeduo.com/goods/images/2018-11-02/af2d6d1dfd70ab4a7880a2ce4eaaf376.jpeg@750w_1l_50Q.src',
      tags: ['极速退款', '品牌特卖'],
      price: 266,
      priceDesc: '已拼10万+件',
      buyerAvatars: [
        '/assets/avatars/avatar002.png',
        '/assets/avatars/avatar005.png'
      ]
    },
    {
      id: 3,
      title: '【领券立减 】三只松鼠坚果干果组合655/1105g多规格夏威夷碧根果',
      imageUrl:
        'https://t00img.yangkeduo.com/goods/images/2019-01-22/bd4bb40145fb2e858841025b0e3c90f1.jpeg@750w_1l_50Q.src',
      tags: ['全场包邮', '限时秒杀'],
      price: 49.9,
      priceDesc: '已拼7932件',
      buyerAvatars: [
        '/assets/avatars/avatar004.png',
        '/assets/avatars/avatar005.png'
      ]
    },
    {
      id: 4,
      title: '心相印抽纸批发300张茶香整箱实惠家用18包餐巾卫生纸家庭装纸巾',
      imageUrl:
        'https://t11img.yangkeduo.com/images/2018-04-14/040d508d3f70610bb14d542a24ab806d.jpeg@750w_1l_50Q.src',
      tags: ['极速退款', '满54返3'],
      price: 39.8,
      priceDesc: '已拼2032件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    },
    {
      id: 5,
      title: '【水滴屏】vivo X23幻彩版水滴屏屏幕指纹AI双摄游戏手机',
      imageUrl:
        'http://t00img.yangkeduo.com/goods/images/2019-02-14/d4ad74ccd869a1999e151ec61981aa28.jpeg',
      tags: ['全场包邮', '不中退款'],
      price: 39.8,
      priceDesc: '已拼804件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    },
    {
      id: 6,
      title: '【华为官方正品】华为P20 全面屏 徕卡三摄AI摄影大师',
      imageUrl:
        'http://t00img.yangkeduo.com/goods/images/2018-09-22/abb7b6cf519ebd0e4c799a323ba730fd.jpeg',
      tags: ['全场包邮', '不中退款'],
      price: 4299,
      priceDesc: '已拼804件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    },
    {
      id: 7,
      title: '【买二送一买三送二】冰箱收纳盒冷冻食品水果保鲜盒密封储物盒',
      imageUrl:
        'http://t00img.yangkeduo.com/goods/images/2018-08-14/8bfe9eb6f8c07b09af878c561554cd65.jpeg',
      tags: ['极速退款', '满29返2'],
      price: 9.8,
      priceDesc: '已拼7.5万件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    },
    {
      id: 8,
      title:
        '【全新国行正品带票】iPhone XR 全网通苹果手机 抢券请看详情【预售：3月19日发完】',
      imageUrl:
        'http://t00img.yangkeduo.com/goods/images/2019-03-14/a4552f0beb68fee2d453d6520fb6b80a.jpeg',
      tags: ['限时秒杀', '顺丰包邮'],
      price: 5340,
      priceDesc: '已拼7.1万件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    }
  ];
  tabContent: TabContent | null = null;
  constructor() {}

  ngOnInit() {
    this.tabContent = {
      products: getShuffledArr(this.products),
      ad: {
        imageUrl: 'http://ppqfnsh9s.bkt.clouddn.com/ad002.gif',
        link: ''
      },
      tabLink: 'men'
    };
  }
}
