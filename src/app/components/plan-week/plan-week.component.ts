import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { WeekService } from 'src/app/services/week.service';

@Component({
  selector: 'app-plan-week',
  templateUrl: './plan-week.component.html',
  styleUrls: ['./plan-week.component.scss'],
})
export class PlanWeekComponent {
  constructor(
    public weekService: WeekService,
    public mealService: MealService
  ) {}
}
