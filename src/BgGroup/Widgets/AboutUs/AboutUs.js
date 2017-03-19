import React, { Component } from 'react';

import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';

export default class AboutUs extends Component {
  static propTypes = {
    info: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Widget>
        <WidgetTitle>About Us</WidgetTitle>
        <WidgetBody>
          {this.props.info}
        </WidgetBody>
      </Widget>
    );
  }
}
