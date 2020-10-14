import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;  
`;

const CodeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h4`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
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

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
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
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h3>Front-end:</h3>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>AJAX</li>
                <li>jQuery</li>                
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h3>Back-end:</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h3>Other:</h3>
              <ul>
                <li>Git Hub</li>
                <li>Webpack</li>
                <li>JSON</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHeader>My Recent Work:</CenteredHeader>
          <PortRow>
            <a href="https://damp-brushlands-54954.herokuapp.com" target="_blank">
              <CodeThumbnail src={require("../assets/burger.gif")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>eat-da-burger</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://damp-brushlands-54954.herokuapp.com" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/ram-sah/eat-da-burger"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                This project is a Command-line Application for Resturant Service!
              </PortDescription>

              <UsedList>
                <UsedItem>NodeJs</UsedItem>
                <UsedItem>Heroku</UsedItem>
              </UsedList>
            </PortAllText>

          </PortRow>
          <hr />
          <PortRow>
            <a href="https://progressive-budget20.herokuapp.com/" target="_blank">
              <CodeThumbnail src={require("../assets/Budget-Tracker.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Progressive Budget</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://progressive-budget20.herokuapp.com" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/ram-sah/Progressive-Budget"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                This project, users will be able to track their withdrawals and deposits with or without an internet connection.!
              </PortDescription>

              <UsedList>
                <UsedItem>NodeJs</UsedItem>
                <UsedItem>Heroku</UsedItem>
                <UsedItem>mongoDB</UsedItem>
              </UsedList>
            </PortAllText>
            </PortRow>            
            <hr />
            <PortRow>
            <a href="https://fitness-tracker20.herokuapp.com/?id=5f7258b3eefd640017741c45" target="_blank">
              <CodeThumbnail src={require("../assets/Fitness-Tracker.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Fitness-Tracker</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://fitness-tracker20.herokuapp.com/?id=5f7258b3eefd640017741c45" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/ram-sah/Fitness-Tracker"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                This Fitness Tracker is an Application to view, create and track daily workouts!
              </PortDescription>

              <UsedList>
                <UsedItem>NodeJs</UsedItem>
                <UsedItem>Heroku</UsedItem>
                <UsedItem>mongoDB</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />

        </div>
      </div>
    );
  }
}

export default Code;
