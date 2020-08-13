import React from "react";
import {Row, Col} from "react-bootstrap" 

export default () => {
    return(
        <footer style={{backgroundColor: "#A0CC78", marginTop: "6rem", paddingTop: "40px",
         paddingBottom: "5px"}}>
            <Row style={{ width: '80%', margin: '10px auto'}}>
      <Col xs={6} md={3} style={{textAlign: 'center'}} >
        <a className="footer-link" href="" style={{margin: '0 auto 0 auto'}}>
        LinkedIn <i className="fab fa-linkedin"></i></a>
      </Col>
      <Col xs={6} md={3} style={{textAlign: 'center'}}>
        <a className="footer-link" href="" style={{margin: '0 auto 0 auto'}}>
        Twitter <i className="fab fa-twitter"></i></a>
      </Col>
      <Col xs={6} md={3} style={{textAlign: 'center'}}>
        <a className="footer-link" href="" style={{margin: '0 auto 0 auto'}}>
        GitHub <i className="fab fa-github"></i></a>
      </Col>
      <Col xs={6} md={3} style={{textAlign: 'center'}}>
        <a className="footer-link" href="" style={{margin: '0 auto 0 auto'}}>
        Instagram <i className="fab fa-instagram"></i></a>
      </Col>
    </Row>
        <br />
    <p className="copyrights">© 2020 Namma Gaadi.</p>
    <p>Created and maintained by : <a href="https://www.embarkventures.org/">Embark Ventures</a></p>
    
        </footer>
    )
}