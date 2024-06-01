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
  { path: 'addMeal', component: AddMealComponent },
  { path: 'planWeek', component: PlanWeekComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
