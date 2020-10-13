import React, { Component } from 'react'
import { CenteredHeader } from './App.js'
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader> <strong> WELCOME !</strong> </CenteredHeader>
        <CenteredHeader>Hello ! I'm a Full Stack Web Developer.</CenteredHeader>
        <div className="home">

        My Name is Ram Sah! Thank you for visiting my portfolio. I have completed my Full Stack Web Developer Course from Penn LPS Boot Camp
        Philadelphia, <a href="https://www.upenn.edu/" target="_blank">University of Pennsylvania. </a>
        I'm a Full Stack Web Developer with a passion for building awesome Design with Code.        
        My journey into <strong>Full Stack Web Developer </strong>
        started on May-2020. Since then, I've been doing well in my class even I am not from
        Computer background. I enjoy Coding. I am a Full Stack Web Developer.
        I have completed HTML5, CSS, JavaScript, JQuery, Ajax, APIs, Bootstrap,
        GitHub, Nodejs, Node Express Handlebars, MySql, MongoDB, Redux, ReactJs, Heroku.
        I have completed Masters Degree from Tribhuvan University, Nepal in 2008.
        
        </div>
   
      </div>
    );
  }
}

export default Home;
