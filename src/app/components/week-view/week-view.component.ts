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
  constructor(
    public mealService: MealService,
    public weekService: WeekService
  ) {}
}
