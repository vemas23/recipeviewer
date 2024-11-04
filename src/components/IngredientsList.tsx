import React from 'react';
import { Ingredient } from '../types/recipe';

interface IngredientsListProps {
  ingredients: Ingredient[];
  portions: number;
  basePortions?: number;
}

export function IngredientsList({ ingredients, portions, basePortions = 4 }: IngredientsListProps) {
  const adjustAmount = (ingredient: Ingredient) => {
    if (typeof ingredient.amount === 'number') {
      const adjusted = (ingredient.amount * portions / basePortions).toFixed(1).replace('.0', '');
      return `${adjusted} ${ingredient.unit}`;
    }
    return ingredient.amount;
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Zutaten</h2>
      <ul className="space-y-2">
        {ingredients.map((ingredient) => (
          <li key={ingredient.name} className="flex items-center gap-2 text-gray-700">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span>
              {adjustAmount(ingredient)} {ingredient.unit ? '' : ' '}{ingredient.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}