import React from "react";
import { Row, Col } from "react-bootstrap";

export default () => {
  return (
    <footer
      style={{
        backgroundColor: "#A0CC78",
        marginTop: "6rem",
        paddingTop: "40px",
        paddingBottom: "5px",
      }}
    >
      <Row id="contactUs" style={{ width: "80%", margin: "2px auto" }}>
        <Col xs={12} md={4}>
          <p className="footer-link" style={{ textAlign: "center" }}>
            <h4>
              <u>Get In touch : </u>
            </h4>
          </p>
        </Col>
        <Col xs={12} md={4}>
          <p className="footer-link" style={{ textAlign: "left" }}>
            <i className="fas fa-phone"></i> +91 8792600639
          </p>
        </Col>
        <Col xs={12} md={4}>
          <p className="footer-link" style={{ textAlign: "left" }}>
            <i className="fas fa-envelope"></i> info.support@nammagaad.in
          </p>
        </Col>
      </Row>
      <hr style={{margin: "10px auto", width: '40%'}} />
      <p className="copyrights">© 2020 Namma Gaadi.</p>
      <p className="copyrights">
        <a
          className="footer-link"
          href="https://play.google.com/store/apps/details?id=com.nammagaadi.driver"
          target="_blank"
        >
          <i className="fab fa-google-play"></i> Click here to get the the
          Driver App
          <br />
          <img style={{width: '300px', height: '100px'}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
        </a>
      </p>
      <p className="copyrights">
        <i className="fas fa-google-play"></i>Created and maintained by :
        <a href="https://www.embarkventures.org/">{" Embark Ventures"}</a>
      </p>
    </footer>
  );
};
