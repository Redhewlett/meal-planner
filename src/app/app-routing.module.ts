import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { PlanWeekComponent } from './components/plan-week/plan-week.component';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'addMeal', component: AddMealComponent },
  { path: 'planWeek', component: PlanWeekComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
