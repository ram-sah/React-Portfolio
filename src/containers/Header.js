import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';
import Pdf from '../assets/RAM-resume.pdf';
import Nav from './Nav.js'

const ProfileImage = styled.img`
  width: 10em;
  height: 10em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: #1f10de;
  font-family: cursive;
  font-weight: bolder;
  padding-top: 2%; 
  
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 5px 10px;
  color: purple;
  font-size: 26px;
`
class Header extends Component {
  render() {
    return (
      <figure className="aboutMe">
      <HeaderDiv><Nav />
        <Link to="/">
          <ProfileImage src={require('../assets/ram.jpg')} alt='Ram Sah' />
          <ProfileTitle>FULL STACK WEB DEVELOPER</ProfileTitle>   
          <hr className="divider my-4" />      
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>PORTFOLIO</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
          <NavLink href={Pdf} target="_black">RESUME</NavLink>
        </div>
        <hr />
      </HeaderDiv>
      </figure>
    );
  }
}

export default Header;