import React, { useState, useRef } from "react";

export default function CodeModalSection() {
  // 12 dígitos → XXX-XXX-XXX-XXX
  const [inputs, setInputs] = useState(Array(12).fill(""));
  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState({
    title: "",
    body: null,
    isError: false,
  });

  const isChecking = useRef(false);

  // Códigos válidos de ejemplo
  const validCodes = [
    {
      code: "160784777369",
      message: {
        title: "Assigned contact",
        body: (
          <>
            <p className="mb-3 text-gray-700">
              This code is associated with the following responsible party:
            </p>

            <div className="bg-gray-50 border rounded p-3">
              <p className="font-semibold text-gray-800">Edwin García</p>
              <p className="text-gray-700">📞 (202) 506-9776</p>
            </div>
          </>
        ),
      },
    },
    {
      code: "111100001111",
      message: {
        title: "Código válido",
        body: (
          <p className="text-gray-700">
            Welcome to the institutional service portal.
          </p>
        ),
      },
    },
  ];

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value && index < newInputs.length - 1) {
      document.getElementById(`code-input-${index + 1}`)?.focus();
    }

    const isFull = newInputs.every((val) => val !== "");

    if (isFull && !isChecking.current) {
      isChecking.current = true;

      const fullCode = newInputs.join("");
      const found = validCodes.find((item) => item.code === fullCode);

      if (found) {
        setMessage({
          title: found.message.title,
          body: found.message.body,
          isError: false,
        });
      } else {
        setMessage({
          title: "Código inválido",
          body: (
            <p className="text-gray-700">
              The access code you entered is invalid. Please try again.
            </p>
          ),
          isError: true,
        });
      }

      setShowModal(true);
      setTimeout(() => (isChecking.current = false), 500);
    }
  };

  const handleCheckEmpty = () => {
    if (inputs.every((val) => val === "")) {
      setMessage({
        title: "Código requerido",
        body: (
          <p className="text-gray-700">
            Please enter the complete 12-digit access code to proceed.
          </p>
        ),
        isError: true,
      });
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setInputs(Array(12).fill(""));
    document.getElementById("code-input-0")?.focus();
  };

  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="bg-white py-6 px-4 sm:px-10 sm:py-8 border border-gray-300 shadow-md rounded-md w-full max-w-2xl text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          Citizen Service Portal – Code Verification
        </h2>

        <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-lg mx-auto">
          Please enter the 12-digit access code provided to you to access the
          system.
        </p>

        {/* INPUTS XXX-XXX-XXX-XXX */}
        <div className="flex justify-center items-center flex-wrap gap-y-2 mb-6">
          {inputs.map((val, index) => (
            <React.Fragment key={index}>
              <input
                id={`code-input-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={val}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-8 h-10 sm:w-10 sm:h-12 text-center text-lg border border-gray-400 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />

              {(index === 2 || index === 5 || index === 8) && (
                <span className="mx-2 text-gray-400 text-xl select-none">-</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          onClick={handleCheckEmpty}
          className="bg-blue-700 text-white px-5 py-2 rounded-sm hover:bg-blue-800 transition text-base font-medium"
        >
          Verify Code
        </button>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className={`bg-white p-6 rounded-md shadow-lg w-full max-w-md border-t-4 ${
              message.isError ? "border-red-600" : "border-blue-700"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
              {message.title}
            </h3>

            <div className="mb-6 text-center">{message.body}</div>

            <button
              onClick={handleCloseModal}
              className={`w-full text-white px-5 py-2 rounded-sm transition ${
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
