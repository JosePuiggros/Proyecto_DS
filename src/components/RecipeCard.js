import {useRouter} from "next/navigation";
import { useRecipes } from "../context/RecipesContext";  
import {toast} from "react-hot-toast";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export const RecipeCard = ({ recipe }) => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const { deleteRecipe } = useRecipes();

//   return (
//     <div className="relative w-full max-w-md p-4 bg-earth border rounded-lg shadow-md"
//      onClick={() => router.push(`/recipe/${recipe.id}`)}>
//       <h1 className="text-xl font-bold text-center mb-4 text-black">{recipe.titulo}</h1>
//       <div className="absolute bottom-4 left-4">
//       <button 
//         className="bg-mint hover:bg-green-300 px-3 py-1 text-black inline-flex item-center font-bold rounded-sm"
//         onClick={(e) => {e.stopPropagation(); router.push(`/editar/${recipe.id}`)}}>Editar</button>
//       </div>
//       <div  className="absolute bottom-4 right-4">
//       <button 
//         className="bg-beige hover:bg-orange px-3 py-1 text-black inline-flex item-center font-bold rounded-sm"
//         onClick={(e) => {e.stopPropagation(); 
//         const accepst = window.confirm("¿Estás seguro de que deseas eliminar esta receta?")
//         if (accepst) {
//           deleteRecipe(recipe.id);
//           toast.success("Receta eliminada");}
//         }}>
//         Eliminar
//       </button>
//       </div>
//     </div>
//   );
// }


  return (
<div 
  className="relative flex flex-col items-center justify-between w-full max-w-md bg-earth text-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
  onClick={() => router.push(`/recipe/${recipe.id}`)}
>
  <h1 className="text-xl font-bold text-center mb-4">{recipe.titulo}</h1>
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
//     <div 
//       className="relative flex flex-col items-center justify-between w-full max-w-md p-6 bg-earth text-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//       onClick={() => router.push(`/recipe/${recipe.id}`)} // Navegar al detalle de la receta
//     >
//       <h1 className="text-xl font-bold text-center mb-4">{recipe.titulo}</h1>
//       <div className="flex gap-4 w-full justify-center mt-4">
//         {/* Botón de Editar */}
//         <button 
//           className="bg-mint hover:bg-green-300 px-4 py-2 text-black font-bold rounded transition-colors"
//           onClick={(e) => {
//             e.stopPropagation(); // Evitar que se active el clic en la tarjeta
//             router.push(`/editar/${recipe.id}`);
//           }}
//         >
//           Editar
//         </button>
//         {/* Botón de Eliminar */}
//         <button 
//           className="bg-beige hover:bg-orange px-4 py-2 text-black font-bold rounded transition-colors"
//           onClick={(e) => {
//             e.stopPropagation(); // Evitar que se active el clic en la tarjeta
//             const accept = window.confirm("¿Estás seguro de que deseas eliminar esta receta?");
//             if (accept) {
//               deleteRecipe(recipe.id);
//               toast.success("Receta eliminada correctamente");
//             }
//           }}
//         >
//           Eliminar
//         </button>
//       </div>
//     </div>
//   );
// };
