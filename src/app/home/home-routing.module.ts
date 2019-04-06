import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  ChangeDetectionComponent
} from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent
      }
    ]
  },
  {
    path: 'changes',
    component: ChangeDetectionComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
