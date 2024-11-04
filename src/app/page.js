"use client";
import {useRecipes} from "../context/RecipesContext";
import {RecipeCard} from "../components/RecipeCard"

function Page() {
    return(
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-900 text-white p-4">
        <p className="text-center mb-6">
          ¡Bienvenido a Recetario! Aquí podrás encontrar recetas de todo tipo, 
          desde las más sencillas hasta las más elaboradas. 
          Si tienes alguna receta que te gustaría compartir, 
          no dudes en publicarla.
        </p>
        <a 
          href="/login" 
          className="bg-blue-500 hover:bg-blue-400 text-gray-50 font-bold py-2 px-4 rounded"
          >Registrarse</a>
        <a 
          href="/recipes" 
          className="bg-blue-500 hover:bg-blue-400 text-gray-50 font-bold py-2 px-4 rounded"
          >Ir a ver las recetas</a>
      </div>
    )
}

export default Page;