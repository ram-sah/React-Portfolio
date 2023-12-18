import React, { Component } from 'react'
import { CenteredHeader1, CenteredHeader} from './App.js'
import '../theme/globalStyle'
import './Styles.scss'
// Zoom Animation
import Zoom from 'react-reveal/Zoom';

class Home extends Component {
  render() {
    return (
      // <section style={ {width: "1000px" }}></section>
      <Zoom >
      <div className='cardMain'>
        <CenteredHeader> <strong> WELCOME !</strong> </CenteredHeader>
        
        <CenteredHeader1><strong>Hello 👋 !<br/>  I'm Ram, I live with creativity.</strong></CenteredHeader1>
        <div className="home">
        Thank you for stopping by to visit my portfolio. I am excited to be a Full-Stack JavaScript Developer.
        I am an enthusiastic developer working with new technologies and always learning new things.
        I enjoy coding, I have a passion for building awesome architecture, designing with code, and developing to create user-friendly applications 
        and serve the needs of the business with a balanced delivery of high-quality solutions. I have completed my Full-Stack Web Developer course 
        from <a href="https://www.upenn.edu/" target="_blank">University of Pennsylvania,</a> Penn LPS Coding Bootcamp, Philadelphia in 2020 with a Grade "A+", 
        where I honed my skills in HTML5, CSS3, Bootstrap, JavaScript, ES6, JQuery, ReactJs, Redux, Handlebars, Ajax, APIs, Nodejs, Node Express, MySql, MongoDB, Mongoose, Heroku, GitHub, Tailwind CSS, Vite, NextJs, EJS. 
        I have a Bachelor's Degree in Mathematics and also completed a Master's Degree from <a href="http://www.tribhuvan-university.edu.np/" target="_blank">Tribhuvan University </a>, Nepal in 2008.
        </div>
      </div>
      </Zoom>
    );
  }
}

export default Home;
