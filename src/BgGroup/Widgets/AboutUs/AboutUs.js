import React, { Component } from 'react';

import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';

export default class AboutUs extends Component {
  static propTypes = {
    info: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Widget>
        <WidgetTitle title="About Us" />
        <WidgetBody>
          {this.props.info}
        </WidgetBody>
      </Widget>
    );
  }
}
