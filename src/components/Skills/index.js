import React from 'react';

// funciton to render the Skills component
function Skills(){
    // icons object will all of the skills icons
    const icons = [
        {
        name: "HTML",
        src: require('../../assets/skill-icons/html.png')
         },
         {
            name: 'CSS',
            src: require('../../assets/skill-icons/css.png')
         },
         {
            name: 'Bootstrap',
            src: require('../../assets/skill-icons/bootstrap.png')
         },
         {
            name: 'Tailwind',
            src: require('../../assets/skill-icons/tailwind.png')
         },
         {
            name: 'Git',
            src: require('../../assets/skill-icons/git.png')
         },
         {
            name: 'JavaScript',
            src: require('../../assets/skill-icons/js.png')
         },
         {
            name: 'Node',
            src: require('../../assets/skill-icons/node.png')
         },
         {
            name: 'MySQL',
            src: require('../../assets/skill-icons/mysql.png')
         },
         {
            name: 'Sequelize',
            src: require('../../assets/skill-icons/sequelize.png')
         },
         {
            name: 'MongoDB',
            src: require('../../assets/skill-icons/mongo.png')
         },
         {
            name: 'Mongoose',
            src: require('../../assets/skill-icons/mongoose.png')
         },
         {
            name: 'React',
            src: require('../../assets/skill-icons/react.png')
         }
    ];

    return(
        <section className='mt-5 ms-5'>
            <h2 id='skills-title' className='vw-100 mb-5'>Here's what I know.</h2>
            <div className='d-flex flex-wrap justify-content-center'>
            {icons.map((icon)=> (
                <div key={icon.name}>
                    <h3 className='icon-title'>{icon.name}</h3>
                    <img src={icon.src} alt={icon.name} className='skill-icon mx-5 mb-5' id={icon.name}></img>
                </div>
            ))}
            </div>
        </section>
    )

}

export default Skills;