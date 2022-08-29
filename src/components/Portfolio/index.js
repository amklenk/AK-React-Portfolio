import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// function that renders the Portfolio component
function Portfolio() {
  // object that contains the information for each project card
const projects =[
    {
        name: 'Bug Bash',
        src: require('../../assets/project-images/bug-bash.png'),
        description: 'An application that creates a community for new developers to share and fix their coding bugs.',
        gitHub: 'https://github.com/amklenk/New-Dev-Forum',
        liveSite: 'https://limitless-lowlands-09863.herokuapp.com/'
    },
    {
        name: 'Tech Blog',
        src: require('../../assets/project-images/tech-blog.png'),
        description: 'An application that creates a blog site for a developer so that they can publish articles, blog posts, and their thoughts and opinions via comments',
        gitHub: 'https://github.com/amklenk/Tech-Blog',
        liveSite: 'https://desolate-temple-87705.herokuapp.com/'
    },
    {
        name: 'Note Taker',
        src: require('../../assets/project-images/note-taker.png'),
        description: 'An application that helps a small business owner to write and save their notes to organize and keep track of their thoughts and tasks.',
        gitHub: 'https://github.com/amklenk/Note-Taker',
        liveSite: 'https://morning-escarpment-45926.herokuapp.com/'
    },
    {
        name: 'Workout Zen',
        src: require('../../assets/project-images/workoutzen.png'),
        description: 'An application to help someone learn how to exercise in a low-stress environment.',
        gitHub: 'https://github.com/amklenk/Workout-Zen',
        liveSite: 'https://amklenk.github.io/Workout-Zen/'
    },
    {
        name: 'Weather Dashboard',
        src: require('../../assets/project-images/weathersitescreenshot.png'),
        description: 'An application to help a traveler find the current weather and five-day forecast wherever they go',
        gitHub: 'https://github.com/amklenk/Weather-Dashboard',
        liveSite: 'https://amklenk.github.io/Weather-Dashboard/'
    },
    {
        name: 'Code Quiz',
        src: require('../../assets/project-images/quiz.png'),
        description: 'An application to help a novice coder learn more about DOM manipulation.',
        gitHub: 'https://github.com/amklenk/Code-Quiz',
        liveSite: 'https://amklenk.github.io/Code-Quiz/'
    }
];

  return (
    <section className='mx-5 mt-5 text-center'>
    <h2 id='portfolio-title' className='mb-3'>Check out my work.</h2>
    <div className='d-flex flex-wrap justify-content-lg-between justify-content-md-center justify-content-sm-center container'>
    {projects.map((projects) => (
    <Card className='mb-5 mx-3 col-sm-12 col-md-3 col-lg-4 port-card v-md-100' key={projects.name}>
      <Card.Img variant='top' src= {projects.src} className='card-image' />
      <Card.Body>
        <Card.Title>{projects.name}</Card.Title>
        <Card.Text>
        {projects.description}
        </Card.Text>
        <a href={projects.gitHub} target='_blank' rel='noopener noreferrer'><Button className='me-3 border-light btn'>GitHub</Button></a>
        <a href={projects.liveSite} target='_blank' rel='noopener noreferrer'><Button className='border-light btn'>Live Site</Button></a>
      </Card.Body>
    </Card>
    ))}
    </div>
    </section>
  );
}

export default Portfolio;
