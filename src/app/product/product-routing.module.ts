import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ProductDetailContainerComponent,
  ConfirmOrderComponent
} from './components';
import { config } from 'rxjs';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: ':productId',
        component: ProductDetailContainerComponent
      }
    ]
  },
  {
    path: 'orders',
    children: [
      {
        path: 'confirm',
        component: ConfirmOrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
