import React from "react";
import { Form, Button } from "react-bootstrap";

function TopSection() {
  return (
    <div className="book-now" style={{ width: "auto" }}>
      <h1>Choose Location</h1>
      <Form>
        <Form.Group>
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="Enter pickup Location"
          />
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="Enter drop Location"
          />
          <Form.Control className="input-fields" as="select" >
            <option>Select Vehicle</option>
            <option>Tata Ace</option>
            <option>Apė</option>
            <option>Ashok Leyland Lorry</option>
          </Form.Control>
        </Form.Group>
        <br />
        <br />
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default TopSection;
