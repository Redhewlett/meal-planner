import { Component } from '@angular/core';
import { MealService } from './services/meal.service';
import { WeekService } from './services/week.service';
import { PlannedMealsService } from './services/planned-meals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public mealService: MealService,
    public weekService: WeekService,
    public plannedMealsService: PlannedMealsService
  ) {
    this.mealService.getMeals().subscribe();
    this.plannedMealsService.getPlannedMeals().subscribe();
  }
}
