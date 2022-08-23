import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name:'', email:'', message:'' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event){
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
      };
    
  return (
    <section>
    <h2 id='contact-title' className='mx-5 mb-3' style={{width: '8%'}}>Contact</h2>
    <Form className='mx-5' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" defaultValue={email} onBlur={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" name="message" rows={5} defaultValue={message} onBlur={handleChange}/>
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
}

export default Contact;