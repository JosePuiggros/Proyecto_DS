"use client";
import Link from "next/link"  
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full bg-mint text-gray-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
      <div >
        {/* Language Switch Button */}
        <button className="bg-earth hover:bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded text-base sm:text-lg" onClick={() => changeLanguage('es')}>
          ES
        </button>
        <button className="bg-earth hover:bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded text-base sm:text-lg" onClick={() => changeLanguage('en')}>
          EN
        </button>
      </div>
        {/* Title */}
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold text-center flex-grow">
            ReceFits
          </h1>
        </Link>

        {/* Login Button */}
        <a
          href="/login"
          className="bg-earth hover:bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded text-base sm:text-lg"
        >
          Iniciar Sesión
        </a>
      </div>
    </header>
  );
};



//   return (
//     <header className="flex items-center justify-between bg-mint px-28 py-3">
//       <div className="flex-1 text-left">
//         <h2 className="text-black">Idioma</h2>
//       </div>
//       <div className="flex-1 text-center">
//         <Link href="/">
//           <h1 className="font-bold text-3xl text-black">ReceFits</h1>
//         </Link>
//       </div>
//       <div className="flex-1 text-right">
//         <a 
//           href="/login" 
//           className="bg-earth hover:bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded"
//         >Iniciar Sesión</a>
//       </div>
//     </header>
//   );
// }
