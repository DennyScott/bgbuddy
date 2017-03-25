import React, { Component } from 'react';
import './Widget.css';
import { Button } from 'reactstrap';

class Widget extends Component {
  render() {
    return (
      <div className={`${this.props.className} widget`}>
        {this.props.children}
      </div>
    );
  }
}

class WidgetTitle extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    button: React.PropTypes.shape({
      name: React.PropTypes.string,
      action: React.PropTypes.func,
      icon: React.PropTypes.string
    }),
  };
  render() {
    return (
      <div className={`${this.props.className} widget-header`}>
          {this.props.title}
          {this.props.button? <Button className={`widget-header-button ${this.props.button.icon}`} onClick={this.props.button.action}>{this.props.name}</Button> : null}
      </div>
    );
  }
}

class WidgetBody extends Component {
  render() {
    return(
      <div className={`${this.props.className} widget-body`}>
        {this.props.children}
      </div>
    );
  }
}

export {Widget, WidgetTitle, WidgetBody};
