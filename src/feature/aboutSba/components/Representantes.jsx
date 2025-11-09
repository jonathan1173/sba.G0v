export default function NaturalDisasters() {
  const representatives = [
    ["Laura Thompson", "Flood Management Coordinator", "Miami, FL"],
    ["Michael Rivera", "Natural Disaster Specialist", "Houston, TX"],
    ["Edwin García", "Emergency Response Director", "Washington, D.C."],
    ["Sofia Martínez", "Relief Operations Supervisor", "Los Angeles, CA"],
    ["Daniel Cooper", "Community Recovery Officer", "New York, NY"]
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans">
      <p className="text-lg leading-7 mb-10 max-w-3xl">
        Our team is dedicated to supporting communities affected by natural disasters and floods. 
        We coordinate response efforts, provide recovery resources, and ensure that assistance 
        reaches those who need it most. Meet some of our leaders working across the nation to 
        keep communities safe and resilient.
      </p>

      <h2 className="text-4xl font-bold mb-6 text-blue-800">
        Natural Disasters and Floods
      </h2>

      {/* Desktop/Tableta (tabla) */}
      <div className="overflow-x-auto border border-gray-300 hidden md:block">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Name</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Title</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Location</th>
            </tr>
          </thead>
          <tbody>
            {representatives.map(([name, title, location]) => (
              <tr key={name} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-blue-800">
                  <a href="#" className="underline hover:text-blue-900">{name}</a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{title}</td>
                <td className="border border-gray-300 px-4 py-2">{location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Móvil (tarjetas apiladas) */}
      <div className="md:hidden divide-y-2 divide-gray-800 border border-gray-300">
        {representatives.map(([name, title, location]) => (
          <div key={name} className="bg-white">
            <div className="px-4 py-3">
              <div className="text-lg font-semibold">Name</div>
              <a href="#" className="text-blue-800 underline">{name}</a>
            </div>
            <div className="border-t border-gray-300 px-4 py-3">
              <div className="text-lg font-semibold">Title</div>
              <div>{title}</div>
            </div>
            <div className="border-t border-gray-300 px-4 py-3">
              <div className="text-lg font-semibold">Location</div>
              <div>{location}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pie */}
      <hr className="border-2 border-gray-500 h-1 w-12 my-4" />
      
    </section>
  );
}
