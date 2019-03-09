import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab);
export default class ContactIcon extends Component {
  render() {
    const { url, icon } = this.props;
    return (
      <a href={url} target="_blank">
        <FontAwesomeIcon className="icon" icon={icon} size="3x" />
      </a>
    );
  }
}
