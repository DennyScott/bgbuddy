import React, { Component } from 'react';
import { WidgetTitle, WidgetBody, Widget } from '../../Widget/Widget';

export default class MeetupInfo extends Component {

  static propTypes = {
    info : React.PropTypes.shape({
      date: React.PropTypes.string.isRequired,
      time: React.PropTypes.string.isRequired,
      location: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    }).isRequired
  };

  render() {
    return (
      <Widget>
      <WidgetTitle title="Meetup info" />

      <WidgetBody>
        <div>Date: { this.props.info.date }</div>
        <div>Time: { this.props.info.time }</div>
        <div>Location: { this.props.info.location }</div>
        <div>Description: { this.props.info.description }</div>
      </WidgetBody>

      </Widget>
    );
  }
}
