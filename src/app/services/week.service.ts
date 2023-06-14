import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlannedDay } from '../interfaces/planned-day';
import { map } from 'rxjs';

type settings = {
  currentMonth: string;
};

@Injectable({
  providedIn: 'root',
})
export class WeekService {
  public currentMonth = new Date().toLocaleString('en-EN', { month: 'long' });
  public month: PlannedDay[][] = [];
  public weekNumber = this.getCurrentWeek();

  constructor(public httpClient: HttpClient) {
    this.checkMonth().subscribe();
    this.getMonth().subscribe();
  }

  private checkMonth() {
    return this.httpClient.get<settings>('http://localhost:3000/settings').pipe(
      map((data) => {
        const isCurrentMonth =
          data.currentMonth.toLocaleLowerCase() ===
          this.currentMonth.toLocaleLowerCase();
        if (!isCurrentMonth) {
          this.setMonthName(this.currentMonth).subscribe();
          // do bunch of stuff after month change
        }
      })
    );
  }

  private setMonthName(month: string) {
    return this.httpClient.patch<settings>('http://localhost:3000/settings', {
      currentMonth: month,
    });
  }

  public getMonth() {
    return this.httpClient.get('http://localhost:3000/month').pipe(
      map((data: any) => {
        // check if data is empty (first launch of a user)
        if (data.length === 0) {
          // generate month
          const tempMonth = this.generateMonth(this.currentMonth);
          // post month to db
          this.postMonth(tempMonth).subscribe();
          // set month
          this.month = tempMonth;
          console.log('month generated');
        } else {
          console.log('already exists');
          this.month = data[0];
        }
        return data;
      })
    );
  }

  private generateMonth(month: string) {
    const year = new Date().getFullYear();
    const monthStart = new Date(`01 ${month} ${year}`);

    const monthEnd = new Date(
      monthStart.getFullYear(),
      monthStart.getMonth() + 1,
      0
    );

    const daysInMonth = monthEnd.getDate();

    const weeksArray = [];
    let weekArray: PlannedDay[] = [];
    let weekCounter = 0;
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(`${i} ${month} ${year}`)
        .toLocaleString('en-EN', {
          weekday: 'long',
          day: 'numeric',
        })
        .split(' ');
      //
      const dayObject: PlannedDay = {
        // use timestamp as id
        id: new Date(`${i} ${month} ${year}`).getTime(),
        date: day[0],
        weekDay: day[1],
        lunch: null,
        dinner: null,
      };
      if (day[1] === 'Monday' && i !== 1) {
        weeksArray.push(weekArray);
        weekArray = [];
        weekCounter++;
      }
      weekArray.push(dayObject);
    }
    weeksArray.push(weekArray);
    return weeksArray;
  }

  // get the current week number in the month array
  public getCurrentWeek() {
    const today = new Date().getDate();
    const currentWeek = Math.ceil(today / 7);
    // minus 1 because array starts at 0
    return currentWeek;
  }

  //post to month
  public postMonth(month: PlannedDay[][]) {
    return this.httpClient.post('http://localhost:3000/month', month);
  }

  public changeWeek(direction: string) {
    // change week number
    if (direction === 'next') {
      this.weekNumber++;
    }
    if (direction === 'previous') {
      this.weekNumber--;
    }
  }
}
