import React from "react";

export default function SidebarNav() {
  return (
    <nav
      className="w-[280px] bg-white text-[16px] leading-6 select-none font-sans "
      aria-label="Main navigation"
    >
      <ul className="py-2">
        <li className="border-b border-black">
          <a href="https://www.sba.gov/about-sba/sba-locations" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
            SBA locations
          </a>
        </li>
        <li className="border-b border-black">
          <a href="https://www.sba.gov/about-sba/open-government" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
            Open government
          </a>
        </li>
        <li className="border-b border-black">
          <a href="https://www.sba.gov/about-sba/sba-newsroom" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
            SBA Newsroom
          </a>
        </li>
        <li className="border-b border-black">
          <a href="https://www.sba.gov/about-sba/work-sba" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
            Work for SBA
          </a>
        </li>

        {/* Organization section */}
        <li className="pt-2 border-b border-black">
          <div className="flex items-center border-l-4  border-blue-900 bg-gray-100 font-semibold hover:text-blue-900 px-4 py-2 hover:bg-black/20">
            Organization
          </div>

          <ul className="ml-4 border-l-4 border-blue-900 my-2">
            <li className="border-b border-black">
              <a href="https://www.sba.gov/about-sba/organization/sba-leadership" className="block bg-blue-900 text-white px-4 py-2 ">
                SBA leadership
              </a>
            </li>
            <li className="border-b border-black">
              <a href="https://www.sba.gov/about-sba/organization/contact-sba" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
                Contact SBA
              </a>
            </li>
            <li className="border-b border-black">
              <a href="https://www.sba.gov/documents" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
                Forms and documents
              </a>
            </li>
            <li className="border-b border-black">
              <a href="https://www.sba.gov/about-sba/organization/observances" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
                Observances
              </a>
            </li>
            <li className="border-b border-black">
              <a href="https://www.sba.gov/about-sba/organization/performance" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
                Performance
              </a>
            </li>
            <li className="border-b border-black">
              <a href="https://www.sba.gov/about-sba/organization/federal-advisory-committees" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
                Federal advisory committees
              </a>
            </li>
          </ul>
        </li>

        <li className="border-b border-black">
          <a href="https://www.sba.gov/about-sba/oversight-advocacy" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
            Oversight and advocacy
          </a>
        </li>
        <li className="border-b border-black">
          <a href="https://www.sba.gov/about-sba/information-other-languages" className="block px-4 py-2 hover:bg-black/20 hover:text-blue-800">
            Information in other languages
          </a>
        </li>
      </ul>
    </nav>
  );
}
