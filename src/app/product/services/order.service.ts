import { Injectable } from '@angular/core';
import { ProductSpec } from 'src/app/shared';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OrderService {
  private storedProductItem = new BehaviorSubject<object | null>(null);
  constructor() {
    const item = localStorage.getItem('latestItem');
    if (item) {
      this.storedProductItem.next(
        JSON.parse(localStorage.getItem('latestItem'))
      );
    }
  }
  createOrder() {}
  getOrder(orderId: number) {}
  saveItem(spec: ProductSpec, count: number) {
    this.storedProductItem.next({ spec, count });
    localStorage.setItem('latestItem', JSON.stringify({ spec, count }));
  }
  getItem() {
    return this.storedProductItem.asObservable();
  }
  clear() {
    this.storedProductItem.next(null);
    localStorage.clear();
  }
}
