import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';
import Pdf from '../assets/RAM-resume.pdf';

const ProfileImage = styled.img`
  width: 10em;
  height: 11em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: #2e7c16;
  font-family: cursive;
  font-weight: bolder; 
  
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 10px;
  color: purple;
  font-size: 26px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage src={require('../assets/ram.jpg')} alt='Ram Sah'/>
          <ProfileTitle>RAM SAH</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>           
           {/* <NavLink to=''>RESUME</NavLink> */}
           <NavLink href ={Pdf} target="_black">RESUME</NavLink>
           
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;