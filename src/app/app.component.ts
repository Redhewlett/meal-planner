import { Component } from '@angular/common';
import { MealService } from './services/meal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public mealService: MealService,
  ) {
    this.mealService.getMeals().subscribe();
  }
}
