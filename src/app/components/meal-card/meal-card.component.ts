import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent {
  @Input() meal: Meal | null = null;
  constructor() {}

  public range(n: number): number[] {
    return [...Array(n).keys()];
  }
}
