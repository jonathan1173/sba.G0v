import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Guía de negocios', hasDropdown: true },
    { name: 'Programas de financiamiento', hasDropdown: true },
    { name: 'Contratación federal', hasDropdown: true },
    { name: 'Capacitación', hasDropdown: true },
    { name: 'Ayuda local', hasDropdown: true },
    { name: 'Prioridades', hasDropdown: false },
    { name: 'Acerca de la SBA', hasDropdown: true },
  ];

  return (
    <nav className="w-full border-b border-gray-300 bg-white shadow-sm">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center space-x-10 py-4 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className="flex items-center text-gray-900 transition-colors duration-200 hover:text-blue-900"
              >
                {item.name}
                {/* Usando el ícono ChevronDown de lucide-react */}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

