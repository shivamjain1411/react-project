import React from 'react';
import image from '../../images/WhyUs.png';

const WhyUsComponent = () => {
  const reasons = [
    'Trained and Professional Experts',
    'On Time Service',
    'Money Back Policy',
    'Quick Response Team',
    'Affordable Than Other Professionals',
    '1 Lakh+ Happy Customers Across India',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-2">WHY US?</h2>
      <div className="h-1 w-32 bg-yellow-400 mx-auto mb-8"></div>
      <div className=" sm:mx-32  gap-0.5 shadow-2xl">
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default WhyUsComponent;