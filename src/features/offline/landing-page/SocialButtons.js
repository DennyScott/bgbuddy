import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

export default class SocialButtons extends Component {
  data = {
    twitter: "https://twitter.com/boardgamepal",
    github: "https://github.com/DennyScott/boardgamepal",
  }
  render() {
    return(
      <ul className="list-inline intro-social-buttons">
        <li>
          <a href={this.data.twitter} className="btn btn-default btn-lg">
            <i className="fa fa-twitter fa-fw"></i>
            <span className="network-name">Twitter</span>
          </a>
        </li>
        <li>
          <a href={this.data.github} className="btn btn-default btn-lg">
            <i className="fa fa-github fa-fw"></i>
            <span className="network-name">Github</span>
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-default btn-lg">
            <i className="fa fa-linkedin fa-fw"></i>
            <span className="network-name">LinkedIn</span>
          </a>
        </li>
      </ul>
    );
  }
}
