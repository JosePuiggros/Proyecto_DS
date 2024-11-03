"use client";

import { useRecipes } from "../../../context/RecipesContext"; // Ajusta la ruta según tu estructura de archivos
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const RecipePage = () => {
    const { id } = useParams();
    const { recipes } = useRecipes();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        if (id) {
            // Buscar la receta que coincide con el id
            const foundRecipe = recipes.find(recipe => recipe.id === id);
            setRecipe(foundRecipe);
        }
    }, [id, recipes]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-start bg-gray-900 text-white p-4 mt-8">
            <h1 className="font-bold text-5xl text-center mb-8">{recipe.titulo}</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className="text-lg">{recipe.descripcion}</p>
            </div>
        </div>
    );
};

export default RecipePage;
