import {
  Component,
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  Input
} from '@angular/core';

export interface Product {
  imageUrl: string;
  title: string;
  tags: string[];
  price: number;
  priceDesc: string;
  buyerAvatars: string[];
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit() {}
}

@Directive({
  selector: '[appTag]'
})
export class TagDirective implements OnInit {
  @Input() appTagBackgroundColor = '#faefe3';
  @Input() appTagColor = '#ca516a';
  @Input() appTagSize = '0.8rem';
  constructor(private elf: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.elf.nativeElement,
      'background-color',
      this.appTagBackgroundColor
    );
    this.renderer.setStyle(this.elf.nativeElement, 'color', this.appTagColor);
    this.renderer.setStyle(this.elf.nativeElement, 'margin', '0 0.4rem');
    this.renderer.setStyle(this.elf.nativeElement, 'padding', '0 0.3rem');
    this.renderer.setStyle(
      this.elf.nativeElement,
      'font-size',
      this.appTagSize
    );
  }
}

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnInit {
  @Input() appAvatarSize = '1.5rem';
  constructor(private elf: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.elf.nativeElement, 'vertical-align', 'top');
    this.renderer.setStyle(this.elf.nativeElement, 'width', this.appAvatarSize);
    this.renderer.setStyle(
      this.elf.nativeElement,
      'height',
      this.appAvatarSize
    );
    this.renderer.setStyle(this.elf.nativeElement, 'border-radius', '50%');
  }
}
