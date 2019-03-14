import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  FooterComponent,
  ProductCardComponent,
  TagDirective,
  AvatarDirective,
  VerticalGridComponent
} from './components';

const COMPONENTS = [
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  FooterComponent,
  ProductCardComponent,
  TagDirective,
  AvatarDirective,
  VerticalGridComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
  providers: []
})
export class SharedModule {}
