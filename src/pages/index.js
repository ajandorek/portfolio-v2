import React from 'react';
import FadeIn from 'react-fade-in';
import intro from '../content/intro';
import contactInfo from '../utils/contact.json';
import ContactIcon from '../components/ContactIcon';

const IndexPage = () => (
  <FadeIn>
    <div className="grid-container">
      <div className="header">
        <img src={require('../images/portfolio-image.png')} />
        <h1>Alec Jandorek</h1>
        <h3>Web Developer</h3>
      </div>
      <hr />
        <div dangerouslySetInnerHTML={{ __html: intro}} />
      <hr />
      <div className="grid-container">
        <div className="icon-container">
          {contactInfo.map(({url, icon}) => <ContactIcon url={url} icon={icon} />)}
        </div>
      </div>
    </div>
  </FadeIn>
);

export default IndexPage;
