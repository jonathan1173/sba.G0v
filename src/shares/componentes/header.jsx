import React from "react";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="https://www.sba.gov/themes/custom/sba/dist/img/logo-icon.svg"
            alt="SBA U.S. Small Business Administration"
            className="h-16 mr-4"
          />
          <p className="text-[16px] text-blue-900">
            U.S. Small Business <br /> administration <br /> Grants Department
          </p>
        </div>

        <div className="flex flex-col items-end space-y-3">
          {/* btn cambio de idioma */}
          <button className="rounded-md bg-[#0072c6] px-5 py-1 text-lg font-bold text-white hover:bg-blue-900">
            Español
          </button>

          {/* Enlaces */}
          <div>
            {/* Navigation links */}
            <nav className="flex items-center space-x-1 text-[18px]">
              <a href="https://www.sba.gov/partners" className="text-blue-900 underline">
                For Partners
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.sba.gov/about-sba/sba-newsroom" className="text-blue-800 underline">
                Newsroom
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.sba.gov/about-sba/organization/contact-sba" className="text-blue-800 underline">
                Contact us
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.sba.gov/about-sba/information-other-languages" className="text-blue-800 underline">
                Other languages
              </a>
            </nav>
          </div>

          {/* barra de busqueda */}
          <div className="flex">
            <input
              type="text"
              placeholder=""
              className="w-56 border border-r-0 border-black px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="flex items-center justify-center rounded-r-md bg-[#0072c6] p-2 text-white hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-300"></div>{" "}
      {/* Bottom thin gray line */}
    </header>
  );
};

export default Header;
