"use client";
import {useEffect, useState} from "react";
import {useRecipes} from "../../context/RecipesContext";
import { useRouter, useParams } from 'next/navigation';
import {set, useForm} from "react-hook-form";
import {toast} from "react-hot-toast";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

function page() {
  const { t, i18n } = useTranslation();
  const {recipes, createRecipe, updateRecipe} = useRecipes();
  const router = useRouter();
  const params = useParams();
  const {register, handleSubmit, setValue, formState: {errors}}= useForm();

const onSubmit = handleSubmit((data) => {
  if (params.id){
      updateRecipe(params.id, data);
      toast.success(t("recetaActualizada"));
  } else {
      createRecipe(data.titulo, data.ingredientes, data.direcciones);
      toast.success(t("recetaCreada"));
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
        <h2 className="text-black">{t("nuevaReceta")}</h2>
        <input className="text-black py-3 px-4 mb-2 block focus:outline-none w-full" 
          placeholder={t("titulo")}
          {...register("titulo", {required: true})}
        />
        {errors.titulo && <span>{t("requerido")}</span>}
        <textarea className="text-black py-3 px-4 mb-2 block focus:outline-none w-full" 
          placeholder={t("ingredientes")} 
          {...register("ingredientes", {required: true})}
        />
        {errors.ingredientes && <span>{t("requerido")}</span>}
        <textarea className="text-black py-3 px-4 mb-2 block focus:outline-none w-full" 
          placeholder={t("pasos")} 
          {...register("direcciones", {required: true})}
        />
        {errors.descripcion && <span>{t("requerido")}</span>}
        
        <div className="flex justify-center">
          <button 
            className="bg-beige hover:bg-orange px-3 py-1 text-gray-50 inline-flex item-center font-bold rounded-sm"
          >{t("guardar")}</button>
        </div>
      </form>
    </div>
  );
} 

export default page;