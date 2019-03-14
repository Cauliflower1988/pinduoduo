import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { HomeModule } from './home';
import { AppComponent } from './app.component';
import { CategoryModule } from './category';
import { RecommendModule } from './recommend';
import { ChatModule } from './chat';
import { MyModule } from './my';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
