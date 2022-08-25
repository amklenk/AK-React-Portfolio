import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com'
// Do I need this?
import { init } from 'emailjs-com';
init(process.env.REACT_APP_USER_ID);

function Contact() {
  // setting change to validate
    const [formState, setFormState] = useState({ name:'', email:'', message:'' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    // function to validate
    function handleChange(event) {
        if(event.target.name === 'Email'){
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
    // funtion to submit
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
      };

  // setting change for EmailJS
    const [nameEJS, setName] = useState('');
    const [emailEJS, setEmail] = useState('');
    const [messageEJS, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    // function to submit to EmailJS
    const submit = () => {
      if (nameEJS && emailEJS && messageEJS) {
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const userId = process.env.REACT_APP_USER_ID;

        const templateParams = {
            nameEJS,
            emailEJS,
            messageEJS
        };
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
  
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
          setIsVisible(true);
          // console.log('Email sent!');
      } else {
          alert('Please fill in all fields.');
      }
  };
    
  // setting change for visibility of email message
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section>
    <h2 id='contact-title' className='mx-5 mt-5 mb-3'>Want to know more?</h2>
    <Form className='mx-5' onSubmit={handleSubmit} style={{width: '80%'}}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Name" name='Name' defaultValue={name} onBlur={handleChange} value={nameEJS} onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" name='Email' placeholder="Enter email" defaultValue={email} onBlur={handleChange} value={emailEJS} onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" name="Message" rows={5} defaultValue={message} onBlur={handleChange} value={messageEJS} onChange={e => setMessage(e.target.value)}/>
      </Form.Group>

      {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
              )}

      <Button variant="dark" type="submit" onClick={submit} className='mb-3 border-light'>
        Submit
      </Button>
    </Form>
    {isVisible && emailSent && <span className='ms-5'>Thank you for your message, we will be in touch in no time!</span>}
    </section>
  );
}

export default Contact;