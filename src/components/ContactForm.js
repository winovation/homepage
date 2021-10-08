import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgerwezo");
  if (state.succeeded) {
    return <p>이메일 전송이 성공했습니다.</p>;
  }
  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={6} id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default ContactForm;
