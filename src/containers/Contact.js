import React, { Component } from 'react';
import styled from 'styled-components';
import { CenteredHeader, CenteredHeader1 } from './App.js'
import "./Styles.scss";
// Slide-left
import Slide from 'react-reveal/Slide';

const FormDiv = styled.div`
  margin: 0 auto;
  width: 70%;
  @media (max-width: 1000px) {
    padding: 0px;
    width: 100%
  }
`

const FormLabel = styled.label`
  display: block;
`

const FormInput = styled.input`
  width: 100%;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`

class Contact extends Component {

  render() {
    return (
      <Slide right>
      <div className='contactPg'>
        <CenteredHeader><strong>Let's Get in Touch!</strong></CenteredHeader>
        <hr className="divider my-4" />
        <FormDiv>
          <form action="https://formspree.io/rsah1@asu.edu" method="POST" id="contactform">
            <div>
              <FormLabel>Name:</FormLabel>
              <FormInput placeholder="Ram Sah" type="text" name="name" />
            </div>
            <div>
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" name="_replyto" placeholder="rsah1@asu.edu" />
            </div>
            <div>
              <FormLabel>Comment:</FormLabel>
              <CommentInput name="comment" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormDiv>

        <section>
          <CenteredHeader1>
           Need to reach out? Feel free to call or email me. 
          <h4>Name: Ram Sah</h4><h4>West Chester, PA- 19380.</h4>
          </CenteredHeader1>

          <div className="row">
            <div className="phoneMargin col-sm-12 col-md-6 col-lg-6 text-center mb-5 mb-lg-0">
              <i className="phoneSize">{"\uD83D\uDCF1"}</i>
              <div> <a href="tel:4846399591"> +1 (484) 639-9591</a></div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mr-auto text-center">
              <p className="hi mailSize fa fa-envelope fa-fw fa-2x"> </p>
              <div className="hi"> <a href="mailto:rsah1@asu.edu" target="_blank">rsah1@asu.edu</a></div>
            </div>
          </div>
        </section>
      </div>
      </Slide>
    );
  }
}

export default Contact;
