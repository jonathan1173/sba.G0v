import { useState, useRef } from "react";

export default function CodeModalSection() {
  const [inputs, setInputs] = useState(Array(10).fill(""));
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const isChecking = useRef(false);

  const validCodes = [
    { code: "8008275722", message: "Código verificado. Acceso autorizado al sistema de atención al ciudadano." },
    { code: "1234567890", message: "Código válido. Bienvenido al portal institucional de atención." },
  ];

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value && index < inputs.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }

    const isFull = newInputs.every((val) => val !== "");
    if (isFull && !isChecking.current) {
      isChecking.current = true;
      const fullCode = newInputs.join("");
      const found = validCodes.find((item) => item.code === fullCode);

      if (found) {
        setMessage(found.message);
        setShowModal(true);
      } else {
        alert("El código ingresado no es válido.");
        setInputs(Array(10).fill(""));
        document.getElementById("code-input-0").focus();
      }
      setTimeout(() => (isChecking.current = false), 500);
    }
  };

  const handleCheckEmpty = () => {
    if (inputs.every((val) => val === "")) {
      alert("Por favor, ingrese el código completo antes de continuar.");
      document.getElementById("code-input-0").focus();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-[85vh] bg-gray-50 p-6">
      <div className="bg-white py-5 px-10  border border-gray-300 shadow-md rounded-md p-8 w-full h-full flex items-center justify-center flex-col text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Verificación de Código de Atención al Ciudadano
        </h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Ingrese el código numérico proporcionado por la entidad para acceder al sistema de atención.
        
        </p>

        <div className="flex justify-center space-x-2 mb-6">
          {inputs.map((val, index) => (
            <div key={index} className="flex items-center">
              <input
                id={`code-input-${index}`}
                type="text"
                value={val}
                onChange={(e) => handleChange(e.target.value, index)}
                maxLength="1"
                className="w-10 h-12 text-center text-lg border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {(index === 2 || index === 5) && (
                <span className="mx-1 text-gray-400">-</span>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleCheckEmpty}
          className="bg-blue-700 text-white px-5 py-2 rounded-sm hover:bg-blue-800 transition"
        >
          Verificar Código
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center max-w-md border-t-4 border-blue-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">{message}</h3>
            <button
              onClick={() => {
                setShowModal(false);
                setInputs(Array(10).fill(""));
                document.getElementById("code-input-0").focus();
              }}
              className="bg-blue-700 text-white px-5 py-2 rounded-sm hover:bg-blue-800 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
