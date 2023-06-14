import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { PlanMealService } from 'src/app/services/plan-meal.service';
import { WeekService } from 'src/app/services/week.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent {
  public year = new Date().getFullYear();
  public moved = '';

  constructor(
    public mealService: MealService,
    public weekService: WeekService,
    public planMealService: PlanMealService
  ) {}

  animate(direction: string) {
    this.moved = direction;
    this.weekService.changeWeek(direction);
    // after animation is done, remove the class
    const timeout = setTimeout(() => {
      this.moved = '';
      clearTimeout(timeout);
    }, 500);
  }
}
