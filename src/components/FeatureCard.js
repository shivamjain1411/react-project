// FeatureCard.js
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-4">
      <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-purple-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
