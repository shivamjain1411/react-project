import React from "react";

const Navigation = () => {
  const menuItems = [
    "Home",
    "Book Consultancy",
    "Income Tax",
    "GST",
    "Business Registration",
    "Legal Service",
    "Annual Service",
    "Resources",
  ];

  return (
    <nav className="bg-[#301c74] font-bold text-white">
      <ul className="container mx-auto flex justify-center  space-x-16 py-2">
        {menuItems.map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-yellow-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
