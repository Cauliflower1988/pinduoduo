import {
  Component,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import {
  DialogService,
  ProductSpecDialogComponent,
  ProductVariant
} from 'src/app/shared';
import { OrderService } from '../../services';

@Component({
  selector: 'app-product-detail-container',
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailContainerComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;
  constructor(
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );
    this.variants$ = productId$.pipe(
      switchMap(productId =>
        this.orderService.getProductVariantsByProductId(productId)
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }

  handleDirectBuy(variants: ProductVariant[]) {}

  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;
    // 传入 Output，EventEmitter 其实就是一个 Subject
    const formSubmitted = new EventEmitter();
    this.subs.push(
      formSubmitted.subscribe(ev => {
        this.orderService.saveItem(ev.spec, ev.count);
        this.router.navigate([`/orders/confirm`]);
      })
    );
    const selected = new EventEmitter<number>();
    this.subs.push(
      selected.subscribe(idx => {
        console.log(idx);
        this.selectedIndex = idx;
      })
    );
    this.dialogService.open(ProductSpecDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: { specs: variants, selectedIndex: this.selectedIndex },
      outputs: { formSubmitted, selected },
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }
}
