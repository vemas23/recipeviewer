export interface Ingredient {
  amount: number | string;
  unit: string;
  name: string;
}

export interface Recipe {
  title: string;
  ratings: number;
  description: string;
  source: string;
  prepTime: string;
  totalTime: string;
  caloriesPerServing: number;
  ingredients: Ingredient[];
  steps: string[];
}