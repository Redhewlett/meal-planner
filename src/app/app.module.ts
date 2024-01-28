import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
// components
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { PlanWeekComponent } from './components/plan-week/plan-week.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { CalendarComponent } from './components/calendar/calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddMealComponent,
    PlanWeekComponent,
    MealCardComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDialogModule,
    CalendarComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
