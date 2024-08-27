import React, { useState } from "react";

function GSTretDrop() {
  const cardClass = "bg-blue-500 w-full text-white p-4 rounded-lg shadow-md";
  const iconClass = "w-6 h-6 cursor-pointer"; // Adjusted for SVG size
  const titleClass = "font-bold text-lg ml-2";
  const textClass = "mt-2";

  const DropdownCard = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <div
          className={`flex items-center cursor-pointer`}
          onClick={toggleDescription}
        >
          <div className={cardClass}>
            <div className="flex">
              <img
                src={
                  !isOpen
                    ? "https://www.svgrepo.com/show/80156/down-arrow.svg"
                    : "https://www.svgrepo.com/show/93813/up-arrow.svg"
                }
                alt={isOpen ? "Up Arrow" : "Down Arrow"}
                className={iconClass}
              />
              <h3 className={titleClass}>{title}</h3>
            </div>
          </div>
        </div>
        {isOpen && <p className={textClass}>{description}</p>}
      </div>
    );
  };

  const DropdownCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mx-[7%]">
        <DropdownCard
          title="GST Eliminates Cascading Effect"
          description="GST eliminated the need to pay multiple taxes on a single transaction. This includes taxes like central excise duty, service tax, customs duty, and state-level value-added tax. This simplification saves you money."
        />
        <DropdownCard
          title="Higher Threshold"
          description="Small businesses with a total turnover of less than 40 lakhs for goods and 20 lakhs for services are not required to file GST.."
        />
        <DropdownCard
          title="Easier For Start-ups and E-commerce Businesses"
          description="GST has eased tax management for startups and e-commerce enterprises, eliminating the complications of multiple tax laws across states.."
        />
        <DropdownCard
          title="More Organized System"
          description="Before the GST tax return filing system was disorganised. Now, all taxes are paid online and major hassles that were a part of tax filing have been eliminated in the process of introducing GST.."
        />
      </div>
    );
  };

  return (
    <div>
      <DropdownCards />
    </div>
  );
}

export default GSTretDrop;
