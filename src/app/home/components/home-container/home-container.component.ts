import { Component, OnInit } from '@angular/core';
import { TabItem, ImageSlider, GridItem, Product } from 'src/app/shared';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  tabs: TabItem[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ];
  imageSliders: ImageSlider[] = [
    {
      imgUrl:
        'https://media.istockphoto.com/photos/morning-jogging-picture-id497687118',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/listening-the-music-picture-id508949258',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/pretty-young-teenage-girl-relaxing-on-a-grass-picture-id521982322',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/beautiful-women-working-out-in-gym-picture-id623680490',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/jogging-with-my-best-friend-picture-id850045040',
      link: '',
      caption: ''
    }
  ];
  gridItems: GridItem[] = [
    {
      title: '限时秒杀',
      icon: '/assets/icons/countdown.png',
      link: ''
    },
    {
      title: '断码清仓',
      icon: '/assets/icons/outlet.png',
      link: ''
    },
    {
      title: '品牌馆',
      icon: '/assets/icons/brand.png',
      link: ''
    },
    {
      title: '多多果园',
      icon: '/assets/icons/vegetables.png',
      link: ''
    },
    {
      title: '9块9特卖',
      icon: '/assets/icons/onsale.png',
      link: ''
    },
    {
      title: '助力享免单',
      icon: '/assets/icons/helpfree.png',
      link: ''
    },
    {
      title: '天天领现金',
      icon: '/assets/icons/cash.png',
      link: ''
    },
    {
      title: '1分抽大奖',
      icon: '/assets/icons/lottery.png',
      link: ''
    },
    {
      title: '充值中心',
      icon: '/assets/icons/mobilebill.png',
      link: ''
    },
    {
      title: '每日好店',
      icon: '/assets/icons/mall.png',
      link: ''
    },
    {
      title: '现金签到',
      icon: '/assets/icons/checkin.png',
      link: ''
    },
    {
      title: '金猪赚大钱',
      icon: '/assets/icons/coins.png',
      link: ''
    },
    {
      title: '电器城',
      icon: '/assets/icons/electronics.png',
      link: ''
    },
    {
      title: '爱逛街',
      icon: '/assets/icons/shopping.png',
      link: ''
    },
    {
      title: '砍价免费拿',
      icon: '/assets/icons/free.png',
      link: ''
    },
    {
      title: '帮帮免费团',
      icon: '/assets/icons/group.png',
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
    }
  ];
  constructor() {}

  ngOnInit() {}

  handleTabSelected(tabItem: TabItem) {
    console.log(tabItem);
  }
}
