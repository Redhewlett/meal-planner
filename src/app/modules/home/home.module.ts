import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const homeRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    homeRouting
  ]
})
export class HomeModule { }
