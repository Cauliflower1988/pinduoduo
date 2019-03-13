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
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() rows = 1;
  @Input() cols = 1;
  @Input() displayCols = 1;
  @Input() displayScrollIndicator = false;
  sliderMargin = '0';
  constructor() {}

  ngOnInit() {}

  /**
   * 计算容器最大宽度：总列数 / 可见显示列数 的百分数
   */
  get maxWidth() {
    return `${(this.cols * 100) / this.displayCols}%`;
  }
  /**
   * CSS Grid Layout 的模版列表达式
   */
  get templateColumns() {
    return `repeat(${this.cols}, ${100 / this.displayCols}%)`;
  }
  /**
   * 处理滚动事件，更新 sliderMargin 以达成滚动指示器位置的刷新
   * @param ev 滚动事件
   */
  handleScroll(ev) {
    if (!this.displayScrollIndicator) {
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    this.sliderMargin = `0 ${(50 * ev.target.scrollLeft) /
      ev.target.scrollWidth /
      (1 - this.displayCols / this.cols)}%`;
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
