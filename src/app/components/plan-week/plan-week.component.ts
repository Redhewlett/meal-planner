import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-plan-week',
  templateUrl: './plan-week.component.html',
  styleUrls: ['./plan-week.component.scss'],
})
export class PlanWeekComponent {
  constructor(
    public mealService: MealService
  ) {}
}
