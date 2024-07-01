import React from "react";
import MainSection from "./main";
import AboutMe from "./about";
import Form from "./form";
import Carousel from "./carousel";
import CTA from "./cta";
import Footer from "./footer";
import Testimonials from "./testimonial";


function App() {
  return (
    <>
    <MainSection />
    <AboutMe />
    <Carousel />
    <Testimonials />
    <CTA />
    <Footer />
    {/* <Form /> */}
    </>
  )
}
 
export default App;