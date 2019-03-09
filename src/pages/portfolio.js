import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import projects from '../utils/projects.json';
import ProjectBlock from '../components/ProjectBlock';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects
    };
  }
  render() {
    return (
      <FadeIn>
        <div className="center">
          <h1 className="text-center page-title">Portfolio</h1>
          <h4 className="text-center">
            A collection of projects I have created or collaborated on
          </h4>
          <div className="grid-x grid-margin-x grid-width">
            {this.state.projects.map((project, i) => <ProjectBlock key={i} projects={project} />)}
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Portfolio;
