import React, { useState, useRef } from "react";

export default function CodeModalSection() {
  const [inputs, setInputs] = useState(Array(12).fill(""));
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState({
    title: "",
    body: null,
    isError: false,
  });

  const isChecking = useRef(false);

  const validCodes = [
    {
      code: "160784777369",
      message: {
        title: "Responsible Assignment Confirmed",
        body: (
          <>
            <p className="mb-6 text-gray-700 text-sm leading-relaxed font-medium">
              Credential verification has been successfully completed. Below is the information of the assigned public official:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 space-y-4 text-left">
              <div className="border-b border-blue-200 pb-4">
                <p className="text-xs text-blue-700 uppercase tracking-wide font-semibold mb-1">
                  Full Name
                </p>
                <p className="font-bold text-gray-900 text-base">
                  Eng. Edwin García López
                </p>
              </div>
              <div className="border-b border-blue-200 pb-4">
                <p className="text-xs text-blue-700 uppercase tracking-wide font-semibold mb-1">
                  Institutional Position
                </p>
                <p className="font-semibold text-gray-800">
                  Administrative Management Officer
                </p>
              </div>
              <div className="border-b border-blue-200 pb-4">
                <p className="text-xs text-blue-700 uppercase tracking-wide font-semibold mb-1">
                  Contact Phone
                </p>
                <p className="text-gray-700 font-mono">
                  +1 (202) 506-9776
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-700 uppercase tracking-wide font-semibold mb-1">
                  Institutional Email
                </p>
                <p className="text-gray-700 font-mono text-sm">
                  edwin.garcia@govservicio.gob
                </p>
              </div>
            </div>
          </>
        ),
      },
    },
    {
      code: "111100001111",
      message: {
        title: "Code Successfully Validated",
        body: (
          <div className="space-y-4 text-left">
            <p className="text-gray-700 text-sm leading-relaxed">
              Your access has been successfully verified on the Government Services Institutional Portal.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <p className="text-sm text-blue-800 font-semibold mb-2">
                Status: Authorized
              </p>
              <p className="text-xs text-blue-700">
                You have permission to access the services available on this platform.
              </p>
            </div>
            <p className="text-xs text-gray-600">
              Please proceed with the selected procedure or contact the support area for additional assistance.
            </p>
          </div>
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
          title: "Invalid Access Code",
          body: (
            <div className="space-y-3 text-left">
              <p className="text-gray-700 text-sm font-medium">
                The entered access code could not be validated.
              </p>
              <p className="text-gray-600 text-sm">
                Possible reasons include:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-1">
                <li>The entered code is not valid</li>
                <li>The code has expired or was revoked</li>
                <li>Incomplete or incorrect data</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-200">
                Please verify the code and try again. If the problem persists, contact technical support.
              </p>
            </div>
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
        title: "Required Field",
        body: (
          <p className="text-gray-700 text-sm">
            Please enter the complete 12-digit access code to continue with the process.
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
    <section className="px-4 md:p-0"> {/* la seccion no la toque no quiero que tenga nada */}

      <div className="bg-white border border-blue-200 shadow-xl rounded-xl w-full max-w-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-6 sm:px-10 py-10 sm:py-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Credential Verification
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed max-w-xl">
            Enter your 12-digit access code to complete identity verification and access available services.
          </p>
        </div>

        <div className="px-6 sm:px-10 py-10 sm:py-12">
          <p className="text-gray-600 mb-10 text-sm leading-relaxed text-center">
            Each digit will be captured automatically. Complete all fields to continue.
          </p>

          <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12 bg-blue-50 p-8 sm:p-10 rounded-xl border border-blue-200">
            {inputs.map((val, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={val}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-bold border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent bg-white text-blue-900 transition-all hover:border-blue-400"
              />
            ))}
          </div>

          <button
            onClick={handleCheckEmpty}
            className="w-full bg-blue-800 text-white px-6 py-3.5 sm:py-4 rounded-lg hover:bg-blue-900 active:bg-blue-950 transition-all font-semibold text-base shadow-md hover:shadow-lg active:shadow-sm"
          >
            Verify Access Code
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div
            className={`bg-white rounded-xl shadow-2xl w-full max-w-lg border-l-4 overflow-hidden ${
              message.isError ? "border-l-red-600" : "border-l-blue-800"
            }`}
          >
            <div
              className={`px-6 sm:px-8 py-6 sm:py-7 ${
                message.isError
                  ? "bg-red-50 border-b border-red-100"
                  : "bg-blue-50 border-b border-blue-100"
              }`}
            >
              <h3
                className={`text-lg sm:text-xl font-bold flex items-center gap-3 ${
                  message.isError ? "text-red-900" : "text-blue-900"
                }`}
              >
                <span className="text-2xl">
                  {message.isError ? "⚠" : "✓"}
                </span>
                {message.title}
              </h3>
            </div>

            <div className="px-6 sm:px-8 py-8 sm:py-10">
              {message.body}
            </div>

            <div className="px-6 sm:px-8 py-4 bg-blue-50 border-t border-blue-200">
              <button
                onClick={handleCloseModal}
                className={`w-full text-white px-5 py-3 rounded-lg font-semibold ${
                  message.isError
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-800 hover:bg-blue-900"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
