import React, { Component } from 'react';
import EventCard from '../Events/EventCard/EventCard';
import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';

export default class NextEvent extends Component {
  static propTypes = {
    event: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <Widget className="next-event">
          <WidgetTitle title={`Next Event (${this.props.event.daysUntill} days)`} />
          <WidgetBody>
            <EventCard date={ this.props.event.date }
              content={ this.props.event.content }/>
          </WidgetBody>
      </Widget>
    );
  }
}
