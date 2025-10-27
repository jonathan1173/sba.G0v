import React from 'react';

// --- Datos para las tarjetas ---
// Es una buena práctica separar los datos del layout.
const services = [
  {
    id: 1,
    title: "Free business counseling",
    description: "Get business advice from our partnering organizations and experts.",
    buttonText: "Find counselors",
    // He usado imágenes de Unsplash como reemplazo de las originales.
    imageUrl: "https://www.sba.gov/sites/default/files/styles/card/public/2022-04/counseling2-opt.jpg.webp?itok=Gfb86XXg"
  },
  {
    id: 2,
    title: "SBA-guaranteed business loans",
    description: "Find an SBA lender near you to help fund your business.",
    buttonText: "Use Lender Match",
    imageUrl: "https://www.sba.gov/sites/default/files/styles/card/public/2022-04/handshake-opt.jpg.webp?itok=H5LjVJGY"
  },
  {
    id: 3,
    title: "Home & business disaster loans",
    description: "Apply for a low-interest disaster loan to help recover from declared disasters.",
    buttonText: "Apply for assistance",
    imageUrl: "https://www.sba.gov/sites/default/files/styles/card/public/2022-04/SBA_Disaster-Image%20%281%29_0.png.webp?itok=vGOvzRBb"
  },
  {
    id: 4,
    title: "Federal government contracting",
    description: "Learn how to find and win small business government contracts.",
    buttonText: "Find contracts",
    imageUrl: "https://www.sba.gov/sites/default/files/styles/card/public/2022-04/contracting-opt.jpg.webp?itok=PUsXf5ty"
  }
];

// --- El Componente ---
function BusinessHelpSection() {
  return (
    <section className="p-4 font-sans bg-white">
      
      {/* Título de la sección */}
      <h2 className="text-4xl font-normal text-blue-900  mb-8">
        How we help small businesses
      </h2>
      
      {/* Contenedor de la cuadrícula (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Mapeo de los datos para crear cada tarjeta */}
        {services.map((service) => (
          
          // Tarjeta individual
          <div 
            key={service.id} 
            className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-sm flex flex-col"
          >
            
            {/* Imagen de la tarjeta */}
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-40 object-cover" // object-cover evita que la imagen se deforme
            />
            
            {/* Contenido de la tarjeta */}
            <div className="p-5 flex flex-col flex-grow"> {/* flex-grow hace que el botón se alinee abajo */}
              
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 flex-grow"> {/* flex-grow empuja el botón */}
                {service.description}
              </p>
              
              {/* Botón de la tarjeta */}
              <a 
                href="#" // En una app real, aquí iría el enlace (ej: /find-counselors)
                className="mt-auto w-full text-center bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                {service.buttonText}
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default BusinessHelpSection;