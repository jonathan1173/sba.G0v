import React from "react";

// --- Iconos SVG como componentes para reutilizarlos ---
// Es una buena práctica definir los iconos una vez y usarlos donde sea necesario.

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline-block ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

// --- Datos de los iconos sociales ---
const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.582 0 0 .583 0 1.308v21.384C0 23.418.582 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.742 0 1.325-.582 1.325-1.308V1.308C24 .583 23.418 0 22.675 0z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.011-4.706.067-2.61.119-3.832 1.34-3.951 3.951-.056 1.222-.067 1.588-.067 4.706s.011 3.484.067 4.706c.119 2.61 1.341 3.832 3.951 3.951 1.223.056 1.59.067 4.706.067s3.483-.011 4.706-.067c2.61-.119 3.832-1.34 3.951-3.951.056-1.222.067-1.588.067-4.706s-.011-3.484-.067-4.706c-.119-2.61-1.341-3.832-3.951-3.951-1.223-.056-1.59-.067-4.706-.067zM12 6.871a5.129 5.129 0 1 0 0 10.258 5.129 5.129 0 0 0 0-10.258zm0 8.451a3.322 3.322 0 1 1 0-6.644 3.322 3.322 0 0 1 0 6.644zm5.424-9.31a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462z" />
      </svg>
    ),
  },
];

function FooterBar() {
  return (
    <div className=" bg-gray-200 text-gray-700 py-6 px-4 sm:px-6 lg:px-8">
      <div className="h-40   max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* --- Sección Izquierda: Logo y Dirección --- */}
        <div className="flex items-center mb-4 sm:mb-0">
          {/* Logo */}
          <img
            // URL del logo oficial
            src="https://www.sba.gov/themes/custom/sba/dist/img/logo-icon.svg"
            alt="SBA Logo"
            className="h-14 mr-4"
          />

          {/* Dirección y Teléfono */}
          <div className="text-sm border-l border-gray-400 pl-4">
            <p className="font-semibold">U.S. Small Business Administration</p>
            <p>409 3rd St., SW</p>
            <p>Washington, DC 20416</p>
            <a href="tel:800-827-5722" className="hover:underline">
              800-827-5722
              <PhoneIcon />
            </a>
          </div>
        </div>

        {/* --- Sección Derecha: Iconos Sociales --- */}
        <div className="flex items-center space-x-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-gray-800 transition-colors"
              aria-label={item.name} // Para accesibilidad
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterBar;
