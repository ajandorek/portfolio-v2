import React from 'react';
import Link from 'gatsby-link';
import FadeIn from 'react-fade-in';
import FontAwesome from 'react-fontawesome';

const IndexPage = () => (
  <FadeIn>
    <div className='grid-container'>
      <div className='header'>
        <img src={require('../images/portfolio-image.png')} />
        <h1>Alec Jandorek</h1>
        <h3>Web Developer</h3>
      </div>
      <hr />
      <p>Hi There I'm Alec! I'm a full stack web developer living in Austin, TX. I am a recent bootcamp graduate looking to break into the development field. I enjoy working on projects that incorporate React and Redux, and challenging myself to always be on the cutting edge with new technologies.</p>
      <p>Feel free to take a look through my porfolio of applications I have created or collaborated on. Interested in chatting about an upcoming project? Drop me a line from one of the venues below and be sure to check out my resume <Link to="/resume">here</Link>. I look forward to hearing from you!</p>
      <hr />
      <div className='grid-container'>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/alecjandorek/" target="_blank">
            <FontAwesome
              className="icon"
              name='linkedin'
              size='2x'
            />
          </a>
          <a href="https://github.com/ajandorek" target="_blank">
            <FontAwesome
              className="icon"
              name='github'
              size='2x'
            />
          </a>
          <a href="mailto:ajandorek@gmail.com">
            <FontAwesome
              className="icon"
              name='envelope'
              size='2x'
            />
          </a>
        </div>
      </div>
    </div>
  </FadeIn>
);

export default IndexPage
