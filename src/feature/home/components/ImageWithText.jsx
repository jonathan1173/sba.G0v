  import React from 'react';

  const ImageWithText = () => {
    const imageUrl = 'https://www.sba.gov/sites/default/files/styles/image_cta_800x600/public/2025-05/Edited%20CTA%20image.jpg.webp?itok=3Oqhff6p';

    return (
      <section className="bg-white ">
        <div className="container mx-auto px-4 max-h-[800px]">
          <div className="flex flex-col overflow-hidden shadow-lg md:flex-row">
            {/* Columna de la Imagen */}
            <div className="w-full md:w-1/3">
              <img 
                src={imageUrl} 
                alt="Trabajador de la construcción llevando una viga de madera" 
                className="h-full w-full object-cover" 
              />
            </div>
            {/* Columna del Texto */}
            <div className="flex w-full flex-col justify-center bg-blue-900 py-10 px-6 text-white md:w-2/3">
              <h2 className="mb-4 text-4xl font-semibold">
                Make Onshoring Great Again
              </h2>
              <p className="mb-8 text-sx">
                SBA's onshoring portal helps connect businesses with verified U.S. manufacturers, producers, and suppliers.
              </p>
              <a 
                href="#" 
                className="w-fit rounded-md bg-[#0073b7] text-center md:text-left px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#005a94]"
              >
                Find onshoring resources
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ImageWithText;

