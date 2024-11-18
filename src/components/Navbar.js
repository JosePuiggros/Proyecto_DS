"use client";
import Link from "next/link"  

export function Navbar() {

  return (
    <header className="flex items-center justify-between bg-mint px-28 py-3">
      <div className="flex-1 text-left">
        <h2 className="text-black">Idioma</h2>
      </div>
      <div className="flex-1 text-center">
        <Link href="/">
          <h1 className="font-bold text-3xl text-black">Recetario</h1>
        </Link>
      </div>
      <div className="flex-1 text-right">
        <a 
          href="/login" 
          className="bg-earth hover:bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded"
        >Registrarse</a>
      </div>
    </header>
  );
}