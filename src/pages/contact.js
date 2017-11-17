import React from 'react';
import FadeIn from 'react-fade-in';
import FontAwesome from 'react-fontawesome';

const ContactPage = () => (
  <FadeIn>
    <div className='grid-container'>
      <h1 className='text-center'>Contact</h1>
      <p className='text-center header'>Feel free to shoot me an email or contact me through one of the venues below, I'd love to chat.</p>
      <p className='text-center contact-link'>
        <a href='mailto:ajandorek@gmail.com'>ajandorek@gmail.com</a>
      </p>
      <div className='grid-container'>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/alecjandorek/" target="_blank">
            <FontAwesome
              className="icon"
              name='linkedin-square'
              size='2x'
            />
          </a>
          <a href="https://github.com/ajandorek" target="_blank">
            <FontAwesome
              className="icon"
              name='github-square'
              size='2x'
            />
          </a>
        </div>
      </div>
    </div>
  </FadeIn>
);

export default ContactPage
