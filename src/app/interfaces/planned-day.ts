import { Meal } from './meal';

export interface PlannedDay {
  id: number;
  date: string;
  lunch: Meal;
  dinner: Meal;
}
