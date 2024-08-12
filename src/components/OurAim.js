import React from "react";

const OurAim = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Main Goal - Client Success
        </h2>
        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-semibold mb-4">
              Satisfaction Guaranteed
            </h3>
            <p className="mb-4">
              We prioritize your satisfaction with our comprehensive services.
            </p>
            <button className="bg-yellow-500 text-indigo-900 px-6 py-2 rounded">
              Learn More
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="/placeholder-image.jpg"
              alt="Guarantee"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAim;
