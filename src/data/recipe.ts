import { Recipe } from '../types/recipe';

export const baseRecipe: Recipe = {
  title: "Schnelle Hähnchen-Paprika-Pfanne mit Tomaten und Sahne-Sauce",
  ratings: 588,
  description: "Die Hähnchen-Paprika-Pfanne mit Tomaten ist schnell gemacht und ein tolles Familienrezept für den Feierabend, das auch Kindern schmeckt.",
  source: "Gaumenfreundin",
  prepTime: "20 Minuten",
  totalTime: "20 Minuten",
  caloriesPerServing: 185,
  ingredients: [
    { amount: 400, unit: "g", name: "Hähnchenbrustfilet" },
    { amount: 1, unit: "Stück", name: "rote Paprikaschote" },
    { amount: 2, unit: "Stück", name: "Tomaten" },
    { amount: 1, unit: "Stück", name: "Knoblauchzehe" },
    { amount: 1, unit: "EL", name: "Olivenöl" },
    { amount: 250, unit: "ml", name: "Sahne zum Kochen - fettreduziert" },
    { amount: 2, unit: "EL", name: "Tomatenmark" },
    { amount: 1, unit: "TL", name: "Gemüsebrühe" },
    { amount: 2, unit: "EL", name: "gehacktes Basilikum - frisch oder TK" },
    { amount: "nach Geschmack", unit: "", name: "Salz" },
    { amount: "nach Geschmack", unit: "", name: "Pfeffer" }
  ],
  steps: [
    "Hähnchen, Paprika und Tomaten in kleine Stücke schneiden. Knoblauch hacken.",
    "Olivenöl in einer Pfanne erhitzen und das Hähnchen kräftig anbraten. Mit Salz und Pfeffer würzen. Paprika und Knoblauch zugeben und kurz mitbraten.",
    "Sahne, Tomatenmark und Gemüsebrühe in eine Schüssel geben und verrühren. Die Soße zusammen mit Basilikum und Tomaten in die Pfanne geben und einmal aufkochen. Mit Salz und Pfeffer abschmecken."
  ]
};