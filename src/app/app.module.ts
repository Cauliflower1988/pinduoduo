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
  GridItemTitleDirective
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent,
    GridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
