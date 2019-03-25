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
  CloseDialogDirective,
  ProductAmountComponent
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
  CloseDialogDirective,
  ProductAmountComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: [...COMPONENTS, CommonModule]
})
export class SharedModule {}
