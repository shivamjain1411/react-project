import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import OurAim from "./components/OurAim";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <OurAim />
        <OurServices />
        <WhyChooseUs />
      </main>
      <footer className="bg-indigo-900 text-white py-4 text-center">
        <p>&copy; 2024 YourCompanyName. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
