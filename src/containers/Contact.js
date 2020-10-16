import React, { Component } from 'react';
import styled from 'styled-components';
import { CenteredHeader } from './App.js'
import "./Style.css";
const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
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
      <div className='contactPg'>
        <CenteredHeader className="letsBold">Let's Get in Touch with Me!</CenteredHeader>
        <hr className="divider my-4" />
        <FormDiv>
          <form action="https://formspree.io/rsah1@asu.edu" method="POST" id="contactform">
            <div>
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" name="name" />
            </div>
            <div>
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" name="_replyto" />
            </div>
            <div>
              <FormLabel>Comment:</FormLabel>
              <CommentInput name="comment" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormDiv>

        <section id="contact" className="section page-section green">
          <CenteredHeader>
            Need to reach out? Feel free to call or email me.
          </CenteredHeader>

          <div className="row">
            <div className="phoneMargin col-lg-6 text-center mb-5 mb-lg-0">
              <i className="phoneSize">{"\uD83D\uDCF1"}</i>
              <div>  +1 (484) 639-9591</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="hi mailSize fa fa-envelope fa-fw fa-2x"> </i>
              <div className="hi"> <a href="mailto:rsah1@asu.edu">rsah1@asu.edu</a></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
