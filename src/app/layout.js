import { RecipeProvider} from "../context/RecipesContext.js";
import {Navbar} from "../components/Navbar.js";
import {Toaster} from "./Toaster"
import {Layout} from "../components/Layout"
import './globals.css';

export const metadata = {
  title: 'My Recipes App',
  description: 'Una aplicación para buscar y compartir recetas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <RecipeProvider>
          <Navbar/>
          <Layout>{children}</Layout>
          <Toaster/>
          </RecipeProvider>
      </body>
    </html>
  );
}