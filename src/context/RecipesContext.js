"use client";
import { createContext, useContext, useState } from "react";
import {v4 as uuid} from "uuid" 
import {useLocalStorage} from "../hooks/useLocalStorage";

export const RecipeContext = createContext();

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error("useRecipes must be used within a RecipesProvider");
  return context;
};

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useLocalStorage("recipes", []);

  const createRecipe = (titulo, descripcion) =>
    setRecipes([
      ...recipes, 
      {
        titulo,
        descripcion,
        id: uuid(),
      },
    ]);

  const deleteRecipe = (id) =>
    setRecipes(
      [...recipes.filter(recipe => recipe.id !== id)])
  
  const updateRecipe = (id, actualizacion) => 
    setRecipes([...recipes.map(recipe => recipe.id === id ? {...recipe, ...actualizacion} : recipe)]);
  



  return (
    <RecipeContext.Provider
      value={{
        recipes,
        createRecipe,
        deleteRecipe,
        updateRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};