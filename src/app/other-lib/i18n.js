import { createInstance } from 'i18next';

const i18n = createInstance({
  fallbackLng: 'es',
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  resources: {
    en: {
      translation: {
        "mensajeBienvenida": "Welcome to Recipe Book! Here you can find recipes of all kinds, from the simplest to the most elaborate. If you have a recipe you would like to share, feel free to post it.",
        "inicioSesion": "Log in",
        "publicarReceta": "Post recipe",
        "verRecetas": "View recipes",
        "nuevaReceta": "New recipe",
        "titulo": "Title",
        "ingredientes": "Ingredients",
        "pasos": "Steps",
        "guardar": "Save",
        "publicar": "Post",
        "requerido": "This field is required",
        "recetaCreada": "Recipe created",
        "eliminar": "Delete",
        "editar": "Edit",
        "recetaActualizada": "Recipe updated",
        "recetaEliminada": "Recipe deleted",
        "formularioIniciarSesion": "Form to log in",
        "correo": "Email",
        "recuperarContrasena": "Recover password",
        "formularioRecuperarContrasena": "Form to recover password",
        "ingresarCorreo": "Enter your email",
      },
    },
    es: {
      translation: {
        "mensajeBienvenida": "¡Bienvenido a Recetario! Aquí podrás encontrar recetas de todo tipo, desde las más sencillas hasta las más elaboradas. Si tienes alguna receta que te gustaría compartir, no dudes en publicarla.",
        "inicioSesion": "Iniciar sesión",
        "publicarReceta": "Publicar receta",
        "verRecetas": "Ver recetas",
        "nuevaReceta": "Nueva receta",
        "titulo": "Título",
        "ingredientes": "Ingredientes",
        "pasos": "Pasos",
        "guardar": "Guardar",
        "publicar": "Publicar",
        "requerido": "Este campo es requerido",
        "recetaCreada": "Receta creada",
        "eliminar": "Eliminar",
        "editar": "Editar",
        "recetaActualizada": "Receta actualizada",
        "recetaEliminada": "Receta eliminada",
        "formularioIniciarSesion": "Formulario para iniciar sesión",
        "correo": "Correo",
        "recuperarContrasena": "Recuperar contraseña",
        "formularioRecuperarContrasena": "Formulario para recuperar contraseña",
        "ingresarCorreo": "Ingrese su correo", 
      },
    },
  },
});

i18n.init();

export default i18n;