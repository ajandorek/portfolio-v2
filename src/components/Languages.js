import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'



export default class Languages extends Component {
  render () {
    return (
      <div>
        <FontAwesomeIcon
          className='icon'
          icon={faCode}
          size='4x'
        />
        <h1>Tech Stack</h1>
      </div>
    );
  }
}