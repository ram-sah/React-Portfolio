import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';
import Pdf from '../assets/RAM-resume.pdf';
import Nav from './Nav.js';
import Animate from './Animate.js';
import './Style.css';
import { ColorScheme } from "../theme/styleConstants";
// Zoom-out
import Zoom from 'react-reveal/Zoom';

const ProfileImage = styled.img`
  width: 8em;
  height: 9em;
  border-radius: 50%;
  margin-top: -70px;
  border: 2px solid #293;
  @media (max-width: 600px) {   
    margin-top: -20px;
    }   
`;

const ProfileTitle = styled.h1`
  color: white;
  font-family: cursive,Times, serif;
  font-weight: bolder;
  padding-top: 2%; 
  
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
   
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 5px 10px;
  color: #146b15;
  font-size: 38px;
  @media (max-width: 600px) {   
    font-size: 30px;
  }   
  &:hover {    
    transform: scale(1.15);    
  }
`
class Header extends Component {
  render() {
    return (
      <figure className="aboutMe">
      <Zoom>
      <Nav />
      <HeaderDiv>
        <Link to="/">
          <ProfileImage className='img' src={require('../assets/ram.jpg')} alt='Ram Sah' />  
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
      </Zoom> 
      </figure>
    );
  }
}

export default Header;