import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';
import { MealService } from 'src/app/services/meal.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent {
  @Input() meal: Meal | null = null;

  constructor(public mealService: MealService) {}

  public range(n: number): number[] {
    return [...Array(n).keys()];
  }
}
