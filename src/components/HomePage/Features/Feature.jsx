import React from "react";
import { Col } from "react-bootstrap";

function Feature(props) {
  return (
    <Col xs={6} md={3}>
    <i class="fas fa-truck fa-3x"></i>
      <h3>{props.featHead}</h3> 
      <br />
      <p>{props.featDesc}</p>
    </Col>
  );
}

export default Feature;
