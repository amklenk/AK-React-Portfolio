import React from 'react';
import portfolioPicture from '../../assets/portfolio-pic.jpg';

function About(){
    return(
        <section className='my-5' id='bioinfodiv'>
        <h1 id='about'>Meet Amanda Klenk!</h1>
        <img src={portfolioPicture} alt='Amanda Klenk' style={{ width: '25%' }}></img>
        <p id='about-text'>
        I am a Junior Full-Stack Developer looking to join a collaborative, client-focused team. As a former teacher turned coder, I am looking to bring my time-management and collaboration skills to the table. I
        have a passion for accessible, responsive, and dynamic web design.
        </p>
        </section>
    )
}

export default About;