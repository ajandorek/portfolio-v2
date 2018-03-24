import React from 'react';
import FontAwesome from 'react-fontawesome';
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
        <FontAwesome className="icon" name="github" size="4x" />
      </a>
    </div>
  );
};

export default Projects;
