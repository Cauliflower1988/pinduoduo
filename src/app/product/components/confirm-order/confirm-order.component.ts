import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../services';
import { Observable, Subscription, Subject, merge, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductSpec } from 'src/app/shared';
import { Payment } from '../payment';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit, OnDestroy {
  constructor(private orderService: OrderService) {}
  item$: Observable<object | null>;
  subscription: Subscription;
  totalPrice: number;
  count = 0;
  /**
   * 下方定义的 RxJS 变量用于展示如何使用 Async Pipe，从而无需取消订阅
   */
  totalPrice$: Observable<number>;
  count$ = new Subject<number>();
  payments: Payment[] = [];
  ngOnInit() {
    this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat.png',
        desc: '50元以内可免密支付'
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png'
      }
    ];
    this.item$ = this.orderService.getItem();
    this.subscription = this.item$.subscribe(({ count }: { count: number }) => {
      this.count = count;
    });
    /**
     * 使用 Async Pipe 可以不用 unsubscribe
     * 下方这个 RxJS 比较复杂，可以慢慢体会，如果觉得难，其实使用 subscribe 完全没有任何问题，只是需要注意取消订阅即可
     */
    this.totalPrice$ = combineLatest(
      merge(
        this.count$,
        this.item$.pipe(
          map((item: { spec: ProductSpec; count: number }) => item.count)
        )
      ),
      this.item$.pipe(
        map((item: { spec: ProductSpec; count: number }) => item.spec.price)
      )
    ).pipe(map(([count, price]) => count * price));
  }
  /**
   * 如果使用 RxJS 的 subscribe，一定记得要销毁，否则会有内存泄漏
   */
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  handlePay() {}
  handleAmountChange(count: number) {
    this.count = count;
    // 使用 subject 作为“胶水”把传统编程和响应式编程粘合起来
    this.count$.next(count);
  }
}
