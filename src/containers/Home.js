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
        <hr className="divider my-4" />
        <CenteredHeader1><strong>Hello 👋 !<br/>  I'm Ram, I live with creativity.</strong></CenteredHeader1>
        <div className="home">
        Thank you for stopping by to visiting my portfolio. I am excited to transition my career from customer service to being a Full-Stack JavaScript Developer.
        I am an enthusiastic developer working with new technologies and always keep on learning new things.
        I enjoy coding, I have a passion for building awesome architecture, design with code, and developing to create user-friendly applications and serve the needs of the business with a balanced delivery of high-quality solutions. I have completed my Full-Stack Web Developer course from <a href="https://www.upenn.edu/" target="_blank">University of Pennsylvania,</a> Penn LPS Coding Bootcamp, Philadelphia in 2020 with Grade "A+", where I honed my skills in HTML5, CSS3, Bootstrap, JavaScript, ES6, JQuery, ReactJs, Redux, Handlebars, Ajax, APIs, Nodejs, Node Express, MySql, MongoDB, Heroku, Git, GitHub. I have a Bachelor's Degree in Mathematics and a Masters Degree from <a href="http://www.tribhuvan-university.edu.np/" target="_blank">Tribhuvan University </a>, Nepal in 2008.
        </div>
      </div>
      </Zoom>
    );
  }
}

export default Home;
