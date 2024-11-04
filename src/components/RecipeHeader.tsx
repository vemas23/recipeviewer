import React from 'react';
import { Star } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeHeaderProps {
  recipe: Recipe;
}

export function RecipeHeader({ recipe }: RecipeHeaderProps) {
  return (
    <div className="relative h-80">
      <img 
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
        alt="Hähnchen-Paprika-Pfanne"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
        <div className="p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span>{recipe.ratings} Bewertungen</span>
          </div>
        </div>
      </div>
    </div>
  );
}