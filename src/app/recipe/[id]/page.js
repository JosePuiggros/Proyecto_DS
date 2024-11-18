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

    const ingredientesList = recipe.ingredientes.split('\n').map((ingrediente, index) => (
        <li key={index}>- {ingrediente}</li>
    ));

    const pasosList = recipe.direcciones.split('\n').map((paso, index) => (
        <li key={index}>{index + 1}. {paso}</li>
    ));

    return (
        <div className="flex flex-col items-center justify-start bg-cream text-black p-4 mt-8">
            <h1 className="font-bold text-5xl text-center mb-8">{recipe.titulo}</h1>
            <div className="bg-earth p-6 rounded-lg shadow-lg max-w-md w-full text-center mb-4">
                <h2 className="font-bold text-2xl mb-4">Ingredientes</h2>
                <ul className="text-lg" style={{ whiteSpace: 'pre-line' }}>{ingredientesList}</ul>
            </div>
            <div className="bg-earth p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="font-bold text-2xl mb-4">Pasos</h2>
                <ol className="text-lg" style={{ whiteSpace: 'pre-line' }}>{pasosList}</ol>
            </div>
            <button 
                onClick={() => window.location.href = '/recipes'} 
                className="mt-4 bg-beige hover:bg-orange text-white font-bold py-2 px-4 rounded"
            >
                Volver a Recetas
            </button>
        </div>
    );
};

export default RecipePage;
