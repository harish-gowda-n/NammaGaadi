import React from "react";
import {Row, Col} from "react-bootstrap" 

export default () => {
    return(
        <footer style={{backgroundColor: "#d0ef84", marginTop: "6rem", paddingTop: "40px", paddingBottom: "5px", alignItems: "center"}}>
            <Row style={{width: "80%", alignItems: "center", margin: "10px auto 0 auto"}}>
      <Col xs={6} md={3}>
        <a className="footer-link" href="">LinkedIn <i className="fab fa-linkedin"></i></a>
      </Col>
      <Col xs={6} md={3}>
        <a className="footer-link" href="">Twitter <i className="fab fa-twitter"></i></a>
      </Col>
      <Col xs={6} md={3}>
        <a className="footer-link" href="">GitHub <i className="fab fa-github"></i></a>
      </Col>
      <Col xs={6} md={3}>
        <a className="footer-link" href="">Instagram <i className="fab fa-instagram"></i></a>
      </Col>
    </Row>
        <br />
    <p className="copyrights">© 2020 Namma Gaadi.</p>
    <p>Created and maintained by : <a href="https://www.embarkventures.org/">Embark Ventures</a></p>
    
        </footer>
    )
}