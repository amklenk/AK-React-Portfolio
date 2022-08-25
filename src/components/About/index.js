import React from 'react';
import portfolioPicture from '../../assets/portfolio-pic.jpg';

const fontStyles = {
    textDecoration: "none",
    color: "#F28C28"
}

function About(){
    return(
        <section className='d-flex flex-column align-items-center mt-5' id='bioinfodiv'>
        <h1 id='about-title' className='mb-3'>Meet Amanda Klenk!</h1>
        <img className='mb-3' src={portfolioPicture} alt='Amanda Klenk' style={{ width: '25%' }}></img>
        <p id='about-text'>
        I am a Junior Full-Stack Developer looking to join a collaborative, client-focused team. As a former teacher turned coder, I am looking to bring my time-management and collaboration skills to the table. I
        have a passion for accessible, responsive, and dynamic web design. Want to see more? Follow <a href='https://github.com/amklenk' target='_blank' rel='noopener noreferrer' style={fontStyles} className='bio-a'>amklenk</a> on GitHub. Questions? Contact me
        via email at <a href='mailto: amandamklenk3@gmail.com' target='_blank' rel='noopener noreferrer' style={fontStyles} className='bio-a'>amandamklenk@gmail.com</a>.
        </p>
        </section>
    )
}

export default About;