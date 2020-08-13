import React from "react";
import { Col, Table, Card, Button } from "react-bootstrap";

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
    </Col>
  );
}

export default VehicleInfo;
