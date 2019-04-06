import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { arrayMin, arrayMax } from 'src/app/utils';
import { DialogService } from '../dialog';
import { Product } from '../product-card/product-card.component';
import { Banner } from '../image-slider';

export interface ProductVariant {
  id: number;
  product: Product;
  name: string;
  price: number;
  listPrice: number;
  productVariantImages: Banner[];
}

@Component({
  selector: 'app-product-spec-dialog',
  templateUrl: './product-spec-dialog.component.html',
  styleUrls: ['./product-spec-dialog.component.css']
})
export class ProductSpecDialogComponent implements OnInit {
  @Input() specs: ProductVariant[] = [];
  // 注意这个 EventEmitter 在很多包里面都有，导入 @angular/core 这个 package 中的
  @Output() formSubmitted = new EventEmitter();
  @Output() selected = new EventEmitter<number>();
  @Input() selectedSpecIndex = -1;
  count = 1;
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  get priceRange() {
    if (this.specs.length === 0) {
      return '';
    }
    const prices = this.specs.map(spec => spec.price);
    const min = arrayMin(prices);
    const max = arrayMax(prices);
    return this.selectedSpecIndex >= 0
      ? `${this.specs[this.selectedSpecIndex].price}`
      : max === min
      ? `${max}`
      : max > min
      ? `${min}-${max}`
      : `${min}`;
  }

  get productImage() {
    return this.selectedSpecIndex < 0
      ? this.specs[0].product.imageUrl
      : this.specs[this.selectedSpecIndex].product.imageUrl;
  }

  get selectedSpecName() {
    return this.selectedSpecIndex < 0
      ? ''
      : this.specs[this.selectedSpecIndex].name;
  }

  handleSelection(idx: number) {
    this.selectedSpecIndex = idx;
    this.selected.emit(this.selectedSpecIndex);
  }

  handleConfirm() {
    if (this.selectedSpecIndex < 0 || this.count === 0) {
      return;
    }
    this.formSubmitted.emit({
      spec: this.specs[this.selectedSpecIndex],
      count: this.count
    });
    this.dialogService.close();
  }

  handleAmountChange(count: number) {
    this.count = count;
  }
}
