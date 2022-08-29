import React from 'react';
import portfolioPicture from '../../assets/portfolio-pic.jpg';
import Dots from '../../assets/dots-vert.png'

// style component
const fontStyles = {
    textDecoration: "none",
    color: "#F28C28"
}

// function for rendering the About component
function About(){
    return(
        <section className='mt-5 d-flex flex-column' id='bioinfodiv'>
        <div className='w-100 mt-3'>
            <h1 id='about-title'>Hi, I'm Amanda Klenk.</h1>
        </div>
        <div className='d-flex flex-md-nowrap flex-sm-wrap' id='about-div'>
            <p id='about-text'>
            I am a Junior Full-Stack Developer looking to join a collaborative, client-focused team. As a former teacher turned coder, I am looking to bring my time-management and collaboration skills to the table. I
            have a passion for accessible, responsive, and dynamic web design. Want to see more? Follow <a href='https://github.com/amklenk' target='_blank' rel='noopener noreferrer' style={fontStyles} className='bio-a'>amklenk</a> on GitHub. Questions? Contact me
            via email at <a href='mailto: amandamklenk3@gmail.com' target='_blank' rel='noopener noreferrer' style={fontStyles} className='bio-a'>amandamklenk@gmail.com</a>.
            </p>
            <img className='my-3 mx-3 align-self-center' src={portfolioPicture} alt='Amanda Klenk' style={{ height: '50%'}} id='port-photo'></img>
            <img src={Dots} alt="dots graphic" className='dots-vert'/>
        </div>
        </section>
    )
}

export default About;