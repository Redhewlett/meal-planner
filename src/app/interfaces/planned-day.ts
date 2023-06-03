import { Meal } from './meal';

export type WeekDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface PlannedDay {
  id: WeekDay;
  lunch: Meal;
  dinner: Meal;
}
