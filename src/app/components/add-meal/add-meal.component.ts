import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Meal } from 'src/app/interfaces/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss'],
})
export class AddMealComponent {
  public mealForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    ingredients: ['', [Validators.required, Validators.minLength(10)]],
    difficulty: [1, Validators.required],
    tags: ['', [Validators.required, Validators.minLength(10)]],
    image: [''],
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

    this.mealService.addMeal(newMeal).subscribe((meal) => {
      this.mealService.getMeals().subscribe();
    });

    this.mealForm.reset();
  }
}
