import React from "react";
import { useRef } from "react";
import { BiMailSend } from "react-icons/bi";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ajaj9a",
        "template_j8q2hwj",
        form.current,
        "Ay81s70M7i2HDqqjh"
      )
      .then(
        (result) => {
          toast.success("Your email was successfully sent!");
        },
        (error) => {
          toast.error("Your email failed to send!");
        }
      );

    e.target.reset();
  };

  return (
    <Form className="p-2 font-montserrat" ref={form} onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="fullName">
        <FloatingLabel label="Full Name">
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="fullName"
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <FloatingLabel label="Email address">
          <Form.Control
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="subject">
        <FloatingLabel label="Subject">
          <Form.Control
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Control
          as="textarea"
          rows="8"
          placeholder="Message"
          name="message"
          required
        />
      </Form.Group>

      <Button variant="btn btn-send-email" type="submit">
        <BiMailSend size={30} />
      </Button>
    </Form>
  );
}

export default ContactForm;
