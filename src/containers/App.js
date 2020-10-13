import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.js'
import Footer from './Footer.js'

import background from '../assets/background.jpg'

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
  font-size: 1.15em;
`;

export const CenteredHeader = styled.h3`
  text-align: center;
  margin-bottom: 1.25em;
`


const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif; 
`
  
class App extends Component {
  render() {
    return (

<div  styles={{ backgroundImage:`url(${background})` }}>
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
