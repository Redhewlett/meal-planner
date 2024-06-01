import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Meal, MealForm } from 'src/app/interfaces/meal';
import { MealService } from 'src/app/services/meal.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { ButtonComponent } from '../ui/button/button.component';
@Component({
  selector: 'app-add-meal',
  standalone: true,
  imports: [
    MatFormField,
    ButtonComponent,
    MatLabel,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
  ],
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
})
export class AddMealComponent {
  public mealForm: FormGroup<MealForm> =
    this.formBuilder.nonNullable.group<MealForm>({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ingredients: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      difficulty: new FormControl(1, [Validators.required]),
      tags: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      image: new FormControl(''),
    });

  constructor(
    private formBuilder: FormBuilder,
    private mealService: MealService
  ) {}

  public onSubmit(): void {
    const name = this.mealForm.value.name?.trim();
    const ingredients = this.mealForm.value.ingredients?.split(',');
    const difficulty = this.mealForm.value.difficulty;
    const tags = this.mealForm.value.tags?.split(',');
    const image = this.mealForm.value.image?.trim();

    if (!name || !ingredients || !difficulty || !tags) {
      return;
    }

    const newMeal: Meal = {
      id: Date.now(),
      name,
      ingredients: ingredients.map((ingredient) => ingredient.trim()),
      difficulty,
      tags: tags.map((tag) => tag.trim()),
      image: image,
    };
    // optimise this later
    this.mealService.addMeal(newMeal).subscribe(() => {
      this.mealService.getMeals().subscribe();
    });

    this.mealForm.reset();
    // for each control, set untouched, pristine, valid
    Object.keys(this.mealForm.controls).forEach((key) => {
      this.mealForm.get(key)?.setErrors(null);
      this.mealForm.get(key)?.markAsPristine();
      this.mealForm.get(key)?.markAsUntouched();
    });
  }
}
