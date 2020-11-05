import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';
import Pdf from '../assets/RAM-resume.pdf';
import Nav from './Nav.js'
import Animate from '../Animate.js'

const ProfileImage = styled.img`
  width: 8em;
  height: 9em;
  border-radius: 50%;
  margin-top: -40px;
`;

const ProfileTitle = styled.h1`
  color: white;
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
  font-size: 38px;
  @media (max-width: 600px) {   
    font-size: 30px;
    }
`
class Header extends Component {
  render() {
    return (
      <figure className="aboutMe">
        <Nav />
      <HeaderDiv>
        <Link to="/">
          <ProfileImage src={require('../assets/ram.jpg')} alt='Ram Sah' />  
          <ProfileTitle><Animate /></ProfileTitle>   
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