import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../interfaces/meal';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  public meals: Meal[] | null = null;

  constructor(private http: HttpClient) {}

  public getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>('http://localhost:3000/meals').pipe(
      map((data) => {
        this.meals = data;
        return data;
      })
    );
  }

  public addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>('http://localhost:3000/meals', meal);
  }
}
