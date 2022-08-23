import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name:'', email:'', message:'' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);
            // if it isn't valid, set the state of the error message to the following
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                // otherwise, keep error message blank
                setErrorMessage('');
            }
        } else {
            // for message and name, so that they cannot be blank
            if (!event.target.value.length){
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // use spread operator to retain the other key-value pairs in the object
        if (!errorMessage){
            setFormState({ ...formState, [event.target.name]: event.target.value });}
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
      };
    
  return (
    <section>
    <h2 id='contact-title' className='mx-5 mt-5 mb-3' style={{width: '8%'}}>Contact</h2>
    <Form className='mx-5' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Name" name='Name' defaultValue={name} onBlur={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" name='Email' placeholder="Enter email" defaultValue={email} onBlur={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" name="Message" rows={5} defaultValue={message} onBlur={handleChange}/>
      </Form.Group>

      {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
              )}

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
}

export default Contact;