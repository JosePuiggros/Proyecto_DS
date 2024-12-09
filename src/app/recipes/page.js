"use client";
import {useRecipes} from "../../context/RecipesContext";
import {RecipeCard} from "../../components/RecipeCard"

function Page() {
  const { recipes } = useRecipes();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Page;
