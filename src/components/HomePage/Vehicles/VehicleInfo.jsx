import React from "react";
import { Col, Table, Card, Button } from "react-bootstrap";
<<<<<<< HEAD
import { Link } from "react-router-dom";

function VehicleInfo(props) {
  return (
    <Col xs={12} md={4} lg={3}>
      <Card style={{ width: '14rem', backgroundColor: "#A4D4AE", margin: "0 auto 1rem auto" }}>
        <Card.Img variant="top" src={props.img} height="200rem" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Table size="sm" style={{ margin: "auto" }}>
            <tbody>
              <tr><td>Capacity</td><td>{props.capacity}</td></tr>
              <tr><td>Base price</td><td>{props.price}*</td></tr>
            </tbody>
          </Table>
          <p style={{ fontSize: '12px', marginTop: '5px' }}>*Base price includes 1 km and 60 minutes of waiting time</p>
          <Link to={{
            pathname: '/order',
            linkState: { vehicleType: props.name }
          }}>
            <Button type="submit" variant="success" style={{ marginTop: "15px" }}>Book Now</Button>
          </Link>
        </Card.Body>
      </Card>
=======

function VehicleInfo(props) {
  return (
    <Col xs={6} md={3}>

<Card style={{ width: '14rem' }}>
  <Card.Img variant="top" src={props.img} height="200px"/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
    <Table size="sm" style={{ margin: "auto" }}>
        <tbody>
          <tr><td>Capacity</td><td>{props.capacity}</td></tr>
          <tr><td>Price</td><td>{props.price}</td></tr>
        </tbody>
      </Table>
    </Card.Text>
    <Button type="submit" variant="primary">Book Now</Button>
  </Card.Body>
</Card>
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
    </Col>
  );
}

export default VehicleInfo;
