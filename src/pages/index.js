import React from 'react';
import FadeIn from 'react-fade-in';
import Link from 'gatsby-link';
import contactInfo from '../utils/contact.json';
import ContactIcon from '../components/ContactIcon';
import Languages from '../components/Languages';

const IndexPage = () => (
  <FadeIn>
    <div className="grid-container">
      <div className="header">
        <img src={require('../images/portfolio-image.png')} />
        <h1>Alec Jandorek</h1>
        <h3>Web Developer</h3>
      </div>
      <hr />
      <p>
        Hi There I'm Alec! I'm a full stack web developer living in Austin, TX. I am currently
        Developer at{' '}
        <a href="https://moove-it.com/" target="_blank">
          Moove It
        </a>
        . I focus primarily on projects that incorporate React and Redux, and challenging myself to
        always be on the cutting edge with new technologies.
      </p>
      <p>
        Feel free to take a look through my porfolio of applications I have created or collaborated
        on. Interested in chatting about an upcoming project? Drop me a line from one of the venues
        below and be sure to check out my <Link to='resume'>resume</Link>. I look forward to hearing from you!
      </p>
      {/* <Languages /> */}
      <hr />
      <div className="grid-container">
        <div className="icon-container">
          {contactInfo.map(({ url, icon }) => (
            <ContactIcon url={url} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  </FadeIn>
);

export default IndexPage;
