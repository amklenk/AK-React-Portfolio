# React Portfolio

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This application is for a potential web developer to showcase their skills to an employer who is looking for candidates with experience building single-page applications. The employer should be able to view the potential employee's deployed React portfolio of work samples so that the employer can assess whether the portfolio's creator is a good candidate for an open position. The following were the additional requirements of the application:

* When the employer loads the portfolio, they are presented with a page containing a header, a section for content, and a footer.
* When the employer views the header, they are presented with the
<!-- TODO: fix icon for now -->
developer's name and navigation with titles corresponding to different sections of the portfolio.
* When the employer views the navigation titles, they are presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted.
* When the employer clicks on a navigation title, they are presented with the corresponding section below the navigation without the page reloading and that title is highlighted.
* When the employer loads the portfolio for the first time, the About Me title and section are selected by default.
* When the employer is presented with the About Me section, they see a recent photo or avatar of the developer and a short bio about them.
* When the employer is presented with the Portfolio section, they see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository.
* When the employer is presented with the Contact section, then they see a contact form with fields for a name, an email address, and a message.
* When the employer moves their cursor out of one of the form fields without entering text, then they receive a notification that this field is required.
* When the employer enters text into the email address field, they will receive a notification if they have entered an invalid email address.
* When the employer is presented with the Resume section, they see a link to a downloadable resume and a list of the developer’s proficiencies.
* When the employer views the footer, they are presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter).

## Table of Contents
- [Installation](#installation)
- [Links](#links)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation
Visit the GitHub repository, AK-React-Portfolio (see the link below in the Links section), to fork and clone the repository. The JSON file will have the necessary dependencies. Use
````````````
npm install
````````````
to install the dependencies locally.

## Links
- [GitHub Repo](https://github.com/amklenk/AK-React-Portfolio)
- [Deployed Application]()

## Usage
The following are screenshots of each rendered section of the deployed site: 

About Me:
![About Me Section]()

Portfolio:
![Portfolio Section]()

Skills:
![Skills Section]()

Contact:
![Contact Section]()

Resume:
![Resume Section]()

The public directory contains the index.html file, where the root div (from index.js in the root of src) is rendered. The src folder contains the assets directory, the components directory, the utils directory, App.js (where all of the components are rendered), index.css (the main style sheet), index.js (for rendering App), and the reportWebVitals file. The assets directory contains the directories for the project images, the skills icons, the footer icons, and the README images. The components directory contains directories for each component that contains an index.js for rendering each. The utils directory contains a helper function for validating an email address. The app is run in the terminal by typing
`````````
npm start
`````````
into the command line. This will turn on the server at localhost:3001. The app can also be run by visiting the live site, see the link in the Links section.

## License
The badge at the top of the page shows that this project is licensed under MIT. The link for that license is shown below.
- [License: MIT](https://opensource.org/licenses/MIT)

## How to Contribute
Please fork and clone the repository and use a pull request to add or make changes to the current repository.

## Questions
Please direct any questions to amandamklenk3@gmail.com. To see more projects, visit the link below for amklenk's respository:
- [Amanda Klenk's GitHub Repository](https://github.com/amklenk)


