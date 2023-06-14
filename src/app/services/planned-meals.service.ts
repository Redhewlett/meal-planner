import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlannedMeal } from '../interfaces/planned-meal';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlannedMealsService {
  public plannedMeals: PlannedMeal[] = [];

  constructor(private httpClient: HttpClient) {}

  public getPlannedMeals() {
    return this.httpClient
      .get<PlannedMeal[]>('http://localhost:3000/plannedMeals')
      .pipe(
        map((plannedMeals: PlannedMeal[]) => {
          this.plannedMeals = plannedMeals;
          return plannedMeals;
        })
      );
  }
}
