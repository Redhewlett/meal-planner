import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { WeekService } from 'src/app/services/week.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent {
  public year = new Date().getFullYear();
  public today = new Date().getDate();
  public moved = '';

  constructor(
    public mealService: MealService,
    public weekService: WeekService
  ) {}

  animate(direction: string) {
    // check how many weeks are in the month
    const weeksInMonth = this.weekService.month.length - 1;
    // check if current week is the first week
    if (this.weekService.weekNumber === 0 && direction === 'previous') return;
    // check if current week is the last week
    if (this.weekService.weekNumber === weeksInMonth && direction === 'next')
      return;
    this.moved = direction;
    this.weekService.changeWeek(direction);
    // after animation is done, remove the class
    const timeout = setTimeout(() => {
      this.moved = '';
      clearTimeout(timeout);
    }, 500);
  }
}
