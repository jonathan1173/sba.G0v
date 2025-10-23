import { useState, useRef } from "react";

export default function CodeModalSection() {
  const [inputs, setInputs] = useState(Array(10).fill(""));
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const isChecking = useRef(false); // evita alertas repetidos

  // Array con códigos válidos y sus mensajes
  const validCodes = [
    { code: "8008275722", message: "Código correcto. Bienvenido al sistema." },
    { code: "1234567890", message: "Acceso permitido para el código alternativo." },
  ];

  // Manejar cambio en los inputs
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Solo números
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    // Mover foco automáticamente
    if (value && index < inputs.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }

    // Verificar si todos los dígitos están llenos
    const isFull = newInputs.every((val) => val !== "");
    if (isFull && !isChecking.current) {
      isChecking.current = true; // evita que se dispare varias veces
      const fullCode = newInputs.join("");
      const found = validCodes.find((item) => item.code === fullCode);

      if (found) {
        setMessage(found.message);
        setShowModal(true);
      } else {
        alert("El código no coincide.");
        setInputs(Array(10).fill(""));
        document.getElementById("code-input-0").focus();
      }
      setTimeout(() => (isChecking.current = false), 500); // reactivar chequeo luego
    }
  };

  // Si el usuario intenta enviar sin completar
  const handleCheckEmpty = () => {
    if (inputs.every((val) => val === "")) {
      alert("Por favor, ingrese el código completo.");
      document.getElementById("code-input-0").focus();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-[80vh]  p-6">
      <h2 className="text-xl font-semibold mb-4">Ingrese su código</h2>

      <div className="flex space-x-2 mb-4">
        {inputs.map((val, index) => (
          <div key={index} className="flex items-center">
            <input
              id={`code-input-${index}`}
              type="text"
              value={val}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength="1"
              className="w-10 h-12 text-center text-lg border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {(index === 2 || index === 5) && (
              <span className="mx-2 text-xl font-bold text-gray-600">-</span>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleCheckEmpty}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Verificar código
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
            <h3 className="text-lg font-semibold mb-4">{message}</h3>
            <button
              onClick={() => {
                setShowModal(false);
                setInputs(Array(10).fill(""));
                document.getElementById("code-input-0").focus();
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
