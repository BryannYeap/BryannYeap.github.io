import React from "react";
import ContactForm from "./ContactForm";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function ContactCard() {
  return (
    <Container className="d-flex justify-content-center align-items-center p-2 mt-3">
      <Card style={{ width: "35rem" }} className="contact-form">
        <Card.Body className="shadow">
          <Card.Title
            style={{ fontSize: "1.5rem" }}
            className="text-center p-3"
          >
            <strong>Get In Touch</strong>
          </Card.Title>

          <ContactForm />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactCard;
