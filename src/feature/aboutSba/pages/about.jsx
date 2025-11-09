import Direcciones from "../components/direcciones";
import SidebarNav from "../components/panel";
import Tablas from "../components/tablas";
import Representantes from "../components/Representantes";

export default function AboutSba() {
  return (
    <div className="font-sans ">
      <Direcciones />

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto  md:px-8 py-4">
        {/* GRID: sidebar | contenido */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] gap-x-10 gap-y-8">
          {/* Sidebar */}
          <aside className="md:pr-4 hidden md:block">
            <SidebarNav />
          </aside>

          {/* Contenido */}
          <main className="pt-2">
            <section>
              {/* Título principal */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 px-4 text-blue-900">
                SBA leadership
              </h1>

              {/* Descripción */}
              <p className="text-xl leading-7 mb-10 max-w-3xl px-4 text-blue-900">
                Learn about SBA leaders and their commitment to help Americans
                start and grow businesses.
              </p>

              {/* Línea roja decorativa */}
              <div className="w-10 h-[3px] bg-red-600 mb-4 mx-4"></div>

              {/* Subtítulo */}
              <h2 className="text-3xl font-semibold mb-6 text-blue-800 px-4">Content</h2>

              {/* Enlaces */}
              <ul className="space-y-4 px-4">
                <li>
                  <a
                    href="#"
                    className="text-blue-800 underline hover:text-blue-900"
                  >
                    SBA Headquarters
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-800 underline hover:text-blue-900"
                  >
                    SBA Regional Offices
                  </a>
                </li>
              </ul>

              {/* Separador inferior como en la vista */}
              <hr className="mt-16 border-gray-300" />
            </section>

            <Representantes/>

            <Tablas/>
          </main>
        </div>
      </div>
    </div>
  );
}
