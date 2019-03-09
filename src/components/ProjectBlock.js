import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import LazyLoad from 'react-lazyload';

const Projects = props => {
  return (
    <div className="small-6 cell">
      <a className="callout" href={props.projects.url} target="blank">
        <h4 className="text-center">{props.projects.name}</h4>
        <LazyLoad>
        <img src={props.projects.image} />
        </LazyLoad>
        <p className="text-center">{props.projects.desc}</p>
        <h5 className="text-center">Technologies Used</h5>
        <p className="text-center">{props.projects.tech}</p>
      </a>
      <a className="callout git" href={props.projects.github} target="blank">
        <FontAwesomeIcon className="icon" icon={faGithub} size="4x" />
      </a>
    </div>
  );
};

export default Projects;
