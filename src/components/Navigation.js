import React from "react";

const Navigation = () => {
  const menuItems = ["Home", "Services", "About", "Contact", "Resources"];

  return (
    <nav className="bg-indigo-700 text-white">
      <ul className="container mx-auto flex justify-center space-x-6 py-3">
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
