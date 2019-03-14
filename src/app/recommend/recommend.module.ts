import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { RecommendRoutingModule } from './recommend-routing.module';
import { RecommendContainerComponent } from './components';

@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [SharedModule, RecommendRoutingModule]
})
export class RecommendModule {}
