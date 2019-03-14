import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatContainerComponent } from './components';

@NgModule({
  declarations: [ChatContainerComponent],
  imports: [SharedModule, ChatRoutingModule]
})
export class ChatModule {}
