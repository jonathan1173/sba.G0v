import React from "react";

const Hero = () => {
  const imageUrl =
    "https://www.sba.gov/sites/default/files/styles/hero/public/2025-04/gettyimages-1040325518-2048x2048%20v2_0_0.jpg.webp?itok=-PxyDajV";

  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: window.innerWidth >= 640 ? `url(${imageUrl})` : "none",
      }}
    >
      {/* Overlay opcional para oscurecer la imagen si es necesario */}
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}

      <div className=" px-4 md:px-8 lg:px-16 ">
        <div className="relative bg-blue-900 text-white p-8 ">
          <h2 className="text-4xl font-bold leading-tight mb-10">
            Need funding <br /> for your small <br /> business?
          </h2>
          <a
            href="#"
            className="inline-block bg-sky-600 hover:bg-sky-800 text-white font-semibold py-3 px-6 transition-transform duration-300 rounded-[6px]"
          >
            Learn about SBA loans
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
