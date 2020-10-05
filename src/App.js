import React from "react";
<<<<<<< HEAD
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./hpstyles.css";
import NavbarElement from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./HomePage"
import SecondPage from "./SecondPage"
import SuccessPage from "./SuccessPage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {

  return (
    <div>
      <NavbarElement />
      <Router>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/order" component={SecondPage} />
          <Route exact path="/paymentsuccess" component={SuccessPage} />
        </Switch>
        </Router>
=======
// import { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import NavbarElement from "./components/Navbar";
import Carousel from "./components/HomePage/Main/Carousel";
import TopSection from "./components/HomePage/Main/TopSection";
import FeaturesSection from "./components/HomePage/Features/FeaturesSection";
import VehiclesSection from "./components/HomePage/Vehicles/VehiclesSection";
import ContactUs from "./components/HomePage/ContactUs/Contact"
import AboutUs from "./components/HomePage/AboutUs";
import Footer from "./components/Footer";

const fetch = require("node-fetch");

export default function App() {
  // const [name, setName] = useState("");
  // const [id, setId] = useState("");

  // fetch("/users")
  //   .then((res) => res.json())
  //   .then((user) => { setName(user.name); setId(user.id) })
  //   .catch((err) => console.log(err));

  return (
    <div className="App">
      <NavbarElement />
      <Carousel />
      <TopSection />
      <FeaturesSection />
      <hr />
      <VehiclesSection />
      <hr />
      <AboutUs />
      <hr />
      <ContactUs />
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
      <Footer />
    </div>
  );
}
