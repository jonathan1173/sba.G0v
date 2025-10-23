import React from "react";

// --- Datos para las columnas de enlaces ---
// Separar los datos hace que el componente JSX sea mucho más limpio.
const aboutSbaLinks = [
  { text: "Contact SBA", href: "#" },
  { text: "Locations", href: "#" },
  { text: "Upcoming events", href: "#" },
  { text: "Newsroom", href: "#" },
  { text: "SBA blog", href: "#" },
  { text: "Leadership team", href: "#" },
];

const aboutSiteLinks = [
  { text: "Site map", href: "#" },
  { text: "Privacy policy", href: "#" },
  { text: "Linking policy", href: "#" },
  { text: "Plain language", href: "#" },
  { text: "Accessibility", href: "#" },
  { text: "Disclaimers", href: "#" },
];

const openGovLinks = [
  { text: "Freedom of Information Act", href: "#" },
  { text: "No Fear Act", href: "#" },
  { text: "Open data sources", href: "#" },
  { text: "Policies and guidance", href: "#" },
  { text: "Budget and performance", href: "#" },
  { text: "Regulations.gov", href: "#", external: true },
];

const oversightLinks = [
  { text: "Inspector General", href: "#" },
  { text: "Advocacy", href: "#" },
  { text: "Hearings and appeals", href: "#" },
  { text: "Ombudsman", href: "#" },
  { text: "Fraud and identity theft", href: "#" },
  { text: "WhiteHouse.gov", href: "#", external: true },
  { text: "USA.gov", href: "#", external: true },
];

// Array de todas las columnas para mapearlas
const linkColumns = [
  { title: "About SBA", links: aboutSbaLinks },
  { title: "About the site", links: aboutSiteLinks },
  { title: "Open government", links: openGovLinks },
  { title: "Oversight", links: oversightLinks },
];

// --- El Componente del Footer ---
function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 p-8 md:p-12 font-sans h-[100vh]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* --- Columnas de Enlaces (Generadas dinámicamente) --- */}
        {linkColumns.map((column) => (
          <div key={column.title}>
            <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-blue-700 underline text-[18px]"
                  >
                    {link.text}
                    {/* Añade un ícono de flecha si es un enlace externo */}
                    {link.external && (
                      <span className="ml-1 text-xs">&#8599;</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* --- Columna del Formulario "Sign up" --- */}
        {/* Ocupa 2 columnas en pantallas medianas y grandes para ser más ancha */}
        <div className="md:col-span-2 lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Sign up</h2>

          <p className="text-sm text-gray-700 mb-2">
            Receive information about upcoming SBA events, news alerts, and
            program updates.
          </p>

          <p className="text-sm  mb-4">
            <span className="text-red-600">*</span> indicates a required field
          </p>

          <form action="#">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-400 rounded-md shadow-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ZIP Code <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="zip"
                className="w-full p-2 border border-gray-400 rounded-md shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe to SBA emails
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4">
            Your information will only be used in accordance with our
            <a href="#" className="text-blue-700 hover:underline ml-1">
              website privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
