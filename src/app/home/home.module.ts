import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeContainerComponent } from './components';

@NgModule({
  declarations: [HomeContainerComponent],
  exports: [HomeContainerComponent],
  imports: [SharedModule]
})
export class HomeModule {}
