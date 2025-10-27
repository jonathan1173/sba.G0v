import React from 'react';

function StartBusinessCTA() {
  return (
    <section className="bg-blue-900 flex flex-col justify-center  text-white font-sans mx-3 py-16 px-8 md:px-12 lg:px-16">
      
      {/* Título Principal */}
      <h2 className="text-4xl font-semibold mb-4">
        Start and grow your business
      </h2>
      
      {/* Línea decorativa roja */}
      <div className="w-16 h-1 bg-red-600 mb-6"></div>
      
      {/* Párrafo de descripción */}
      <p className="text-lg mb-8">
        Want to be an entrepreneur? Learn how to get started on your business in 10 steps.
      </p>
      
      {/* Botón de acción */}
      <a
        href="#" // Aquí iría el enlace real, ej: "/start-business"
        className="inline-block bg-blue-500 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
      >
        Start a business
      </a>
      
    </section>
  );
}

export default StartBusinessCTA;