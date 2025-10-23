import React from "react";

// Un componente reutilizable para cada tarjeta
const Card = ({ title, description, buttonText, buttonLink = "#" }) => {
  return (
    <div className="flex h-full flex-col rounded-lg border-2 border-gray-300   bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#002a54]">{title}</h3>
      <p className="mt-4 text-gray-600">{description}</p>
      <a
        href={buttonLink}
        className="mt-auto block w-full rounded-md bg-[#0073b7] px-6 py-3 text-center font-semibold text-white transition-colors duration-300 hover:bg-[#005a94]"
      >
        {buttonText}
      </a>
    </div>
  );
};

const CtaCards = () => {
  const cardData = [
    {
      title: "Make a payment to SBA",
      description:
        "Learn how to make a payment on your SBA loan or check your account balance and due date.",
      buttonText: "Make a payment",
    },
    {
      title: "Log into your SBA account",
      description:
        "Check your account status, update your information, and get access to other portals.",
      buttonText: "Access your SBA login",
    },
    {
      title: "Upcoming events",
      description:
        "SBA and our partners host virtual and in-person educational trainings to help start and grow your business.",
      buttonText: "Encuentre eventos próximos",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaCards;
