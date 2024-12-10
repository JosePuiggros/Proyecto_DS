"use client";
import React, { Component, Suspense } from 'react';
// import {useRecipes} from "../context/RecipesContext";
// import {RecipeCard} from "../components/RecipeCard"
import {useRouter} from "next/navigation";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
// import { MyCompFromOtherLib } from './other-lib/component';


function page() {const router = useRouter();
    const { t, i18n } = useTranslation();
  
    return (
      <div className="flex flex-col items-center justify-start h-screen bg-cream text-white px-4">
        {/* Logo */}
        <div className="flex-shrink-0 mt-0">
          <img
            src="ReceFitsLogo.png"
            alt="ReceFits Logo"
            className="w-32 sm:w-40"
          />
        </div>
  
        {/* Texto descriptivo */}
        <p className="text-center text-black text-base sm:text-lg max-w-md sm:max-w-lg mt-4 mb-6">
          {t("mensajeBienvenida")}
        </p>
  
        {/* Botones de acción */}
        <div className="flex flex-col items-center gap-3 w-full max-w-md sm:max-w-lg">
          <a
            href="/recipes"
            className="bg-beige hover:bg-orange text-gray-600 font-bold py-3 px-5 rounded transition text-base text-center w-full"
          >
            {t("verRecetas")}
          </a>
          <button
            onClick={() => router.push("/publicar")}
            className="bg-beige hover:bg-orange py-3 px-5 text-gray-600 font-bold rounded transition text-base text-center w-full"
          >
            {t("publicarReceta")}
          </button>
        </div>
      </div>
    );
  }
  export default page;