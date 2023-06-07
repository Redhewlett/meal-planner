import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlannedDay, WeekDay } from '../interfaces/planned-day';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeekService {
  public week: any[] | null = null;
  public weekPlan: PlannedDay[] | null = null;

  constructor(public httpClient: HttpClient) {
    this.setWeekCurrentWeek();
    console.log(this.week);
  }

  public getPlan(): Observable<PlannedDay[]> {
    return this.httpClient.get<PlannedDay[]>('http://localhost:3000/week').pipe(
      map((data) => {
        this.weekPlan = data;
        return data;
      })
    );
  }

  public setWeekCurrentWeek() {
    // get the current date
    const today = new Date();
    // generate this week days using the current date
    this.week = this.getWeekDays(today);
  }

  public getWeekDays(date: Date) {
    // get the day of the week
    const day = date.getDay();

    // get the first day of the week
    const firstDay = new Date(date.setDate(date.getDate() - day));

    // generate the week days from monday to sunday with dateNames and date numbers
    return this.range(7).map((n) => {
      const date = new Date(firstDay.setDate(firstDay.getDate() + 1));
      return {
        dateName: date.toLocaleDateString('en-US', { weekday: 'long' }),
        dateNumber: date.getDate(),
      };
    });
  }

  public range(n: number): number[] {
    return [...Array(n).keys()];
  }
}
