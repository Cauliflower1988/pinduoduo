import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * 定义菜单数据类型
 * export 是导出这个类型，以便外部可以使用
 * 使用 F2 进行重命名
 */
export interface TabItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  /**
   * 定义一个成员变量，用于标识当前选中的菜单项在数组中的索引
   */
  selectedIndex = 0;
  /**
   * 声明类型的好处是，可以及时的提示错误，可以试着改变下面的 title 或 link 的值类型
   * 看 VS Code 中的提示
   */
  @Input() tabItems: TabItem[] = [];
  @Input() backgroundColor = '#cc483a';
  @Input() titleColor = '#f5bd96';
  @Input() titleActiveColor = '#fff';
  @Input() indicatorColor = '#fff';
  @Output() tabSelected = new EventEmitter<TabItem>();
  constructor() {}

  ngOnInit() {}

  selectTab(idx: number) {
    this.selectedIndex = idx;
    this.tabSelected.emit(this.tabItems[this.selectedIndex]);
  }
}
