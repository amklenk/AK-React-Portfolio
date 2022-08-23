import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bugBash from '../../assets/project-images/bug-bash.png'

function Portfolio() {
  return (
    <section className='mx-5 mt-5 text-center'>
    <h2 id='portfolio-title' className='mb-3' style={{width: '10%'}}>Portfolio</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {bugBash} />
      <Card.Body>
        <Card.Title>Bug Bash</Card.Title>
        <Card.Text>
        An application that creates a community for new developers to share and fix their coding bugs.
        </Card.Text>
        <a href='https://github.com/amklenk/New-Dev-Forum' target="_blank" rel="noopener noreferrer"><Button variant='dark' className='me-3'>GitHub</Button></a>
        <a href='https://limitless-lowlands-09863.herokuapp.com/' target="_blank" rel="noopener noreferrer"><Button variant="dark">Live Site</Button></a>
      </Card.Body>
    </Card>
    </section>
  );
}

export default Portfolio;
