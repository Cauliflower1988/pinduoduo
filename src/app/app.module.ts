import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import {
  SharedModule,
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
import { ProductModule } from './product';

import localeZh from '@angular/common/locales/zh-Hans';

registerLocaleData(localeZh, 'zh');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    CategoryModule,
    RecommendModule,
    ChatModule,
    MyModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [
    DomService,
    DialogService,
    { provide: LOCALE_ID, useValue: 'zh-Hans' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProductSpecDialogComponent]
})
export class AppModule {}
