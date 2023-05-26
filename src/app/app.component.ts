import { Component } from '@angular/core';
import { MealService } from './services/meal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public mealService: MealService) {
    mealService.getMeals().subscribe();
  }
}
