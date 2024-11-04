import { RecipeProvider} from "../context/RecipesContext.js";
import { NotificationProvider } from '../context/NotificationContext';
import {Navbar} from "../components/Navbar"
import {Toaster} from "./Toaster"
import {Layout} from "../components/Layout"
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Recipes App',
  description: 'Una aplicación para buscar y compartir recetas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <RecipeProvider>
          <NotificationProvider>
            <Navbar />
            <Layout>
              <main className="min-h-screen flex flex-col items-center justify-center">
                {children}
              </main>
            </Layout>
            <Toaster />
          </NotificationProvider>
        </RecipeProvider>
      </body>
    </html>
  );
}