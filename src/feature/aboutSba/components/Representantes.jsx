export default function Representantes() {
  const representantes = [
    ["(202) 506 9776", "Edwin García"]
  ];

  return (
    <section className="max-w-4xl mx-auto  py-12 font-sans text-blue-900">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Representatives</h2>

      {/* Desktop/Tableta (tabla) */}
      <div className="overflow-x-auto border border-gray-300 hidden md:block">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Phone</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Name</th>
            </tr>
          </thead>
          <tbody>
            {representantes.map(([telefono, nombre]) => (
              <tr key={nombre} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{telefono}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-800">
                  <a href="#" className="underline hover:text-blue-900">{nombre}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Móvil (tarjetas apiladas) */}
      <div className="md:hidden divide-y-2 divide-gray-800 border border-gray-300">
        {representantes.map(([telefono, nombre]) => (
          <div key={nombre} className="bg-white">
            <div className="px-4 py-3">
              <div className="text-lg font-semibold">Phone</div>
              <div>{telefono}</div>
            </div>
            <div className="border-t border-gray-300 px-4 py-3">
              <div className="text-lg font-semibold">Name</div>
              <a href="#" className="text-blue-800 underline">{nombre}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
