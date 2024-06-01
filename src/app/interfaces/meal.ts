import { FormControl } from "@angular/forms";
export interface Meal {
  id: number;
  name: string;
  ingredients: string[];
  difficulty: number;
  tags: string[];
  image?: string;
}

export interface MealForm {
  name: FormControl<string | null>;
  ingredients: FormControl<string | null>;
  difficulty: FormControl<number | null>;
  tags: FormControl<string | null>;
  image: FormControl<string | null>;
}
