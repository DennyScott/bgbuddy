import React, { Component } from 'react';

import Header from '../Header/Header';
import './BGTemplate.css';

class BGTemplate extends Component {
  static propTypes = {
    header: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className={`${ this.props.className } BGTemplate container content`}>
        <div className="group-header row">
          <Header image={this.props.header.image} title={this.props.header.title} />
        </div>

        <div className="group-body row">
          { this.props.children }
        </div>
      </div>
    );
  }
}

class BGLeftBody extends Component {
  render() {
    return (
      <div className="group-body-left col col-md-8 col-sm-12">
        {this.props.children}
      </div>
    );
  }
}

class BGRightBody extends Component {
  render() {
    return (
      <div className="group-body-right col col-md-4 col-sm-12">
        {this.props.children}
      </div>
    );
  }
}

export { BGTemplate, BGLeftBody, BGRightBody };
