import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
})
export class AddMealComponent {
  constructor(private _formBuilder: FormBuilder) {}
}
