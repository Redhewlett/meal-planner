import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlannedMeal } from '../interfaces/planned-meal';
import { WeekService } from './week.service';

@Injectable({
  providedIn: 'root',
})
export class PlanMealService {
  constructor(public httpClient: HttpClient, public weekService: WeekService) {}

  public planLunch(day: Date) {
    // generate day using the passed day and data from the week service
    console.log({
      id: Date.now() + Math.random() / Math.PI,
      date: day,
      lunch: 1685818005173,
      dinner: null,
    });
    // post the meal to the backend
    // this.httpClient
    //   .post<PlannedMeal>('http://localhost:3000/plannedMeals', {
    //     id: Date.now() + Math.random() / Math.PI,
    //     date: d,
    //     lunch: 1685818005173,
    //     dinner: null,
    //   })
    //   .subscribe();
  }
}
