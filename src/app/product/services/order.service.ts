import { Injectable } from '@angular/core';
import { ProductVariant } from 'src/app/shared';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrderService {
  private storedProductItem = new BehaviorSubject<object | null>(null);
  constructor(private http: HttpClient) {
    const item = localStorage.getItem('latestItem');
    if (item) {
      this.storedProductItem.next(
        JSON.parse(localStorage.getItem('latestItem'))
      );
    }
  }
  createOrder() {}
  getOrder(orderId: number) {}
  saveItem(spec: ProductVariant, count: number) {
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
  getProductVariantsByProductId(productId: string) {
    return this.http.get<ProductVariant[]>(
      `${environment.baseUrl}/productVariants`,
      {
        params: {
          _expand: 'product',
          _embed: 'productVariantImages',
          productId
        }
      }
    );
  }
}
