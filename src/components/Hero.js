import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Your Legal Service Platform</h2>
        <p className="mb-8">Providing expert legal and tax services</p>
        <div className="flex justify-center space-x-4">
          <ServiceButton icon="⚖️" text="Legal" />
          <ServiceButton icon="💼" text="Tax" />
          <ServiceButton icon="📊" text="Compliance" />
        </div>
      </div>
    </section>
  );
};

const ServiceButton = ({ icon, text }) => (
  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center">
    <span className="mr-2">{icon}</span>
    {text}
  </button>
);

export default Hero;
