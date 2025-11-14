import React, { useState, useRef } from "react";
// No se importa ninguna librería externa

export default function CodeModalSection() {
  const [inputs, setInputs] = useState(Array(10).fill(""));
  const [showModal, setShowModal] = useState(false);
  
  // El estado del mensaje rastrea el texto Y si es un error
  const [message, setMessage] = useState({ text: "", isError: false });
  
  const isChecking = useRef(false);

  // Textos de mensajes traducidos
  const validCodes = [
    {
      code: "8008275722",
      message: "Code Verified. Access to the citizen service system has been authorized.",
    },
    {
      code: "1234567890",
      message: "Code Valid. Welcome to the institutional service portal.",
    },
  ];

  const handleChange = (value, index) => {
    // Permitir solo números
    if (!/^[0-9]?$/.test(value)) return;
    
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    // Auto-focus al siguiente input
    if (value && index < inputs.length - 1) {
      try {
        document.getElementById(`code-input-${index + 1}`).focus();
      } catch (e) {
        console.warn("Could not focus next input", e);
      }
    }

    const isFull = newInputs.every((val) => val !== "");
    
    // Si el código está completo, verificarlo
    if (isFull && !isChecking.current) {
      isChecking.current = true;
      const fullCode = newInputs.join("");
      const found = validCodes.find((item) => item.code === fullCode);

      if (found) {
        // Usar el modal para Éxito
        setMessage({ text: found.message, isError: false });
        setShowModal(true);
      } else {
        // Usar el modal para Error (en lugar de alert)
        setMessage({
          text: "The access code you entered is invalid. Please try again.",
          isError: true,
        });
        setShowModal(true);
      }
      setTimeout(() => (isChecking.current = false), 500);
    }
  };

  const handleCheckEmpty = () => {
    // Verificar si todos los campos están vacíos
    if (inputs.every((val) => val === "")) {
      // Usar el modal para Error (en lugar de alert)
      setMessage({
        text: "Please enter the complete 10-digit code to proceed.",
        isError: true,
      });
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Resetear formulario y enfocar el primer input
    setInputs(Array(10).fill(""));
    try {
      document.getElementById("code-input-0").focus();
    } catch (e) {
      console.warn("Could not focus input-0 on modal close", e);
    }
  };

  return (
    // UI ADAPTADA A MÓVIL: min-h, p-4 en móvil
    <section className="flex flex-col items-center justify-center bg-gray-50 p-4 sm:p-6">
      
      {/* UI ADAPTADA A MÓVIL: padding, max-w, h-auto */}
      <div className="bg-white py-6 px-4 sm:px-10 sm:py-8 border border-gray-300 shadow-md rounded-md w-full max-w-2xl h-auto flex items-center justify-center flex-col text-center">
        
        {/* Textos traducidos y adaptados a móvil */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          Citizen Service Portal – Code Verification
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed max-w-lg">
          Please enter the 10-digit access code provided to you to access the system.
        </p>

        {/* UI ADAPTADA A MÓVIL: flex-wrap para los inputs */}
        <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-6 flex-wrap">
          {inputs.map((val, index) => (
            <React.Fragment key={index}>
              <input
                id={`code-input-${index}`}
                type="text"
                inputMode="numeric" // Ayuda a mostrar el teclado numérico en móvil
                value={val}
                onChange={(e) => handleChange(e.target.value, index)}
                maxLength="1"
                // UI ADAPTADA A MÓVIL: Inputs más pequeños en móvil
                className="w-8 h-10 sm:w-10 sm:h-12 text-center text-lg border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600 my-1"
              />
              {/* LÓGICA CORREGIDA: Separador fuera del div */}
              {(index === 2 || index === 5) && (
                <span className="text-gray-400 text-xl mx-1">-</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Texto traducido */}
        <button
          onClick={handleCheckEmpty}
          className="bg-blue-700 text-white px-5 py-2 rounded-sm hover:bg-blue-800 transition text-base font-medium"
        >
          Verify Code
        </button>
      </div>

      {/* MODAL ACTUALIZADO: Sin iconos, solo React puro */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          
          {/* UI ADAPTADA A MÓVIL: El modal es responsivo */}
          <div
            className={`bg-white p-6 rounded-md shadow-lg text-center w-full max-w-md border-t-4 ${
              message.isError ? "border-red-600" : "border-blue-700"
            }`}
          >
            {/* *** ICONOS ELIMINADOS *** */}
            
            <h3 className="text-lg font-semibold my-4 text-gray-800">
              {message.text}
            </h3>
            
            <button
              onClick={handleCloseModal}
              // Texto traducido y color del botón coincide con el estado
              className={`text-white px-5 py-2 rounded-sm transition w-full ${
                message.isError
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-700 hover:bg-blue-800"
              }`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}