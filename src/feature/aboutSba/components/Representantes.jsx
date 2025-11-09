export default function NaturalDisasters() {
  const representatives = [
    ["(305) 789 4412", "Laura Thompson"],
    ["(415) 222 8899", "Michael Rivera"],
    ["(202) 506 9776", "Edwin García"],
    ["(713) 664 3321", "Sofia Martínez"],
    ["(617) 904 5567", "Daniel Cooper"]
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans">
      <h2 className="text-4xl font-bold mb-6 text-blue-800">
        Natural Disasters 
      </h2>

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
            {representatives.map(([Phone, Name]) => (
              <tr key={name} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-blue-800">
                  <a href="#" className="underline hover:text-blue-900">{Phone}</a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Móvil (tarjetas apiladas) */}
      <div className="md:hidden divide-y-2 divide-gray-800 border border-gray-300">
        {representatives.map(([Phone, Name]) => (
          <div key={name} className="bg-white">
            <div className="px-4 py-3">
              <div className="text-lg font-semibold">Phone</div>
              <a href="#" className="text-blue-800 underline">{Phone}</a>
            </div>
            <div className="border-t border-gray-300 px-4 py-3">
              <div className="text-lg font-semibold">Name</div>
              <div>{Name}</div>
            </div>
         
          </div>
        ))}
      </div>

      {/* Pie */}
      <hr className="border-2 border-gray-500 h-1 w-12 my-4" />

    </section>
  );
}
