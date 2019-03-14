import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { MyRoutingModule } from './my-routing.module';
import { MyContainerComponent } from './components';

@NgModule({
  declarations: [MyContainerComponent],
  imports: [SharedModule, MyRoutingModule]
})
export class MyModule {}
