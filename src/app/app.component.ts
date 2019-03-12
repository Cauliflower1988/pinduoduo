import { Component } from '@angular/core';
import { TabItem, ImageSlider, GridItem } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  handleTabSelected(tabItem: TabItem) {
    console.log(tabItem);
  }
}
