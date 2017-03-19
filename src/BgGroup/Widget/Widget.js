import React, { Component } from 'react';
import './Widget.css';

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
  render() {
    return (
      <div className={`${this.props.className} widget-header`}>
        {this.props.children}
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
