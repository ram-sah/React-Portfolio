import React, { Component } from "react";
import styled from "styled-components";
import './Style.css';
import { ColorScheme } from "../theme/styleConstants";
import { CenteredHeader } from "./App.js";

export const PortButton = styled.a`
  padding: 10px;
  font-size: 15px;
  margin-left: 1%;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.secondary1};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }
  @media (max-width: 340px) {
    margin-left: 1%;
    padding: 5px;
  }
`;

const PortButtonContainer = styled.div`  
  margin-top: 20px;
  text-align: right;
  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 7px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary1};
  text-align: center;
  border-radius: 3px;
  width: 8em;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.5px;
  animation: blinkingBackground 2s infinite;
  @keyframes blinkingBackground{
    0%		{ background-color: #10c018;}
    25%		{ background-color: #1056c0;}
    50%		{ background-color: #ef0a1a;}
    75%		{ background-color: #254878;}
    100%	{ background-color: #04a1d5;}
  @media (max-width: 600px) {   
  font-size: 16px;
  }
`;
const Skill = styled.ul`  
  padding: 5px;
  margin: 5% 10% 1% 10%;
  text-align: center;
  color: black;  
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 1.5px; 

  @media (max-width: 600px) {
  padding: 2px 2px 0px;
  margin: 0px;
  font-size: 22px;
  
  }     
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div className='portfolioPg'>
          <Skill>Skills:</Skill>
          <hr className="divider my-4" />
          <div className="row skills">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3><UsedItem>Front-end:</UsedItem></h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>JavaScript (ES6)</li>
                <li>ReactJs</li>
                <li>Redux</li>
                <li>AJAX</li>
                <li>JSON</li>
                <li>jQuery</li>
                <li>Handlebars</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3><UsedItem>Back-end:</UsedItem></h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Mongoose ODM</li>
                <li>C#</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3><UsedItem>Server Side:</UsedItem></h3>
              <ul>
                <li>Templating Engines</li>
                <li>Creating APIs</li>
                <li>User Authentication</li>
                <li>ORM (Sequelize)</li>
                <li>MVC</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3><UsedItem>Other:</UsedItem></h3>
              <ul>
                <li>Git Hub</li>
                <li>Webpack</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </div>
        <Skill>My Project Work:</Skill>
        <hr className="divider my-4" />
        <div className="portfolio1" id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a className="portfolio-box" href="https://ram-sah.github.io/Weather-Dashboard" target="_blank">
                  <img className="img-fluid az"  src={require("../assets/weather.jpg")}
                    alt="weather" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">&#9758; Live-Demo: Weather-Dashboard</div>
                    <hr className="divider2 my-4" />
                    <div className="project-name">5-Day Weather Dashboard to see the weather of any City.
                    This App helps to save data on local-storage and revisit previous searches as easy to click buttons.
                    <hr />
                      <p className="project-tech">Technology Used:</p>
                      <div className="row">
                        <div className="column">
                          <ul className="card-text1">
                            <li>JavaScript</li>
                            <li>CSS3</li>
                            <li>HTML</li>
                            <li>Ajax</li>
                            <li>Bootstrap</li>
                          </ul>
                        </div>
                        <div className="column">
                          <ul className="card-text1">
                            <li>Weather Map API</li>
                            <li>JQuery</li>
                            <li>Momentjs</li>
                            <li>Font Awesome</li>
                            <li>localStorage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/ram-sah/Weather-Dashboard" target="_blank"><i
                  className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                </a>
              </div>
              {/* eat sa burger */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a className="portfolio-box" href="https://da-burger20.herokuapp.com/" target="_blank">
                  <img className="img-fluid az"  src={require("../assets/burger.gif")}
                    alt="Eat-da-Burger" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">&#9758; Live-Demo: Eat da Burger App</div>
                    <hr className="divider2 my-4" />

                    <div className="project-name">It is a restaurant App that lets users input the names of the burgers they'd like the eat.
                    it will generate under the to be eaten heading. User can Devour that burger by clicking on it.</div>
                    <hr />
                    <p className="project-tech">Technology Used:</p>
                    <div className="row">
                      <div className="column">
                        <ul className="card-text1">
                          <li>JavaScript</li>
                          <li>MySQL</li>
                          <li>express-handlebars</li>
                          <li>Font Awesome</li>
                          <li>express</li>
                        </ul>
                      </div>
                      <div className="column">
                        <ul className="card-text1">
                          <li>JQuery</li>
                          <li>CSS3</li>
                          <li>Bootstrap</li>
                          <li>JawsDB</li>
                          <li>Heroku</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/ram-sah/eat-da-burger" target="_blank"><i
                  className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                </a>
              </div>
              {/* Google Book Search */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a className="portfolio-box" href="https://google-book-search20.herokuapp.com" target="_blank">
                  <img className="img-fluid az"  src={require("../assets/google-Book.png")}
                    alt="Google-Book" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">&#9758; Live-Demo: Google-Book-Search</div>
                    <hr className="divider2 my-4" />
                    <div className="project-name">This App utilizes React lifecycle methods to query and
                    display books based on user searches, and uses MongoDB so that users can save books to review or purchase later.</div>
                    <hr />
                    <p className="project-tech">Technology Used:</p>
                    <div className="row">
                      <div className="column">
                        <ul className="card-text1">
                          <li>JavaScript</li>
                          <li>Node</li>
                          <li>ReactJs</li>
                          <li>Ajax</li>
                          <li>Bootstrap, CSS</li>
                        </ul>
                      </div>
                      <div className="column">
                        <ul className="card-text1">
                          <li>Google-API</li>
                          <li>JQuery</li>
                          <li>MongoDB</li>
                          <li>Font Awesome</li>
                          <li>Mongoose ODM</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/ram-sah/Google-Books-Search-React" target="_blank"><i
                  className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                </a>
              </div>
            {/* Flip card styles Start-1*/}
            <div className="col-lg-4 col-md-6 col-sm-12 card-container">
              <div className="card-flip">
                <div className="card front">
                  <img src={require("../assets/employee-directory.png")} className="card-img-top img-fluid az2" />
                  <div className="card-block">
                    <h4 className=" text-white-50">Employee Directory</h4>
                    <p className="ml-2 mb-2 text-justify mr-2">
                    This app utilizes an API to populate random users and then create a directory. App Users can filter or search for employee's details by "Name" and also organize each field by (their Name, Last name, Email, DOB, Phone Number) in ascending or descending order. This application helps user to view their entire employee directory at once so that they can have quick access to their information.                    
                    </p>
                  </div>
                </div>
                {/* <!-- Card 2 Back --> */}
                <div className="card back">
                  <div className="card-header text-dark text-white-50">
                    <strong>Front-end Application</strong>
                  </div>
                  <div className="card-block">
                    <h6 className=" mt-2 text-white-50 text-dark">Technologies Used</h6>
                    <hr className="divider my-4" />
                    <ul className="card-text">
                      <li>React.js</li>
                      <li>React-Bootstrap</li>
                      <li>React-router-dom</li>
                      <li>React-scripts</li>
                      <li>NodeJs</li>
                      <li>JavaScript</li>
                      <li>CSS3</li>
                      <li>JSX</li>
                      <li>Axios</li>
                      <li>API</li>
                      <li>Moment</li>
                      <li>Font Awesome</li>
                      <li>Gh-pages</li>
                    </ul>
                    <a href="https://github.com/ram-sah/Employee-Directory" target="_blank"
                    ><PortButton>GitHub Repo</PortButton></a>
                    <a href="https://ram-sah.github.io/Employee-Directory"
                      target="_blank"><PortButton>Project URL</PortButton> </a>
                  </div>
                </div>
              </div><hr className="divider1" />
            </div>

            {/* project:2 flip style*/}
            <div className="col-lg-4 col-md-6 col-sm-12 card-container">
              <div className="card-flip">
                <div className="card front">
                  <img src={require("../assets/project-2.png")} className="card-img-top img-fluid az2" />
                  <div className="card-block">
                    <h4 className=" text-white-50 mt-1">Wine 'A' Lot Management System</h4>
                    <p className="ml-2 mb-2 text-justify mr-2">This Business Purpose project helps to keep track the inventory and sales information.
                    This Application is a simple reporting dashboard to quickly visualize historical sales data and make data driven decisions.
                    Users can easily find the Slow or fast movement of their products also Slaes Margin, profit and loss in their business.
                </p>
                  </div>
                </div>
                {/* <!-- Card 2 Back --> */}
                <div className="card back">
                  <div className="card-header text-dark text-white-50">
                    <strong>Project-2: Front/Back End Application</strong>
                  </div>
                  <div className="card-block">
                    <h4 className=" mt-2 text-white-50 text-dark">Technologies Used:</h4>
                    <hr className="divider my-4" />
                    <ul className="card-text">
                      <li>Express-handlebars</li>
                      <li>NodeJs</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Express</li>
                      <li>MySQL</li>
                      <li>Migration</li>
                      <li>Sequelize</li>
                      <li>Sequelize-cli</li>
                      <li>Moment</li>
                      <li>Travis/ Eslint</li>
                      <li>Amcharts</li>
                      <li>Bootstrap</li>
                      <li>CSS3</li>
                      <li>JawsDB</li>
                      <li>Heroku</li>
                    </ul>
                    <a href="https://github.com/ram-sah/Project-2" target="_blank"
                    ><PortButton>GitHub Repo </PortButton></a>
                    <a href="https://project-2-group1.herokuapp.com/7"
                      target="_blank"><PortButton>Project URL </PortButton></a>
                  </div>
                </div>
              </div><hr className="divider1" />
            </div>

            {/* project:3 flip style*/}
            <div className="col-lg-4 col-md-6 col-sm-12 card-container">
              <div className="card-flip">
                <div className="card front">
                  <img src={require("../assets/project-3.png")} className="card-img-top img-fluid az2" />
                  <div className="card-block">
                    <h4 className=" text-white-50 mt-1">Veteran Discount App:</h4>
                    <p className="ml-2 mb-2 text-justify mr-2">This is a Full Stack App with a database of all businesses that offer a Veterans discount,
                    what that discount will be, a map with the closest location, and a scannable QRcode that eventually would be used to
                    scan at the business of users choosing. Also, this App makes it easier to prove users Veteran status, Only Valid Veteran will be able to login.
                </p>
                  </div>
                </div>
                {/* <!-- Card 2 Back --> */}
                <div className="card back">
                  <div className="card-header text-dark text-white-50">
                    <strong>Project-3: Full Stack Web Application</strong>
                  </div>
                  <div className="card-block">
                    <h4 className=" mt-2 text-white-50 text-dark">Technologies Used:</h4>
                    <hr className="divider my-4" />
                    <ul className="card-text">
                      <li>ReactJs</li>
                      <li>React-router-dom</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Express</li>
                      <li>Mongoose</li>
                      <li>Yelp API</li>
                      <li>Google Map API</li>
                      <li>Axios</li>
                      <li>Bcryptjs</li>
                      <li>jsonwebtoken</li>
                      <li>QRcode</li>
                      <li>Travis</li>
                      <li>Eslint</li>
                      <li>React-google-maps</li>
                      <li>CSS3/ Bootstrap</li>
                      <li>MongoDB</li>
                      <li>Heroku</li>
                    </ul>
                    <a href="https://github.com/ydoc118/project3" target="_blank"
                    ><PortButton>GitHub Repo </PortButton></a>
                    <a href="https://vetdiscount.herokuapp.com/"
                      target="_blank"><PortButton>Project URL </PortButton></a>
                  </div>
                </div>
              </div><hr className="divider1" />
            </div>

            </div>

          </div>
        </div>
        <PortButtonContainer>
          <PortButton href="#">HOME ▲</PortButton>
        </PortButtonContainer>
        {/* </div> */}
      </div>
    );
  }
}

export default Code;
