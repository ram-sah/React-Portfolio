import React, { Component } from "react";
import styled from "styled-components";
import '../containers/Style.css';
import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

export const PortButton = styled.a`
  padding: 10px 15px;
  background: #337ab7;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;
const Skill = styled.ul`  
  padding: 5px 7px 0px;
  margin: 5% 40% 5% 40%;
  text-align: center;
  color: black;  
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div className='portfolioPg'>
          <Skill>Skills:</Skill>
          <hr className="divider my-4" /><hr />
          <div className="row skills">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <h3><UsedItem>Front-end:</UsedItem></h3>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>AJAX</li>
                <li>JSON</li>
                <li>jQuery</li>
                <li>Bootstrap </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <h3><UsedItem>Back-end:</UsedItem></h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <h3><UsedItem>Server Side:</UsedItem></h3>
              <ul>
                <li>Templating Engines</li>
                <li>Creating APIs</li>
                <li>User Authentication</li>
                <li>ORM (Sequelize)</li>
                <li>MVC</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3">
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
        <hr />
        <div>
          <CenteredHeader>My Recent Work:</CenteredHeader>
          <hr className="divider my-4" />
          <div className="portfolio1" id="portfolio">
            <div className="container-fluid p-0">
              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://ram-sah.github.io/Employee-Directory/" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/employee-directory.png")}
                      alt="Employee-Directory" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Employee-Directory:</div><hr />
                      <div className="project-name">This app helps the user to view their entire employee directory and have quick access to their information!
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Employee-Directory" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://progressive-budget20.herokuapp.com/" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/Budget-Tracker.png")}
                      alt="Budget-Tracker" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Budget-Tracker App:</div><hr />
                      <div className="project-name">In this application, users will be able to track their withdrawals and deposits with or without an internet connection.!
                            </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Progressive-Budget" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://damp-brushlands-54954.herokuapp.com" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/burger.gif")}
                      alt="Eat-da-Burger" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Eat da Burger App App:</div><hr />
                      <div className="project-name">This is Resturant CLI Application lets users input the names of the burgers they'd like to eat.! </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/eat-da-burger" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>
              </div> <hr />

              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://fitness-tracker20.herokuapp.com/?id=5f7258b3eefd640017741c45" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/Fitness-Tracker.png")}
                      alt="Fitness-Tracker" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Fitness-Tracker App:</div><hr />
                      <div className="project-name">Fitness Tracker is an Application to view, create and track daily workouts!</div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Fitness-Tracker" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://project-2-group1.herokuapp.com" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/project-2.png")}
                      alt="project-2" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Project-2</div><hr />
                      <div className="project-name">Wine 'A' Lot Management System Help to Visualize Historical Sales Data ! </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Project-2" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://damp-dawn-43442.herokuapp.com" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/notetaker.jpg")}
                      alt="notetaker" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Budget-Tracker App:</div><hr />
                      <div className="project-name">In this application, users will be able to track their withdrawals and deposits with or without an internet connection.!
                            </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Note-Taker" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>
              </div> <hr />

              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://ram-sah.github.io/Weather-Dashboard" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/weather.jpg")}
                      alt="weather" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Weather-Dashboard:</div><hr />
                      <div className="project-name">My Weather-Dashboard Web Page to find <br />5-Days
                        Weather Forcast of any City !
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Weather-Dashboard" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://github.com/ram-sah/Employee-Summary#Demo" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/Employee-Summary.jpg")}
                      alt="Employee-Summary" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Employee Summary:</div><hr />
                      <div className="project-name">Command-line Application to Generates Team Profile !
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Employee-Summary" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://ram-sah.github.io/Employee-Tracker/" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/Employee-Tracker.jpg")}
                      alt="Employee-Tracker" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Employee Tracker:</div><hr />
                      <div className="project-name">This Application helps to manages a company's employees!
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Employee-Tracker" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>
              </div> <hr />

              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://ram-sah.github.io/Day-Planner" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/scheduler.jpg")}
                      alt="scheduler" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Day Planner:</div><hr />
                      <div className="project-name">This Application helps to keep track Day Planning the past, present, or future!
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/Day-Planner" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://ram-sah.github.io/4.Quiz-Code" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/code-quiz.png")}
                      alt="code-quiz" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Code Quiz Taker:</div><hr />
                      <div className="project-name">Code Quiz Taker Web Page to test Quiz knowledge on time frame !
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/4.Quiz-Code" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="https://ram-sah.github.io/3.Password-generator" target="_blank">
                    <img className="img-fluid az" style={{ width: "650px", height: "250px" }} src={require("../assets/password-generator.png")}
                      alt="password-generator" />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">Demo</div>
                      <hr className="divider my-4" />
                      <div className="project-category text-white-50">Password Generator:</div><hr />
                      <div className="project-name">Password Generator Web Page help to generaes passwords on the basis of prompt questions !
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/ram-sah/3.Password-generator" target="_blank"><i
                    className="fa fa-github fa-fw fa-2x cEZFfJ aaz"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <PortButtonContainer>
            <PortButton href="#">HOME ▲</PortButton>
          </PortButtonContainer>
        </div>
      </div>
    );
  }
}

export default Code;
