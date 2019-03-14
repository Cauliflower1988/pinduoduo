import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeContainerComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContainerComponent],
  exports: [HomeContainerComponent],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
