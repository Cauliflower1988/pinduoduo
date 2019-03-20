import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared';
import {
  ProductDetailContainerComponent,
  GroupShortListComponent,
  GroupItemComponent
} from './components';

@NgModule({
  declarations: [
    ProductDetailContainerComponent,
    GroupShortListComponent,
    GroupItemComponent
  ],
  imports: [SharedModule, ProductRoutingModule]
})
export class ProductModule {}
