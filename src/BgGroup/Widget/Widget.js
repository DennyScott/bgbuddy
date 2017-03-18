import React, { Component } from 'react';

class Widget extends Component {
  render() {
    return (
      <div className="widget group-body-component">
        {this.props.children}
      </div>
    );
  }
}

class WidgetTitle extends Component {
  render() {
    return (
      <div className="group-body-header">
        {this.props.children}
      </div>
    );
  }
}

class WidgetBody extends Component {
  render() {
    return(
      <div className="group-component-body">
        {this.props.children}
      </div>
    );
  }
}

export {Widget, WidgetTitle, WidgetBody};
