import { Component, OnInit } from '@angular/core';
import { TabContent } from '../home-container';
import { ImageSlider, GridItem, Product } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { getShuffledArr } from 'src/app/utils';
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'assets/banners/banner001.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'assets/banners/banner002.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'assets/banners/banner003.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'assets/banners/banner004.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'assets/banners/banner005.png',
      link: '',
      caption: ''
    }
  ];
  gridItems: GridItem[] = [
    {
      title: '限时秒杀',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-13/298376dd8176f90df743de9f08a756eb.png',
      link: ''
    },
    {
      title: '断码清仓',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-07/678088ee2500f08a193ea8619bc0ae76.png',
      link: ''
    },
    {
      title: '品牌馆',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-03-14/a01571d7bde632029c76ad9a298570ec.png',
      link: ''
    },
    {
      title: '多多果园',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-03/d21a7598e29ce189a9a57bb234ee4fad.png',
      link: ''
    },
    {
      title: '9块9特卖',
      icon:
        'http://t01img.yangkeduo.com/images/2018-05-16/d86ceaeaa0bccaeb3b3dee76f64f0192.png',
      link: ''
    },
    {
      title: '助力享免单',
      icon:
        'http://t05img.yangkeduo.com/images/2018-05-16/bf18833fa4c298a040fe01f279f6f6ec.png',
      link: ''
    },
    {
      title: '天天领现金',
      icon:
        'http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png',
      link: ''
    },
    {
      title: '1分抽大奖',
      icon:
        'http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png',
      link: ''
    },
    {
      title: '充值中心',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-12-02/68aefda33f6afac045997edd25a3844e.png',
      link: ''
    },
    {
      title: '每日好店',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-01-20/d36b7af30da354cb2c8ad4ea7bd819cd.png',
      link: ''
    },
    {
      title: '现金签到',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-08-01/f13e2dff54d604518a1db4facd89d300.png',
      link: ''
    },
    {
      title: '金猪赚大钱',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png',
      link: ''
    },
    {
      title: '电器城',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-26/ee327a5ee7fb7ff76a98cf71be967a20.png',
      link: ''
    },
    {
      title: '爱逛街',
      icon:
        'http://t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png',
      link: ''
    },
    {
      title: '砍价免费拿',
      icon:
        'http://t00img.yangkeduo.com/goods/images/2018-11-14/4ad66f8d7d28d6237a9f25b9a6d19f3e.png',
      link: ''
    },
    {
      title: '帮帮免费团',
      icon:
        'http://t11img.yangkeduo.com/images/2018-04-28/5cfc9925dac860135143921e0f687a7d.png',
      link: ''
    }
  ];

  products: Product[] = [
    {
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
      title: '心相印抽纸批发300张茶香整箱实惠家用18包餐巾卫生纸家庭装纸巾',
      imageUrl:
        'https://t11img.yangkeduo.com/images/2018-04-14/040d508d3f70610bb14d542a24ab806d.jpeg@750w_1l_50Q.src',
      tags: ['极速退款', '满54返3'],
      price: 39.8,
      priceDesc: '已拼2032件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    },
    {
      title: '【水滴屏】vivo X23幻彩版水滴屏屏幕指纹AI双摄游戏手机',
      imageUrl:
        'http://t00img.yangkeduo.com/goods/images/2019-02-14/d4ad74ccd869a1999e151ec61981aa28.jpeg',
      tags: ['全场包邮', '不中退款'],
      price: 39.8,
      priceDesc: '已拼804件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    },
    {
      title: '【华为官方正品】华为P20 全面屏 徕卡三摄AI摄影大师',
      imageUrl:
        'http://t00img.yangkeduo.com/goods/images/2018-09-22/abb7b6cf519ebd0e4c799a323ba730fd.jpeg',
      tags: ['全场包邮', '不中退款'],
      price: 4299,
      priceDesc: '已拼804件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    },
    {
      title: '【买二送一买三送二】冰箱收纳盒冷冻食品水果保鲜盒密封储物盒',
      imageUrl:
        'http://t00img.yangkeduo.com/goods/images/2018-08-14/8bfe9eb6f8c07b09af878c561554cd65.jpeg',
      tags: ['极速退款', '满29返2'],
      price: 9.8,
      priceDesc: '已拼7.5万件',
      buyerAvatars: ['/assets/avatars/avatar003.png']
    },
    {
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
  dataSets: TabContent[] = [];
  tabContent: TabContent | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dataSets = [
      {
        products: this.products,
        imageSliders: this.imageSliders,
        gridItems: this.gridItems,
        tabLink: 'hot'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'men'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad003.jpg',
          link: ''
        },
        tabLink: 'department'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad004.png',
          link: ''
        },
        tabLink: 'sports'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad003.jpg',
          link: ''
        },
        tabLink: 'mobile'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'textile'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'food'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'appliance'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'shoes'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'cars'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'fruits'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'computers'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'underwears'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'home'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'baby'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'makeup'
      },
      {
        products: getShuffledArr(this.products),
        ad: {
          imageUrl: 'assets/ads/ad002.gif',
          link: ''
        },
        tabLink: 'furnitures'
      }
    ];
    this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )
      .subscribe(tabLink => {
        const links = this.dataSets.filter(ds => ds.tabLink === tabLink);
        if (links.length > 0) {
          this.tabContent = links[0];
        } else {
          this.tabContent = null;
        }
      });
  }
}
