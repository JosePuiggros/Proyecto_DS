import {useRouter} from "next/navigation";
import { useRecipes } from "../context/RecipesContext";  
import {toast} from "react-hot-toast";

export const RecipeCard = ({ recipe }) => {
    const router = useRouter();
    const { deleteRecipe } = useRecipes();

  return (
    <div className="relative w-full max-w-md p-4 bg-white border rounded-lg shadow-md"
     onClick={() => router.push(`/recipe/${recipe.id}`)}>
      <h1 className="text-xl font-bold text-center mb-4 text-black">{recipe.titulo}</h1>
      <div className="absolute bottom-4 left-4">
      <button 
        className="bg-blue-500 hover:bg-blue-400 px-3 py-1 text-gray-50 inline-flex item-center font-bold rounded-sm"
        onClick={(e) => {e.stopPropagation(); router.push(`/editar/${recipe.id}`)}}>Editar</button>
      </div>
      <div  className="absolute bottom-4 right-4">
      <button 
        className="bg-red-500 hover:bg-red-400 px-3 py-1 text-gray-50 inline-flex item-center font-bold rounded-sm"
        onClick={(e) => {e.stopPropagation(); 
        const accepst = window.confirm("¿Estás seguro de que deseas eliminar esta receta?")
        if (accepst) {
          deleteRecipe(recipe.id);
          toast.success("Receta eliminada");}
        }}>
        Eliminar
      </button>
      </div>
    </div>
  );
}