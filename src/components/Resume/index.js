import React from 'react';

function Resume() {
    return(
        <section className='container mt-5 mb-5 ms-3'>
            <h2 id='resume-title' className='row mb-3 ms-3'>Want to work with me?</h2>
            <div className='row d-flex justify-content-center'>
                <div className='col-6'>
                    <h3>Front-End Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Accessible & Responsive Design</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Tailwind</li>
                        <li>Git</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='col-6'>
                    <h3>Back-End Skills</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Inquirer.js</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
            </div>
            <a href='https://onedrive.live.com/?authkey=%21APpJo8jo129CSVo&cid=6D628FD0C4F28878&id=6D628FD0C4F28878%211265&parId=6D628FD0C4F28878%21104&o=OneUp' target="_blank" rel="noopener noreferrer" id='download-link'><h4>Download My Resume</h4></a>
            <iframe src="https://onedrive.live.com/embed?cid=6D628FD0C4F28878&resid=6D628FD0C4F28878%211265&authkey=AG-EA5uiO69JsvY&em=2" title='resume' width="75%" height="500" frameborder="0" scrolling="no"></iframe>
        </section>
)

}

export default Resume;