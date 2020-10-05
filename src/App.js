import React from "react";
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
      <Footer />
    </div>
  );
}
