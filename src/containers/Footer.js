import React, { Component } from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../theme/styleConstants.js'

const FooterDiv = styled.div`
  padding 3rem;
  background-color: ${ColorScheme.mainLight};
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8% 0% 0% 7%;
  @media (max-width: 600px) {
    margin: 0%;
  }
`;

const SocialIcon = styled.li`
  display: inline;
  color: red;
`;

const FAIcon = styled.i`
  &:hover {
    color: ${ColorScheme.third}
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterDiv>

        <div className="col-sm-12 col-md-5 col-lg-4 linkList" style= {{textAlign: 'left' }} >
          <ul>
            <a>Name: Ram Sah</a><br />
            <a>Address: West chester, PA-19380</a><br />
            <a>Phone: +1 (484) 639-9591</a><br />
            <a href="mailto:rsah1@asu.edu" target="_blank">Email: rsah1@asu.edu</a><br />
            <a href="https://www.github.com/ram-sah" target="_blank">https://www.github.com/ram-sah</a><br />
            <a href="https://www.linkedin.com/in/ram-sah" target="_blank">https://linkedin.com/in/ram-sah</a><br />
            <a href="https://www.twitter.com/home" target="_blank">https://www.twitter.com/home</a><br />
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 linkIcon"  style= {{textAlign: 'left'}} >
          <SocialIconList>
            <SocialIcon><a href="mailto:rsah1@asu.edu" target="_blank"><FAIcon className="fa fa-envelope fa-fw fa-2x aaz1" /></a></SocialIcon>
            <SocialIcon><a href="https://www.linkedin.com/in/ram-sah" target="_blank"><FAIcon className="fa fa-linkedin fa-fw fa-2x aaz1" /></a></SocialIcon>
            <SocialIcon><a href="https://www.github.com/ram-sah" target="_blank"><FAIcon className="fa fa-github fa-fw fa-2x aaz1" /></a></SocialIcon>
            <SocialIcon><a href="https://www.twitter.com/home" target="_blank"><FAIcon className="fa fa-twitter fa-fw fa-2x aaz1" /></a></SocialIcon>
            <br />
            <p className="copyRight">© 2020 RAM SAH</p>
          </SocialIconList>
        </div>

      </FooterDiv>
    );
  }
}

export default Footer;
