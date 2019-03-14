import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryContainerComponent } from './components';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [CategoryContainerComponent],
  imports: [SharedModule, CategoryRoutingModule]
})
export class CategoryModule {}
