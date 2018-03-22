import React from 'react';

const Projects = props => {
  return (
    <div className="small-4 large-offset-2 cell">
      <a className="callout" href={props.url} target="blank">
        <h4 className="text-center">{props.name}</h4>
        <img src={require(props.image)} />
        <p className="text-center">{props.description}</p>
        <h5 className="text-center">Technologies Used</h5>
        <p className="text-center">{props.tech}</p>
      </a>
      <a className="callout git" href={props.github} target="blank">
        <FontAwesome className="icon" name="github" size="4x" />
      </a>
    </div>
  );
};

export default Projects;
