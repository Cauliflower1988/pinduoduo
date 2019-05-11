import {
  Component,
  Directive,
  OnInit,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';

export interface GridItem {
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  @Input() rows = 2;
  @Input() cols = 8;
  @Input() displayCols = 5;
  @Input() itemWidth = '4rem';
  sliderMargin = '0';
  constructor() {}

  ngOnInit() {}
  /**
   * get/set 是 TypeScript 中控制属性访问的方式。
   * 其中 get 也可以实现一个需要动态计算的属性
   */
  get scrollable() {
    return this.cols > this.displayCols;
  }
  /* 响应式布局网格，auto-fill 用来在空间足够时尽可能的填充该位置，minmax 是最小和最大的宽度 */
  get templateRows() {
    return `minmax(${this.itemWidth}, auto)`;
  }
  /**
   * CSS Grid Layout 的模版列表达式
   */
  get templateColumns() {
    return `repeat(${this.cols}, 1fr)`;
  }
  /**
   * 处理滚动事件，更新 sliderMargin 以达成滚动指示器位置的刷新
   * @param ev 滚动事件
   */
  handleScroll(ev) {
    if (!this.scrollable) {
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    this.sliderMargin = `0 ${(100 * ev.target.scrollLeft) /
      ev.target.scrollWidth}%`;
  }
}
/**
 * 指令可以理解为没有模版的组件，它需要一个宿主元素。
 * 推荐使用方括号 [] 指定 Selector，虽然这个不是必须的。
 */
@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {
  @Input() appGridItem = true;
  constructor(private elr: ElementRef, private renderer: Renderer2) {
    this.setStyle('display', 'grid');
    // 给出网格的模版，默认情况下是一个堆叠的布局，给出一个网格的两个构成部分的命名: image 和 title
    this.setStyle('grid-template-areas', `'image' 'title'`);
    this.setStyle('place-items', 'center');
    this.setStyle('width', '4.3rem');
  }

  private setStyle(styleName: string, styleValue: string | number) {
    this.renderer.setStyle(this.elr.nativeElement, styleName, styleValue);
  }
}

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @Input() appGridItemImage = '2rem';
  constructor(private elr: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // 声明自己占据模版中的 image 区块
    this.setStyle('grid-area', 'image');
    this.setStyle('width', this.appGridItemImage);
    this.setStyle('height', this.appGridItemImage);
    this.setStyle('object-fit', 'cover');
  }

  private setStyle(styleName: string, styleValue: string | number) {
    this.renderer.setStyle(this.elr.nativeElement, styleName, styleValue);
  }
}

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {
  @Input() appGridItemTitle = '0.5rem';
  constructor(private elr: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // 声明自己占据模版中的 title 区块
    this.setStyle('grid-area', 'title');
    this.setStyle('font-size', this.appGridItemTitle);
  }

  private setStyle(styleName: string, styleValue: string | number) {
    this.renderer.setStyle(this.elr.nativeElement, styleName, styleValue);
  }
}
