import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <section>
    <h2 id='contact-title' className='mx-5 mb-3' style={{width: '9%'}}>Contact</h2>
    <Form className='mx-5'>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label >Name:</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
}

export default Contact;