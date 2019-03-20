import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared';
import { ProductDetailContainerComponent } from './components';

@NgModule({
  declarations: [ProductDetailContainerComponent],
  imports: [SharedModule, ProductRoutingModule]
})
export class ProductModule {}
