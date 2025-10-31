export default function Tablas() {
  const headquarters = [
    ["Kelly Loeffler", "SBA Administrator", "Office of the Administrator"],
    ["William (Bill) Briggs", "Deputy Administrator", "Office of the Administrator"],
    ["Wesley Coopersmith", "Chief of Staff", "Office of the Administrator"],
    ["Ben Grayson", "Deputy Chief of Staff", "Office of the Administrator"],
    ["Hailey Ghee", "Deputy Chief of Staff for Implementation", "Office of the Administrator"],
    ["Gregory Tierney", "White House Liaison", "Office of the Administrator"],
    ["Samuel Paepke", "Deputy White House Liaison", "Office of the Administrator"],
    ["Robin Wright", "Chief Operating Officer", "Office of the Administrator"],
    ["Casey Mulligan", "Chief Counsel for Advocacy", "Office of Advocacy"],
    ["Major Clark", "Deputy Chief Counsel for Advocacy", "Office of Advocacy"],
    ["Thomas Kimsey", "Associate Administrator", "Office of Capital Access"],
    ["John Miller", "Deputy Associate Administrator", "Office of Capital Access"],
    ["Dianna Seaborn", "Deputy Associate Administrator", "Office of Capital Access"],
    ["Hartley Caldwell", "Chief Information Officer", "Office of the Chief Information Officer"],
    ["Douglas Robertson", "Deputy Chief Information Officer", "Office of the Chief Information Officer"],
    ["Caitlin O'Dea", "Associate Administrator", "Office of Communications & Public Liaison"],
    ["Michael Joyce", "Deputy Associate Administrator", "Office of Communications & Public Liaison"],
    ["Robby Wehagen, III", "Associate Administrator", "Office of Congressional & Legislative Affairs"],
    ["Chris Stallings", "Associate Administrator", "Office of Disaster Recovery & Resilience"],
    ["Randle Logan", "Deputy Associate Administrator (Acting)", "Office of Disaster Recovery & Resilience"],
    ["Paul Fitzpatrick", "Associate Administrator", "Office of Entrepreneurial Development"],
    ["Lisa Shimkat", "Associate Administrator", "Office of Field Operations"],
    ["Elias Hernandez", "Deputy Associate Administrator (Acting)", "Office of Field Operations"],
    ["Jorge Pinon", "Special Assistant", "Office of Field Operations"],
    ["Wendell Davis", "General Counsel", "Office of General Counsel"],
    ["John Klein", "Deputy General Counsel", "Office of General Counsel"],
    ["Dr. Tre Pennie", "Associate Administrator", "Office of Government Contracting & Business Development"],
    ["Larry Stubblefield", "Deputy Associate Administrator", "Office of Government Contracting & Business Development"],
    ["Chris Holleman", "Assistant Administrator (Acting)", "Office of Hearings & Appeals"],
    ["John Serpa", "Chief Human Capital Officer", "Office of Human Resources Solutions"],
    ["Julie Brill", "Deputy Chief Human Capital Officer", "Office of Human Resources Solutions"],
    ["Vacant", "Inspector General", "Office of Inspector General"],
    ["Sheldon Shoemaker", "Deputy Inspector General", "Office of Inspector General"],
    ["Shafee Carnegie", "Assistant Inspector General for Investigations", "Office of Inspector General"],
    ["Andrea Deadwyler", "Assistant Inspector General for Audits", "Office of Inspector General"],
    ["Hala Nsouli", "Assistant Inspector General for Technology Solutions", "Office of Inspector General"],
    ["Francine Hines", "Assistant Inspector General for Management and Operations", "Office of Inspector General"],
    ["Joshua Carter", "Associate Administrator", "Office of Investment and Innovation"],
    ["Thomas Morris", "Deputy Associate Administrator (Acting)", "Office of Investment and Innovation"],
    ["Lisa Shimkat", "Associate Administrator (Acting)", "Office of Manufacturing and Trade"],
    ["David Bolls", "Deputy Associate Administrator", "Office of Manufacturing and Trade"],
    ["Robert Bolen", "National Ombudsman", "Office of the National Ombudsman"],
    ["Diane Cullo", "Assistant Administrator", "Office of Native American Affairs"],
    ["Nathan Davis", "Chief Financial Officer & Chief Risk Officer", "Office of Performance, Planning, and the Chief Financial Officer"],
    ["Deborah Chen", "Deputy Chief Financial Officer", "Office of Performance, Planning, and the Chief Financial Officer"],
    ["Bruce Purdy", "Associate Administrator", "Office of Small Business Development Centers"],
    ["Timothy Green", "Associate Administrator (Acting)", "Office of Veterans Business Development"],
    ["Elizabeth Habib", "Assistant Administrator", "Office of Women's Business Ownership"],
  ];

  const regional = [
    ["Peter Steele", "Regional Administrator", "New England Regional Office"],
    ["Matt Coleman", "Regional Administrator", "Atlantic Regional Office"],
    ["Jim Spencer", "Regional Administrator", "Mid-Atlantic Regional Office"],
    ["Tyler Teresa", "Regional Administrator", "Southeast Regional Office"],
    ["Everett M. Woodel, Jr.", "Regional Administrator", "Great Lakes Regional Office"],
    ["Justin Crossie", "Regional Administrator", "South Central Regional Office"],
    ["Brad Zaun", "Regional Administrator", "Great Plains Regional Office"],
    ["Justin Everett", "Regional Administrator", "Rocky Mountain Regional Office"],
    ["Steven Snow", "Regional Administrator", "Pacific Regional Office"],
    ["Apollo Fuhriman", "Regional Administrator", "Pacific Northwest Regional Office"],
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans ">
      <p className="text-lg leading-7 mb-10 max-w-3xl">
        Regardless of where our staff is located, their commitment is
        universal—to help Americans start, build and grow businesses. In
        carrying out SBA’s mission each day, we work collectively to advocate
        for small businesses, empower the spirit of entrepreneurship within
        every community, and deliver the results necessary to help America’s
        small businesses succeed. Meet just a few of our leaders in this
        section.
      </p>

      {/* ===================== TABLA 1 ===================== */}
      <h2 className="text-4xl font-bold mb-6 text-blue-800">SBA Headquarters</h2>

      {/* Desktop/Tableta (tabla) */}
      <div className="overflow-x-auto border border-gray-300 hidden md:block">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Name</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Title</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Office</th>
            </tr>
          </thead>
          <tbody>
            {headquarters.map(([name, title, office]) => (
              <tr key={name} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-blue-800">
                  <a href="#" className="underline hover:text-blue-900">{name}</a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{title}</td>
                <td className="border border-gray-300 px-4 py-2">{office}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Móvil (tarjetas apiladas) */}
      <div className="md:hidden divide-y-2 divide-gray-800 border border-gray-300">
        {headquarters.map(([name, title, office]) => (
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
              <div className="text-lg font-semibold">Office</div>
              <div>{office}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Separación entre tablas */}
      <hr className="my-12 border-gray-300" />

      {/* ===================== TABLA 2 ===================== */}
      <h2 className="text-4xl font-bold mb-6 text-blue-800">SBA Regional Offices</h2>

      {/* Desktop/Tableta (tabla) */}
      <div className="overflow-x-auto border border-gray-300 hidden md:block">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Name</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Title</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold">Office</th>
            </tr>
          </thead>
          <tbody>
            {regional.map(([name, title, office]) => (
              <tr key={name} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 ">
                  <a href="#" className="underline ">{name}</a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{title}</td>
                <td className="border border-gray-300 px-4 py-2">{office}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Móvil (tarjetas apiladas) */}
      <div className="md:hidden divide-y-2 divide-gray-800 border border-gray-300">
        {regional.map(([name, title, office]) => (
          <div key={name} className="bg-white">
            <div className="px-4 py-3">
              <div className="text-lg font-semibold">Name</div>
              <a href="#" className="underline">{name}</a>
            </div>
            <div className="border-t border-gray-300 px-4 py-3">
              <div className="text-lg font-semibold">Title</div>
              <div>{title}</div>
            </div>
            <div className="border-t border-gray-300 px-4 py-3">
              <div className="text-lg font-semibold">Office</div>
              <div>{office}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pie */}
      <hr className="border-2 border-gray-500 h-1 w-12 my-4" />
      <p>
        Short URL: sba.gov/leadership <br />
        Last updated September 16, 2025
      </p>
    </section>
  );
}
