import React from "react";

export default function Direcciones() {
  return (
    <div className="p-4">
      {/* --- VISTA MÓVIL --- */}
      {/* Mantenemos tu lógica para un enlace simple en móviles */}
      <a
        href="https://www.sba.gov/about-sba/organization"
        className="md:hidden text-blue-700 hover:text-blue-800 underline flex items-center text-sm"
      >
        {/* Usamos un caracter de flecha simple */}
        <span className="mr-1" aria-hidden="true">
          ←
        </span>
        Organization
      </a>

      {/* --- VISTA DE ESCRITORIO --- */}
      {/* Usamos <nav> y <ol> (lista ordenada) para la semántica correcta 
        de "migas de pan" (breadcrumbs). 
        Está oculto en móvil (hidden) y se muestra en 'md' y más grandes (md:block).
      */}
      <nav aria-label="Breadcrumb" className="hidden md:block">
        <ol className="flex items-center text-base">
          {/* Item 1: Home */}
          <li>
            <a
              href="https://www.sba.gov/"
              className="text-blue-900 underline hover:text-blue-800"
            >
              Home
            </a>
          </li>

          {/* Item 2: About SBA */}
          <li className="flex items-center">
            <span className="mx-2 text-gray-500" aria-hidden="true">
              &gt;
            </span>
            <a
              href="https://www.sba.gov/about-sba"
              className="text-blue-900 underline hover:text-blue-800"
            >
              About SBA
            </a>
          </li>

          {/* Item 3: Organization */}
          <li className="flex items-center">
            <span className="mx-2 text-gray-500" aria-hidden="true">
              &gt;
            </span>
            <a
              href="https://www.sba.gov/about-sba/organization"
              className="text-blue-900 underline hover:text-blue-800"
            >
              Organization
            </a>
          </li>

          {/* Item 4: Página Actual (Activa) */}
          <li className="flex items-center" aria-current="page">
            <span className="mx-2 text-gray-500" aria-hidden="true">
              &gt;
            </span>
            {/* La página actual no es un enlace y tiene color de texto normal */}
            <span className="font-medium text-gray-700">SBA leadership</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}