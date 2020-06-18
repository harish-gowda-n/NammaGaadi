import React from "react";
import { Accordion, Button, Form, useAccordionToggle } from "react-bootstrap"

export default function Contact() {

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionToggle(eventKey, () =>
            console.log('Toggled'),
        );

        return (
            <Button
                type="button"
                variant="primary"
                onClick={decoratedOnClick}
            >
                {children}
            </Button>
        );
    }

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