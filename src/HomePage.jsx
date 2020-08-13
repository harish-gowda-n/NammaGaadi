import React from "react";
import Carousel from "./components/HomePage/Main/Carousel";
import TopSection from "./components/HomePage/Main/TopSection";
import FeaturesSection from "./components/HomePage/Features/FeaturesSection";
import VehiclesSection from "./components/HomePage/Vehicles/VehiclesSection";
import ContactUs from "./components/HomePage/ContactUs/Contact"
import AboutUs from "./components/HomePage/AboutUs";

export default function HomePage(){
    return(
        <div className="App">
      <Carousel id="bookNow"/>
      <TopSection />
      <FeaturesSection />
      <hr />
      <VehiclesSection />
      <hr id="aboutUs"/>
      <AboutUs />
      <hr />
      <ContactUs id="contactUs"/>
    </div>
    )
}