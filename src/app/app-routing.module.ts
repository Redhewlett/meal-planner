import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { PlanWeekComponent } from './components/plan-week/plan-week.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addMeal', component: AddMealComponent },
  { path: 'planWeek', component: PlanWeekComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
