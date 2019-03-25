import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { arrayMin, arrayMax } from 'src/app/utils';
import { DialogService } from '../dialog';

export interface ProductSpec {
  id: number;
  productId: number;
  name: string;
  price: number;
  productImageUrl: string;
}

@Component({
  selector: 'app-product-spec-dialog',
  templateUrl: './product-spec-dialog.component.html',
  styleUrls: ['./product-spec-dialog.component.css']
})
export class ProductSpecDialogComponent implements OnInit {
  @Input() specs: ProductSpec[] = [];
  // 注意这个 EventEmitter 在很多包里面都有，导入 @angular/core 这个 package 中的
  @Output() specSelected = new EventEmitter();
  selectedSpecIndex = -1;
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
      ? this.specs[0].productImageUrl
      : this.specs[this.selectedSpecIndex].productImageUrl;
  }

  get selectedSpecName() {
    return this.selectedSpecIndex < 0
      ? ''
      : this.specs[this.selectedSpecIndex].name;
  }

  handleSelection(idx: number) {
    this.selectedSpecIndex = idx;
  }

  handleIncrease() {
    this.count++;
  }

  handleDecrease() {
    if (this.count === 0) {
      return;
    }
    this.count--;
  }

  handleConfirm() {
    if (this.selectedSpecIndex < 0 || this.count === 0) {
      return;
    }
    this.specSelected.emit({
      spec: this.specs[this.selectedSpecIndex],
      count: this.count
    });
    this.dialogService.close();
  }
}
