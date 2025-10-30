import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Plus,
  Minus,
  Search,
} from "lucide-react";

// 1. Se importa tu array de navItems
import { navItems } from "./navItems";

// --- Hook personalizado para detectar clics fuera ---
function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

// --- Enlaces superiores (de tu Header.js) ---
const topLinks = [
  { name: "For Partners", href: "https://www.sba.gov/partners" },
  { name: "Newsroom", href: "https://www.sba.gov/about-sba/sba-newsroom" },
  { name: "Contact us", href: "https://www.sba.gov/about-sba/organization/contact-sba" },
  { name: "Other languages", href: "https://www.sba.gov/about-sba/information-other-languages" },
];

// --- COMPONENTE PRINCIPAL DEL HEADER ---
const AppHeader = () => {
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const desktopNavRef = useRef(null);
  useOutsideClick(desktopNavRef, () => setOpenDesktopDropdown(null));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleDesktopToggle = (itemName) => {
    setOpenDesktopDropdown((prev) => (prev === itemName ? null : itemName));
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenAccordion(null);
    }
  };

  const handleAccordionToggle = (itemName) => {
    setOpenAccordion((prev) => (prev === itemName ? null : itemName));
  };

  const currentDesktopDropdown = navItems.find(
    (item) => item.name === openDesktopDropdown
  );

  return (
    <header className="w-full">
      {/*
      ================================================================
      |                 VISTA DE ESCRITORIO (`md:` >)                |
      ================================================================
      */}
      <div className="container mx-auto px-4 py-4 hidden md:flex flex-row items-center justify-between">
        {/* Logo y texto */}
        <div className="flex items-center">
          <img
            src="https://www.sba.gov/themes/custom/sba/dist/img/logo-icon.svg"
            alt="SBA Logo"
            className="h-16 mr-3"
          />
          <p
            className="text-[16px] text-[#002e6d]"
            style={{ lineHeight: "1.25rem" }}
          >
            U.S. Small Business <br /> Administration
          </p>
        </div>

        {/* Enlaces y búsqueda a la derecha */}
        <div className="flex flex-col items-end space-y-3">
          <button className="rounded-md bg-[#0072c6] px-5 py-1 text-lg font-bold text-white hover:bg-blue-900">
            Español
          </button>
          
          <nav className="flex items-center space-x-4 text-[18px]">
            {topLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-blue-800 underline hover:text-blue-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex">
            <input
              type="text"
              placeholder=""
              className="w-56 border border-r-0 border-gray-400 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="flex items-center justify-center rounded-r-md bg-[#0072c6] p-2 text-white hover:bg-blue-700">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-300 hidden md:block"></div>

      {/* ================================================================
      | --- INICIO DE CAMBIOS: Barra de Navegación (Escritorio) ---  |
      ================================================================
      */}
<nav
  ref={desktopNavRef}
  className="relative w-full bg-white text-gray-900 hidden md:block border-b border-gray-300"
>
  <div className="container">
    <ul className="flex items-center justify-items-start font-semibold w-full">
      {navItems.map((item) => (
        <li key={item.name} className="p-0 m-0">
          {item.hasDropdown ? (
            <button
              onClick={() => handleDesktopToggle(item.name)}
              aria-expanded={openDesktopDropdown === item.name}
              className={`flex items-center  h-12 px-5 whitespace-nowrap transition-all  border-2 ${
                openDesktopDropdown === item.name
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-gray-900 hover:text-blue-700 hover:border-blue-600"
              }`}
            >
              {item.name}
            </button>
          ) : (
            <a
              href="#"
              className="flex items-center justify-center h-12 px-5 whitespace-nowrap text-gray-900 transition-colors  border-b-2 border-transparent hover:text-blue-700 hover:border-blue-600"
            >
              {item.name}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>

  {currentDesktopDropdown && (
    <div className="absolute left-0 top-full z-50 w-full bg-[#0c2340] text-white shadow-lg">
      <div className="container mx-auto grid grid-cols-4 gap-x-8 gap-y-10 px-6 py-10">
        {currentDesktopDropdown.dropdownContent.columns.map((column, index) => (
          <div key={column.title || index}>
            <h3 className="mb-4 text-base font-bold text-white">{column.title}</h3>
            {column.links && (
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-200 transition-colors  hover:text-white hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {column.secondaryTitle && (
              <>
                <h3 className="mb-4 mt-6 text-base font-bold text-white">
                  {column.secondaryTitle}
                </h3>
                {column.secondaryLinks && (
                  <ul className="space-y-3">
                    {column.secondaryLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-200 transition-colors duration-200 hover:text-white hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )}
</nav>

      {/* ================================================================
      | --- FIN DE CAMBIOS: Barra de Navegación (Escritorio) ---     |
      ================================================================
      */}


      {/*
      ================================================================
      |                 VISTA DE MÓVIL (< `md`)                   |
      ================================================================
      */}

      {/* --- Encabezado Móvil --- */}
      <div className="container mx-auto px-4 py-3 flex md:hidden items-center justify-between border-b border-gray-300">
        <img
          src="https://www.sba.gov/themes/custom/sba/dist/img/logo-icon.svg"
          alt="SBA Logo"
          className="h-12"
        />
        <div className="flex items-center space-x-3">
          <button className="rounded-md bg-[#0072c6] px-4 py-1 text-base font-bold text-white hover:bg-blue-900">
            Español
          </button>
          <button
            onClick={handleMobileMenuToggle}
            aria-label="Open menu"
            className="text-gray-900"
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* --- Menú Deslizante Móvil (Fondo Blanco) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white text-gray-900 md:hidden">
          <div className="flex items-center justify-end p-4 border-b border-gray-300">
            <button
              onClick={handleMobileMenuToggle}
              aria-label="Close menu"
              className="text-gray-900"
            >
              <X size={32} />
            </button>
          </div>

          {/* --- Contenido del Menú (scrollable) --- */}
          <div className="flex-1 overflow-y-auto">
            <nav>
              <ul>
                {navItems.map((item) => (
                  <li key={item.name} className="border-b border-gray-300">
                    <button
                      onClick={() => handleAccordionToggle(item.name)}
                      className="flex w-full items-center justify-between p-4 text-left text-lg text-gray-900"
                    >
                      <span>{item.name}</span>
                      {openAccordion === item.name ? (
                        <Minus size={24} />
                      ) : (
                        <Plus size={24} />
                      )}
                    </button>

                    {/* --- Contenido del Acordeón (Móvil) --- */}
                    {openAccordion === item.name && (
                      <div className="bg-white p-4 text-black">
                        
                        {item.dropdownContent.columns.map((column, idx) => (
                          <div key={idx} className="mt-4">
                            <h3 className="mb-2 text-base font-bold text-gray-900">
                              {column.title}
                            </h3>
                            {column.links?.map((link, linkIdx) => (
                              <a
                                key={linkIdx}
                                href={link.href}
                                className="block py-2 text-base text-gray-800 hover:underline"
                              >
                                {link.name}
                              </a>
                            ))}

                            {column.secondaryTitle && (
                              <>
                                <h3 className="mb-2 mt-4 text-base font-bold text-gray-900">
                                  {column.secondaryTitle}
                                </h3>
                                {column.secondaryLinks?.map((link, linkIdx) => (
                                  <a
                                    key={linkIdx}
                                    href={link.href}
                                    className="block py-2 text-base text-gray-800 hover:underline"
                                  >
                                    {link.name}
                                  </a>
                                ))}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* --- Enlaces Secundarios (Móvil) --- */}
            <div className="flex flex-col space-y-4 p-4 mt-4">
              {topLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-blue-800 underline"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* --- Barra de Búsqueda (Móvil) --- */}
            <div className="p-4 mt-2 mb-6">
              <div className="flex">
                <input
                  type="text"
                  className="w-full flex-1 border border-r-0 border-gray-900 px-3 py-2 text-black focus:outline-none"
                  aria-label="Search"
                />
                <button
                  aria-label="Submit search"
                  className="flex items-center justify-center bg-[#0072c6] p-3 text-white"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppHeader;