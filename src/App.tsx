import React, { useState } from 'react';
import { baseRecipe } from './data/recipe';
import { RecipeHeader } from './components/RecipeHeader';
import { RecipeMetadata } from './components/RecipeMetadata';
import { IngredientsList } from './components/IngredientsList';
import { Instructions } from './components/Instructions';

function App() {
  const [portions, setPortions] = useState(4);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1e66f5' }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: '#eff1f5' }}>
          <RecipeHeader recipe={baseRecipe} />

          <div className="p-6">
            <p className="text-gray-600 italic mb-6">{baseRecipe.description}</p>

            <RecipeMetadata 
              recipe={baseRecipe}
              portions={portions}
              onPortionsChange={setPortions}
            />

            <div className="grid md:grid-cols-2 gap-8">
              <IngredientsList 
                ingredients={baseRecipe.ingredients}
                portions={portions}
              />
              <Instructions steps={baseRecipe.steps} />
            </div>

            <div className="mt-8 pt-6 border-t text-gray-500 text-sm">
              Quelle: {baseRecipe.source}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;