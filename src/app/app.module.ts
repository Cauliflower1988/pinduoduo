import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import {
  SharedModule,
  DialogComponent,
  DialogService,
  ProductSpecDialogComponent
} from './shared';
import { HomeModule } from './home';
import { AppComponent } from './app.component';
import { CategoryModule } from './category';
import { RecommendModule } from './recommend';
import { ChatModule } from './chat';
import { MyModule } from './my';
import { DomService } from './shared/components/dialog/dom.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    CategoryModule,
    RecommendModule,
    ChatModule,
    MyModule,
    AppRoutingModule
  ],
  providers: [DomService, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [ProductSpecDialogComponent]
})
export class AppModule {}
