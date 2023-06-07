import { Meal } from './meal';

export interface PlannedDay {
  id: number;
  weekDay: string;
  date: string;
  lunch: number | null;
  dinner: number | null;
}
