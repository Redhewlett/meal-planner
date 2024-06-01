import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { PlanWeekComponent } from './components/plan-week/plan-week.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'add-meal', component: AddMealComponent },
  { path: 'plan-week', component: PlanWeekComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
