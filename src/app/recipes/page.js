"use client";
import {useRecipes} from "../../context/RecipesContext";
import {RecipeCard} from "../../components/RecipeCard"

function Page() {
    const {recipes} = useRecipes();
  
    return(
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    )
}

export default Page;