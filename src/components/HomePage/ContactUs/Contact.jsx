<<<<<<< HEAD
import React, { useState } from "react";
import { Accordion, Button, Form, useAccordionToggle, Toast, } from "react-bootstrap"
import axios from "axios"
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Contact(props) {

    const [state, setState] = useState({
        email: "", msg: ""
    })

    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(false);

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionToggle(eventKey);
=======
import React from "react";
import { Accordion, Button, Form, useAccordionToggle } from "react-bootstrap"

export default function Contact() {

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionToggle(eventKey, () =>
            console.log('Toggled'),
        );
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222

        return (
            <Button
                type="button"
<<<<<<< HEAD
                variant="success"
=======
                variant="primary"
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
                onClick={decoratedOnClick}
            >
                {children}
            </Button>
        );
    }

<<<<<<< HEAD
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        name === "email" ? setState((prevState) => { return { email: value, msg: prevState.msg } })
            : setState((prevState) => { return { email: prevState.email, msg: value } })
    }

    async function submitHandler(evt) {
        setProgress(true)
        axios({
            method: "POST",
            url: "/sendMail",
            data: {
                email: state.email,
                msg: state.msg
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                // setState({ email: "", msg: "" })
                setShow(true)
                setProgress(false)
            } else if (response.data.msg === 'fail') {
                alert("Oops, something went wrong. Try again")
                setProgress(false)
            }
        })
        
        evt.preventDefault();
    }

    return (
        <div id={props.id} style={{ textAlign: "center" }}>
            <Accordion style={{ width: "70%", margin: "auto" }}>
                <CustomToggle eventKey="0">Contact Us</CustomToggle>
                <Accordion.Collapse eventKey="0">
                    <Form onSubmit={submitHandler}>
                        <Form.Control type="email" name="email"
                            placeholder="Enter your email id" value={state.email} onChange={handleChange} /><br />
                        <Form.Control as="textarea" rows="5" name="msg"
                            placeholder="Enter your message" value={state.msg} onChange={handleChange} />
                        <br /> <br />
                        <Button variant="success" type="submit">Send <i className="fas fa-paper-plane" /></Button>
                    </Form>
                </Accordion.Collapse>
            </Accordion>
             {progress && <CircularProgress style={{color: 'green', margin: '40px auto'}} />}
            <EmailSent />
        </div>
    );

    function EmailSent() {
        
        return (
            <div>
            <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide
            style={{position: 'absolute', left: '50%', transform: 'translate(-50%, 0)',
             minWidth: '20rem', marginTop: '2rem'}} >
                <Toast.Header>
                    <strong className="mr-auto">Message Sent</strong>
                </Toast.Header>
                <Toast.Body>
                <small>We'll get in touch with you ASAP</small>
                </Toast.Body>
            </Toast>
            </div>
        );
    }
}

=======
    return (
        <div style={{ textAlign: "center" }}>
            <Accordion style={{ width: "70%", margin: "auto" }}>
                <CustomToggle eventKey="0">Contact Us</CustomToggle>
                <Accordion.Collapse eventKey="0">
                    <Form>
                        <Form.Control type="name" placeholder="Enter your name" /><br />
                        <Form.Control as="textarea" rows="5" placeholder="Enter your message" />
                        <br /> <br />
                        <Button type="submit">Send <i className="fas fa-paper-plane" /></Button>
                    </Form>
                </Accordion.Collapse>
            </Accordion>
        </div>
    );
} 
>>>>>>> 0043c2635bbaf8b2a7826539cc9492064447d222
