import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  exports: [HomeContainerComponent],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
