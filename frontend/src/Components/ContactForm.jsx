import { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ContactForm() {
  const initialContactFormState = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [contactFormState, setContactFormState] = useState(
    initialContactFormState
  );
  const { fullName, email, subject, message } = contactFormState;

  const handleOnChange = (e) => {
    setContactFormState({
      ...contactFormState,
      [e.target.name]: e.target.value,
    });
    console.log(contactFormState);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch("/send", {
      method: "POST",
      body: JSON.stringify(contactFormState),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          setContactFormState({
            ...initialContactFormState,
          });
          toast.success("Your message has been sent!");
        } else if (response.status === "fail") {
          setContactFormState({
            ...initialContactFormState,
          });
          toast.error("Your message failed to send...");
        }
      });
  };

  return (
    <Form className="p-2" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="fullName">
        <FloatingLabel label="Full Name">
          <Form.Control
            type="text"
            placeholder="Full Name"
            onChange={handleOnChange}
            name="fullName"
            value={fullName}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <FloatingLabel label="Email address">
          <Form.Control
            type="email"
            placeholder="Email Address"
            onChange={handleOnChange}
            name="email"
            value={email}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="subject">
        <FloatingLabel label="Subject">
          <Form.Control
            type="text"
            placeholder="Subject"
            onChange={handleOnChange}
            name="subject"
            value={subject}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Control
          as="textarea"
          rows="8"
          placeholder="Message"
          onChange={handleOnChange}
          name="message"
          value={message}
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
