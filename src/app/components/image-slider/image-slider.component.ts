import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() height = '200px';
  @Input() intervalBySeconds = 2;
  /**
   * 获得页面元素的引用，这里由于是一个原生 HTML 元素 -- div，所以声明类型为 ElementRef
   * 如果获得自定义组件或指令的引用，可以直接使用它们自己的类型
   */
  @ViewChild('imageSilder') imageSlider: ElementRef;
  selectedIndex = 0;
  intervalId;
  /**
   * Angular 中常常使用依赖注入获得依赖对象的实例
   * Angular 中一般使用构造函数进行依赖注入
   * @param renderer Angualr 中提供自定义 DOM 渲染的对象
   */
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}
  /**
   * 生命周期钩子函数，在视图初始化后调用。
   * 如果需要对页面 DOM 进行操作，在这个函数中处理是比较合适的。
   * 这个例子中我们需要调用 selected 函数，而其中有 imageSlider 的操作，
   * 所以在此处理。如果不涉及 DOM，可以在 ngOnInit 中处理。
   */
  ngAfterViewInit(): void {
    // 自动轮播
    let count = 0;
    this.intervalId = setInterval(() => {
      this.selected(this.getIndex(count++));
    }, this.intervalBySeconds * 1000);
  }
  ngOnDestroy(): void {
    // 记得要进行清理，否则会有内存泄漏
    clearInterval(this.intervalId);
  }

  selected(idx: number) {
    this.selectedIndex = idx;
    // 推荐使用 Renderer2 进行 DOM 操作
    this.renderer.setProperty(
      this.imageSlider.nativeElement,
      'scrollLeft',
      (idx * this.imageSlider.nativeElement.scrollWidth) / 5
    );
  }
  /**
   * 处理数组越界情况，将负数和超出范围的索引转化成合法索引
   * @param index 给定索引
   */
  getIndex(index: number) {
    return index >= 0
      ? index % this.sliders.length
      : this.sliders.length - (Math.abs(index) % this.sliders.length);
  }
  /**
   * 对于手动进行的滚动，利用滚动距离和全部长度进行计算，确定当前应该在第几个元素
   * @param ev 滚动事件
   */
  handleScroll(ev) {
    const idx = Math.round(ev.target.scrollLeft / (ev.target.scrollWidth / 5));
    this.selectedIndex = idx;
  }
}
