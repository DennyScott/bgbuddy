import React, { Component } from 'react';

import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';

export default class AboutUs extends Component {
  render() {
    return (
      <Widget>
        <WidgetTitle>About Us</WidgetTitle>
        <WidgetBody>
          {this.props.children}
        </WidgetBody>
      </Widget>
    );
  }
}
