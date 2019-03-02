import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class ContactIcon extends Component {
  render() {
    const { url, icon } = this.props
    return (
      <a href={url} target="_blank">
        <FontAwesome className="icon" name={icon} size="2x" />
      </a>
    );
  }
}
