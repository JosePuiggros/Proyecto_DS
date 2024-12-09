"use client";
import React, { Component, Suspense } from 'react';
import {useRecipes} from "../context/RecipesContext";
import {RecipeCard} from "../components/RecipeCard"
import {useRouter} from "next/navigation";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { MyCompFromOtherLib } from './other-lib/component';

// function Page() {
//   // const {t} = useTranslation();
//   const router = useRouter();
//     return(
//       <div className="flex flex-col items-center justify-start min-h-screen bg-cream text-white p-4">
//       <div className="flex justify-center w-full mb-6">
//       <img 
//       src="ReceFitsLogo.png" 
//       alt="ReceFits Logo" 
//       className="mb-6 w-1/4"
//       />
//       </div>
//       <p className="text-center mb-6 text-black">
//       ¡Bienvenido a Recetario! Aquí podrás encontrar recetas de todo tipo, desde las más sencillas hasta las más elaboradas. Si tienes alguna receta que te gustaría compartir, no dudes en publicarla.
//       </p>
//       <a 
//       href="/recipes" 
//       className="bg-beige hover:bg-orange text-gray-600 font-bold py-2 px-4 rounded"
//       >Ir a ver las recetas</a>
//       <div>
//       <button onClick={() => router.push("/publicar")} 
//       className="bg-beige hover:bg-orange px-5 py-2
//       text-gray-600 font-bold- rounded-sm inline-flex item-center m-4 font-bold">Publicar Receta</button>
//       </div>
//       </div>
//     )
// }

// export default Page;

// -----------------------------------------------

function Page() {
  const router = useRouter();
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

const Loader = () => (
  <div className="App">
    <img src="logo.svg" className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);


export default function page() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}