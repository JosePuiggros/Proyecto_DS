"use client";
import {useEffect, useState} from "react";
import {useRecipes} from "../../context/RecipesContext";
import { useRouter, useParams } from 'next/navigation';
import {set, useForm} from "react-hook-form";
import {toast} from "react-hot-toast";

function page() {
  
  const {recipes, createRecipe, updateRecipe} = useRecipes();
  const router = useRouter();
  const params = useParams();
  const {register, handleSubmit, setValue, formState: {errors}}= useForm();

const onSubmit = handleSubmit((data) => {
  if (params.id){
      updateRecipe(params.id, data);
      toast.success("Receta actualizada");
  } else {
      createRecipe(data.titulo, data.ingredientes, data.direcciones);
      toast.success("Receta creada");
  }
  router.push("/recipes");
});

  useEffect(()=>{
    if (params.id){
      const recipeFound = recipes.find((recipe) => recipe.id === params.id)
      if (recipeFound) {
        setValue("titulo", recipeFound.titulo);
        setValue("descripcion", recipeFound.direcciones);
        setValue("ingredientes", recipeFound.ingredientes);
        setValue("direcciones", recipeFound.direcciones);
      }  
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="bg-grey-700 p-10">
        <h2 className="text-black">Nueva Receta</h2>
        <input className="text-black py-3 px-4 mb-2 block focus:outline-none w-full" 
          placeholder="Título" 
          {...register("titulo", {required: true})}
        />
        {errors.titulo && <span>Este campo es requerido</span>}
        <textarea className="text-black py-3 px-4 mb-2 block focus:outline-none w-full" 
          placeholder="Ingredientes" 
          {...register("ingredientes", {required: true})}
        />
        {errors.ingredientes && <span>Este campo es requerido</span>}
        <textarea className="text-black py-3 px-4 mb-2 block focus:outline-none w-full" 
          placeholder="Pasos" 
          {...register("direcciones", {required: true})}
        />
        {errors.descripcion && <span>Este campo es requerido</span>}
        
        <div className="flex justify-center">
          <button 
            className="bg-beige hover:bg-orange px-3 py-1 text-gray-50 inline-flex item-center font-bold rounded-sm"
          >Guardar</button>
        </div>
      </form>
    </div>
  );
} 

export default page;