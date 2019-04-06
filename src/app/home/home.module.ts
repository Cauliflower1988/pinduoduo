import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  ChangeDetectionComponent,
  ChildComponent
} from './components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    ChangeDetectionComponent,
    ChildComponent
  ],
  exports: [HomeContainerComponent],
  imports: [SharedModule, HomeRoutingModule],
  providers: [HomeService]
})
export class HomeModule {}
