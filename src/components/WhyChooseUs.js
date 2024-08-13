// WhyChooseUs.js
import React from "react";
import FeatureCard from "./FeatureCard";

// Import your icons and main image
import icon1 from "./path-to-icon1.png";
import icon2 from "./path-to-icon2.png";
import icon3 from "./path-to-icon3.png";
import icon4 from "./path-to-icon4.png";
import mainImage from "./path-to-main-image.png";

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-center text-4xl font-bold text-purple-900">
        Why Choose Us
      </h2>
      <p className="text-center text-lg text-gray-600 mt-4">
        Why do you trust us with what you see and do?
      </p>
      <div className="flex flex-wrap justify-around items-center mt-12">
        <FeatureCard
          icon={icon1}
          title="Client-Focused Solutions"
          description="Our goal is simple: to provide our clients with top-notch service at a reasonable cost. We prioritize client satisfaction above all else, ensuring successful outcomes for every representation."
        />
        <img
          src={mainImage}
          alt="Main"
          className="w-80 rounded-lg shadow-lg my-8"
        />
        <FeatureCard
          icon={icon2}
          title="24/7 Support Provider"
          description="We’re always here to help, day or night. Our friendly experts are always available, even outside of normal office hours. We keep in touch with our clients and they know they can count on us for reliable service and trustworthy business practices."
        />
        <FeatureCard
          icon={icon3}
          title="Values-Driven Flexibility"
          description="Our team’s experience allows us to give clients the focus and dedication they need. We collaborate with clients to address their requirements and goals, providing a value-driven approach to each case."
        />
        <FeatureCard
          icon={icon4}
          title="Skilled Professionals"
          description="Our experts specialize in taxation and legal services throughout India. They assist with licensing, compliance, dispute resolution, and problem analysis. They possess a strong understanding of the legal industry and offer reliable counsel."
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
