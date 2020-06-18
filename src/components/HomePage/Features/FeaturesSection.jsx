import React from "react";
import { Container, Row } from "react-bootstrap";
import Feature from "./Feature";
import features from "../data/features"

function createFeature(feature) {
  return (
    <Feature
      key={feature.key}
      featHead={feature.featHead}
      featDesc={feature.featDesc} />
  );
}

function FeaturesSection() {

  return (
    <Container style={{ margin: "50px auto" }}>
      <h2>Why us??</h2>
      <br />
      <br />
      <Row>
        {features.map(createFeature)}
      </Row>
    </Container>
  );
}

export default FeaturesSection;
