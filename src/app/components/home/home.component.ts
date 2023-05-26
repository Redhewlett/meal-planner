import { Component } from '@angular/core';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public mealService: MealService) {}
}
