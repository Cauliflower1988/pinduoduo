import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared';
import {
  ProductDetailContainerComponent,
  GroupShortListComponent,
  GroupItemComponent,
  ConfirmOrderComponent
} from './components';
import { OrderService } from './services';

@NgModule({
  declarations: [
    ProductDetailContainerComponent,
    GroupShortListComponent,
    GroupItemComponent,
    ConfirmOrderComponent
  ],
  imports: [SharedModule, ProductRoutingModule],
  providers: [OrderService]
})
export class ProductModule {}
