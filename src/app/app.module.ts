import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  GridComponent,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  FooterComponent,
  ProductCardComponent,
  TagDirective,
  AvatarDirective
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent,
    GridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    FooterComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
