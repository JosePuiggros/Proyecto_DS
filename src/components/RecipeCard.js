import {useRouter} from "next/navigation";
import { useRecipes } from "../context/RecipesContext";  
import {toast} from "react-hot-toast";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export const RecipeCard = ({ recipe }) => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const { deleteRecipe } = useRecipes();

  return (
<div 
  className="relative flex flex-col items-center justify-between w-full max-w-md bg-earth text-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
  onClick={() => router.push(`/recipe/${recipe.id}`)}
>
  <h1 className="text-xl font-bold text-center mb-4">{recipe.titulo}</h1>
  <img
        src={recipe.foto}
        alt={recipe.titulo}
        className="w-full h-48 object-cover rounded-t-lg"
      />
  <div className="flex gap-4 w-full justify-center mt-4">
    <button 
      className="bg-mint hover:bg-green-300 px-4 py-2 text-black font-bold rounded transition-colors"
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/editar/${recipe.id}`);
      }}
    >
      {t("editar")}
    </button>
    <button 
      className="bg-beige hover:bg-orange px-4 py-2 text-black font-bold rounded transition-colors"
      onClick={(e) => {
        e.stopPropagation();
        const accept = window.confirm("¿Estás seguro de que deseas eliminar esta receta?");
        if (accept) {
          deleteRecipe(recipe.id);
          toast.success(t("recetaEliminada"));
        }
      }}
    >
      {t("eliminar")}
    </button>
  </div>
</div>


  );
};

