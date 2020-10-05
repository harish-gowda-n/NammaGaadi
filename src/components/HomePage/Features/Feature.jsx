import React from "react";
import { Col } from "react-bootstrap";

function Feature(props) {
  return (
    <Col xs={6} md={3}>
<<<<<<< HEAD
    <i className="fas fa-truck fa-3x"></i>
=======
    <i class="fas fa-truck fa-3x"></i>
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
      <h3>{props.featHead}</h3> 
      <br />
      <p>{props.featDesc}</p>
    </Col>
  );
}

export default Feature;
