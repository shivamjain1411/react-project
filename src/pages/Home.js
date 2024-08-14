import React from "react";
import OurAim from "../components/OurAim";
import OurServices from "../components/OurServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import LatestBlog from "../components/LatestBlog";

function Home() {
  return (
    <div>
      <OurAim />
      <OurServices />
      <WhyChooseUs />
      <Testimonial />
      <LatestBlog />
    </div>
  );
}

export default Home;
