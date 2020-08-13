import React from "react";
import { Container, Row } from "react-bootstrap";
import VehicleInfo from "./VehicleInfo";
import vehiclesInfo from "../data/vehiclesInfo"

function createVehicleInfo(vehicleInfo) {
  return (
    <VehicleInfo
      key={vehicleInfo.key}
      img={vehicleInfo.img}
      name={vehicleInfo.name}
      capacity={vehicleInfo.capacity}
      price={vehicleInfo.price}
    />
  )
}

function VehiclesSection() {
  return (
    <Container >
      <h2>Select from a variety of vehicles Available</h2>
      <br />
      <br />
      <Row style={{alignItems: "center", margin: "auto"}}>
        {vehiclesInfo.map(createVehicleInfo)}
      </Row>
    </Container>
  );
}

export default VehiclesSection;
