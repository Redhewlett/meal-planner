import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../interfaces/meal';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  public meals: Meal[] | null = null;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  public openDialog(id: any): void {
    const dialogRef = this.dialog.open(ConfirmComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {
        this.deleteMeal(id);
      }
    });
  }

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

  public deleteMeal(id: number) {
    this.http.delete<Meal>(`http://localhost:3000/meals/${id}`).subscribe();
    this.getMeals().subscribe();
  }
}
