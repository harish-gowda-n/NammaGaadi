import React, { useEffect } from "react";
import { useState } from "react";
import { Tabs, Tab, Form, Button, Table, Col, Toast } from "react-bootstrap"
import CircularProgress from '@material-ui/core/CircularProgress'
import "./spstyles.css"
import Maps from "./components/SecondPage/Maps"
import displayRazorpay from "../src/components/SecondPage/razorpay"
import calculations from './calculations'
import axios from 'axios'
import getMinDate from "./components/getMinDate"

export default function SecondPage(homeprops) {

  const [distance, setDistance] = useState(0);
  const [otpVerified, setOtpVerified] = useState(false)

  const [pickupArea, setPickupArea] = useState('')
  const [pickupCity, setPickupCity] = useState('')
  const [dropArea, setDropArea] = useState('')
  const [dropCity, setDropCity] = useState('')

  var home_capacity = "", home_date = "", home_vehicle = "";
  if (homeprops.location.linkState != null) {
    home_capacity = homeprops.location.linkState.capacity
    home_date = homeprops.location.linkState.date
    home_vehicle = homeprops.location.linkState.vehicleType
  }

  const [key, setKey] = useState('orderdetails');
  const [otpProgress, setOtpProgress] = useState(false);
  const [show, setShow] = useState(false)
  const [lshow, setLShow] = useState(true)

  const [state, setState] = useState({
    load: home_capacity, vehicle: home_vehicle,
    date: home_date, name: "", phone: "", inp_otp: "", checked: false
  })

  const [pickupLat, setPickupLat] = useState(0)
  const [pickupLong, setPickupLong] = useState(0)
  const [dropLat, setDropLat] = useState(0)
  const [dropLong, setDropLong] = useState(0)

  function callbackFunction(childData) {
    setDistance((childData.distance / 1000).toFixed(2))
    setPickupArea(childData.pickupArea)
    setPickupCity(childData.pickupCity)
    setDropArea(childData.dropArea)
    setDropCity(childData.dropCity)
    setPickupLat(childData.pickup.pickLat)
    setPickupLong(childData.pickup.pickLong)
    setDropLat(childData.drop.dropLat)
    setDropLong(childData.drop.dropLong)
  }

  const [gen_otp, setGenOtp] = useState(0)
  useEffect(() => { setGenOtp(Math.floor(Math.random() * 100000)); }, [])

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    switch (name) {
      case "pickup": setState(prevState => { return { ...prevState, pickup: value } }); break;

      case "drop": setState(prevState => { return { ...prevState, drop: value } }); break;

      case "load": setState(prevState => { return { ...prevState, load: value } }); break;

      case "vehicle": setState(prevState => { return { ...prevState, vehicle: value } }); break;

      case "date": setState(prevState => { return { ...prevState, date: value } }); break;

      case "name": setState(prevState => { return { ...prevState, name: value } }); break;

      case "phone": setState(prevState => { return { ...prevState, phone: value } }); break;

      case "inp_otp": setState(prevState => { return { ...prevState, inp_otp: value } }); break;

      case "checked": setState(prevState => { return { ...prevState, checked: !state.checked } }); break;
    }
  }

  function handleClick(evt) {
    const name = evt.target.name;

    switch (name) {
      case "order":
        if (state.vehicle.length > 0 && state.date.length > 0 && state.date.length > 0)
          setKey("locationDetails");
        else
          alert("Please enter all credentials before continuing")
        break;

      case "maps":
        setKey("contactDetails"); break;

      case "gen_otp":
        if (state.phone.length == 10)
          generateOTP(state.phone, gen_otp);
        else
          alert("Please eneter a valid phone number")
        break;

      case "customer": {
        if (state.inp_otp === '' + gen_otp) {
          setOtpVerified(true)
          setKey("verifyDetails");
        }
        else
          !otpVerified ? alert("The OTP you entered is wrong. Please Check!") : setKey("verifyDetails");
        break;
      }
      case "pay":
        const db_data = {
          name: state.name,
          phone: state.phone,
          load: state.load,
          dropCity,
          pickupCity,
          pickupPoint: {
            pickupLat, pickupLong
          },
          dropPoint: {
            dropLat, dropLong
          },
          vehicleType: state.vehicle,
          distance,
          price: calculations(distance, state.vehicle)
        }
        !state.checked
          ? alert("Please agree to the terms and conditions!")
          : displayRazorpay(db_data, calculations(distance, state.vehicle))
        break;
    }
  }

  return (
    <div className="mainDiv" style={{
      margin: "2rem 0 auto 0",
      margin: "2rem auto 0 auto"
    }}>
      <div style={{ margin: "auto auto" }}>
        <Tabs activeKey={key}
          onSelect={(k) => setKey(k)} style={{ margin: "auto auto", alignItems: 'stretch' }}>
          <Tab eventKey="orderdetails" title={<h5 className="tabTitles">Vehicle</h5>}>
            <div style={{ margin: "2rem auto", width: '70%' }}>
              <Form.Row >
                <Col>
                  <label style={{ marginBottom: "0", alignSelf: "start" }}><h6>Enter the load in kg :</h6></label>
                  <Form.Control required onChange={handleChange} name="load" type="number"
                    value={state.load} style={{ margin: "0 auto 0 auto" }} />
                </Col>
                <Col>
                  <label style={{ marginBottom: "0", alignSelf: "start" }}><h6>Choose the vehicle :</h6></label>
                  <Form.Control required onChange={handleChange} name="vehicle" as="select" style={{ marginTop: "0" }}>
                    <option value="Select vehicle">{home_vehicle}</option>
                    <option value="Tata Ace">Tata Ace</option>
                    <option value="Tata 407">Tata 407</option>
                    <option value="Eicher Canter">Eicher Canter</option>
                    <option value="Piaggio Ape">Piaggio Ape</option>
                  </Form.Control>
                </Col>
              </Form.Row>
              <label style={{ marginBottom: "0", alignSelf: "start" }}><h6>Select pickup date :</h6></label>
              <Form.Control required id="datepicker" type="date" style={{ marginTop: "0", width: "100%" }} name="date"
                value={state.date} onChange={handleChange} min={getMinDate()} />
            </div>

            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <Button name="order" variant="success" onClick={handleClick} type='submit'
                style={{ fontSize: "0.8rem" }}>
                Continue <i className="fas fa-chevron-circle-right"></i></Button>
            </div>
          </Tab>

          <Tab eventKey="locationDetails" title={<h5 className="tabTitles">Locations</h5>} >
          <Toast onClose={() => setLShow(false)} show={lshow} delay={4000}
            style={{position: 'absolute', zIndex: '1'}}>
              <Toast.Header>
                <strong className="mr-auto">Please drag the markers on the map to set locations accurately.</strong>
              </Toast.Header>
            </Toast>
            <Maps parentCallback={callbackFunction} style={{ width: '80%' }} />
            <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
              <h6 style={{ marginTop: '10px' }}>Distance : &emsp;<br />
                <span style={{ fontFamily: 'Calibri', fontSize: '1.5em', fontWeight: 'bold' }}> {distance} km(s)</span></h6>
              <Button name="maps" variant="success" onClick={handleClick}
                style={{ fontSize: '0.8rem' }}>
                Continue <i className="fas fa-chevron-circle-right"></i></Button>
            </div>
          </Tab>

          <Tab eventKey="contactDetails" title={<h5 className="tabTitles">Contacts</h5>} >
            <div style={{ margin: "2rem auto", width: '70%' }}>
              <Form.Control onChange={handleChange} name="name" type="text"
                placeholder="Enter your full name" value={state.name} />

              {!otpVerified ? <div><Form.Control onChange={handleChange} name="phone" type="text"
                placeholder="Enter your phone number" value={state.phone} />

                
                {otpProgress && <div style={{textAlign: 'center'}}>
                  <CircularProgress style={{ color: 'green', margin: '40px 0', }} />
                        </div>}

                <div style={{ textAlign: 'center' }}>
                  <Button name="gen_otp" variant="success" onClick={handleClick}
                    style={{ fontSize: '0.8rem', alignSelf: 'right' }}>Generate OTP</Button>
                </div>
                <ToastMessage message='Otp Sent to your phone number!' />

                <br />

                <label style={{ marginBottom: "0", alignSelf: "start" }}><h6>Enter the OTP sent to your phone number :</h6></label>
                <Form.Control onChange={handleChange} name="inp_otp" type="text"
                  placeholder="Enter OTP" value={state.otp} style={{ marginTop: "0" }} /> </div>
                : <div>
                  <h6>Phone Number: {state.phone}</h6>
                  <p>If you wish to change your phone number, please refresh this page and fill all details again</p>
                </div>}

              <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                <Button name="customer" variant="success" onClick={handleClick} style={{ fontSize: "0.8rem" }}>
                  {otpVerified ? 'Continue' : 'Verify OTP'} <i className="fas fa-chevron-circle-right"></i> </Button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="verifyDetails" disabled title={<h5 className="tabTitles">Verify</h5>} >
            <Output verify={state} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );

  function Output(property) {
    const props = property.verify;
    return (
      <div>
        <Table style={{ textAlign: "center", marginTop: "20px", borderTopStyle: "none" }}>
          <tbody >
            <tr><td><h6>Name :</h6></td>
              <td><h6>{props.name === "" ? "Not Entered" : props.name}</h6></td></tr>

            <tr><td><h6>Vehicle Selected :</h6></td>
              <td><h6>{props.vehicle === "" ? "Not Entered" : props.vehicle}</h6></td></tr>

            <tr><td><h6>Pickup Location : </h6></td>
              <td><h6>{pickupCity === '' ? "Not Entered" : pickupCity}</h6></td></tr>

            <tr><td><h6>Drop Location :</h6></td>
              <td><h6>{dropCity === '' ? "Not Entered" : dropCity}</h6></td></tr>

            <tr><td><h6>Estimated fare :</h6></td>
              <td><h6>{state.vehicle.length > 0  
              ? calculations(distance, state.vehicle)
              : "Please select the truck you want to see the fares"
              }</h6></td></tr>
          </tbody>
        </Table>
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <Form.Check type="checkbox" name="checked" label={<a href="/agreement" target="_blank" >
          I have read and agreed to the terms and conditions</a>}
            checked={state.checked} onChange={handleChange} style={{ marginBottom: "20px" }} />
          {state.vehicle.length > 5
            ? <Button name="pay" variant="success" type="submit" 
              onClick={handleClick} style={{ fontSize: "0.8rem" }}>
              Proceed to pay <i className="fas fa-chevron-circle-right"></i></Button>
            : "Please fill in all details to make payment."  
              }
        </div>
      </div>
    )
  }

  function ToastMessage({ message }) {

    return (
      <div>
        <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide
          style={{
            position: 'absolute', left: '50%', transform: 'translate(-50%, 0)',
            minWidth: '20rem', marginTop: '2rem'
          }}>
          <Toast.Header>
            <strong className="mr-auto">{message}</strong>
          </Toast.Header>
        </Toast>
      </div>
    )
  }

  async function generateOTP(phone, otp) {
    setOtpProgress(true)
    axios({
      method: "POST",
      url: "/sendotp",
      data: {
        otp,
        phone
      }
    }).then(() => {
      setOtpProgress(false);
      setShow(true)
    })
    return true;
  }
}
