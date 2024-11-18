"use client";
import {useRecipes} from "../context/RecipesContext";
import {RecipeCard} from "../components/RecipeCard"
import {useRouter} from "next/navigation";

function Page() {
  const router = useRouter();
    return(
      <div className="flex flex-col items-center justify-start min-h-screen bg-cream  text-white p-4">
        <p className="text-center mb-6 text-black">
          ¡Bienvenido a Recetario! Aquí podrás encontrar recetas de todo tipo, 
          desde las más sencillas hasta las más elaboradas. 
          Si tienes alguna receta que te gustaría compartir, 
          no dudes en publicarla.
        </p>
        <a 
          href="/recipes" 
          className="bg-beige hover:bg-orange text-gray-600 font-bold py-2 px-4 rounded"
          >Ir a ver las recetas</a>
        <div>
            <button onClick={() => router.push("/publicar")} 
              className="bg-beige hover:bg-orange px-5 py-2
              text-gray-600 font-bold- rounded-sm inline-flex item-center m-4 font-bold">Publicar Receta</button>
        </div>
      </div>
    )
}

export default Page;