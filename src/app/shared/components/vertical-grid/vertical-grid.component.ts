import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-grid',
  templateUrl: './vertical-grid.component.html',
  styleUrls: ['./vertical-grid.component.css']
})
export class VerticalGridComponent implements OnInit {
  @Input() itemWidth = 4;
  @Input() itemHeight = 4;
  constructor() {}

  ngOnInit() {}
  /* 响应式布局网格，auto-fill 用来在空间足够时尽可能的填充该位置，minmax 是最小和最大的宽度 */
  get templateRows() {
    return `repeat(auto-fill, minmax(${this.itemHeight}rem, 1fr))`;
  }
  /**
   * CSS Grid Layout 的模版列表达式
   */
  get templateColumns() {
    return `repeat(auto-fit, minmax(${this.itemWidth}rem, 1fr))`;
  }
}
