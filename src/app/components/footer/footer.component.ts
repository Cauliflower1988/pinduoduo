import { Component, OnInit } from '@angular/core';

interface TabItem {
  title: string;
  icon: string;
  link: string;
  selectedIcon: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  tabItems: TabItem[] = [
    {
      title: '首页',
      icon: '/assets/tabs/home.png',
      link: '',
      selectedIcon: '/assets/tabs/home_selected.png'
    },
    {
      title: '推荐',
      icon: '/assets/tabs/recommend.png',
      link: '',
      selectedIcon: '/assets/tabs/recommend_selected.png'
    },
    {
      title: '分类',
      icon: '/assets/tabs/category.png',
      link: '',
      selectedIcon: '/assets/tabs/category_selected.png'
    },
    {
      title: '聊天',
      icon: '/assets/tabs/chat.png',
      link: '',
      selectedIcon: '/assets/tabs/chat_selected.png'
    },
    {
      title: '个人中心',
      icon: '/assets/tabs/my.png',
      link: '',
      selectedIcon: '/assets/tabs/my_selected.png'
    }
  ];
  selectedIndex = 0;
  constructor() {}

  ngOnInit() {}

  toggleSelected(idx: number) {
    this.selectedIndex = idx;
  }
}
