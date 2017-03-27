import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {

  static propTypes = {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  };

  render() {

    return (
      <div className="layout-header">
        <div className="group-title col col-xs-12">
            <img className="group-image" alt="group" src={this.props.image}></img>
            <span className="group-title-text">{this.props.title}</span>
        </div>
      </div>
    );
  }
}
