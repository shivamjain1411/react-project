import React from "react";
import handshake from "../../images/handshake.png";

function GSTretPricing() {
  const PricingCard = ({ title, subtitle, price, features, color }) => (
    <div className={`bg-${color} rounded-lg overflow-hidden shadow-lg`}>
      <div className="p-6 m-4">
        <div className="flex justify-center mb-4">
          <div className="rounded-full p-2">
            <img src={handshake} alt="Handshake" className="" />
          </div>
        </div>
        <h2 className="text-center text-xl font-bold mb-2">{title}</h2>
        <p className="text-center text-sm mb-4">{subtitle}</p>
        <div className="bg-indigo-800 text-white text-center py-2 rounded-full mb-6 w-full">
          <span className="text-2xl font-bold">₹{price}/-</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-indigo-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6">
        <button className="w-full bg-indigo-800 text-white py-2 rounded-full font-bold hover:bg-indigo-700 transition duration-200">
          Register Now
        </button>
      </div>
    </div>
  );

  const plans = [
    {
      title: "NIL Return Plan",
      subtitle: "Monthly NIL GST Return Plan",
      price: "499",
      color: "yellow-500",
      features: [
        "Personally Assigned GST Expert",
        "Monthly Nil GSTR-1 Filing",
        "Monthly Nil GSTR-3B Filing",
        "Zero Sales & Purchase Invoices",
        "No Transaction during the month",
        "Free Bank Account Updation",
        "No GST E-Way Bill",
        "No Credit & Debit Note",
        "Call, Chat, Email support",
      ],
    },
    {
      title: "Super Saving Plan",
      subtitle: "Yearly GST return filing",
      price: "6999",
      color: "yellow-400",
      features: [
        "Dedicated GST expert",
        "GSTR-1 Return Filing",
        "GSTR-3B Return Filing",
        "GSTR-9 Return Filing",
        "Input Tax Credit Reconciliation",
        "Data modeling in Excel & Tally",
        "Any Accounting Software",
        "Phone, Chat & Email Support",
        "Phone, Chat & Email Support",
      ],
    },
    {
      title: "Standard Plan",
      subtitle: "Monthly GST return filing",
      price: "499",
      color: "yellow-500",
      features: [
        "Dedicated GST expert",
        "GSTR-1 Return Filing",
        "GSTR-3B Return Filing",
        "GSTR-9 Return Filing",
        "Input Tax Credit Reconciliation",
        "Data modeling in Excel & Tally",
        "Any Accounting Software",
        "Phone, Chat & Email Support",
        "Phone, Chat & Email Support",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-800 to-blue-500 py-8 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl px-2">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default GSTretPricing;
