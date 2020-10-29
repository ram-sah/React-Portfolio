import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header.js'
import Footer from './Footer.js'

export const ColorScheme = {
  primary: 'red',
  secondary: 'blue',
  third: 'purple',
  fourth: 'goldenrod'
}

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.5em;
`;

export const CenteredHeader = styled.h2`
  text-align: center;
  margin-top: 2em;
`
const ContainerDiv = styled.div`
  margin: 1% 15% 3% 15%;
  flex: 1;
  font-family: 'Open Sans', sans-serif; 
  @media (max-width: 600px) {
    margin: 0%;
    width: 100%
  }
`
class App extends Component {
  render() {
    return (

      <div>
        <AppDiv>
          <Header />
          <ContainerDiv>
            {this.props.children}
          </ContainerDiv>
          <Footer />
        </AppDiv>
      </div>
    );
  }
}

export default App;

{/* <div  style={{ backgroundImage:`url(${background})` }}></div>
<section className="card mb-3" style={ {width: "1000px" }}></section> */}