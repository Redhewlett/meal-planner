export interface Meal {
  id: number;
  name: string;
  ingredients: string[];
  difficulty: number;
  tags: string[];
  image?: string;
}
