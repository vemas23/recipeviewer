import React from 'react';
import { Clock, Flame, Users, ChevronUp, ChevronDown } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeMetadataProps {
  recipe: Recipe;
  portions: number;
  onPortionsChange: (portions: number) => void;
}

export function RecipeMetadata({ recipe, portions, onPortionsChange }: RecipeMetadataProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="flex items-center gap-2 text-gray-700">
        <Clock className="w-5 h-5" />
        <span>Zubereitungszeit: {recipe.prepTime}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <Flame className="w-5 h-5" />
        <span>{recipe.caloriesPerServing} kcal pro Portion</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5" />
        <div className="flex items-center">
          <button 
            onClick={() => onPortionsChange(Math.max(1, portions - 1))}
            className="p-1 hover:bg-orange-100 rounded"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
          <span className="mx-2 font-medium">{portions} Portionen</span>
          <button 
            onClick={() => onPortionsChange(Math.min(8, portions + 1))}
            className="p-1 hover:bg-orange-100 rounded"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}