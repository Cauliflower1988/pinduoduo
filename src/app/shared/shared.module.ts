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
  VerticalGridComponent,
  ProductTileComponent,
  DialogComponent,
  ProductSpecDialogComponent,
  CloseDialogDirective
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
  ProductTileComponent,
  TagDirective,
  AvatarDirective,
  VerticalGridComponent,
  DialogComponent,
  ProductSpecDialogComponent,
  CloseDialogDirective
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: [...COMPONENTS, CommonModule]
})
export class SharedModule {}
