import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import getMinDate from "../../getMinDate"

function TopSection() {

  const [state, setState] = useState({
    capacity: "",
    date: new Date(),
    vehicleType: ""
  });

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    if (name === "capacity")
      setState((prevState) => {
        return { ...prevState, capacity: value }
      })
    else if (name === "date") setState((prevState) => {
      return { ...prevState, date: value }
    })
    else if (name === "vehicleType") setState((prevState) => {
      return { ...prevState, vehicleType: value }
    })
  }

  return (
    <div className="book-now">
      <h1>Book Now!</h1>
      <Form>
        <Form.Group>
          <Form.Control
            className="input-fields inputSize"
            name="capacity"
            type="number"
            placeholder="Enter required capacity in Kg"
            value={state.capacity}
            onChange={handleChange}
          />

          <Form.Control name="vehicleType" value={state.vehicleType} className="input-fields inputSize" as="select" onChange={handleChange}>
            <option>Select Vehicle</option>
            <option>Tata Ace</option>
            <option>Tata 407</option>
            <option>Eicher Canter</option>
            <option>Piaggio Apė</option>
          </Form.Control>
        </Form.Group>

        <label style={{ marginRight: "10px", color: "black" }}>
          <h5 style={{ fontSize: "1rem", textAlign: "center", margin: "0 auto" }}>Enter Pickup date :</h5></label>
        <Form.Control className="inputSize" type="date" name="date" value={state.date} onChange={handleChange}
          min={getMinDate()}
          style={{ height: "2.5rem", marginTop: "0" }} />


        <br />
        <br />
        <Link to={{
          pathname: '/order',
          linkState: { ...state }
        }}>
          <Button variant="success" type="submit">
            Continue
        </Button>
        </Link>
      </Form>
    </div>
  );
}

export default TopSection;
