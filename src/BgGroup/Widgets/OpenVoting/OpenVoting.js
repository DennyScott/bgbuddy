import React, { Component } from 'react';
import EventCard from '../Events/EventCard/EventCard';
import { Widget, WidgetBody, WidgetTitle } from '../../Widget/Widget';

export default class OpenVoting extends Component {

  static propTypes : {
      events: React.PropTypes.array.isRequired,
  };

  render() {
    return (
      <Widget className="open-voting">
          <WidgetTitle>
              Open Voting ({this.props.events.length})
          </WidgetTitle>
          <WidgetBody>
          {this.props.events.map((event) => {
            return (
              <EventCard date={event.date}
              content={event.content}
              key={event.key} />
            );
          })}
          </WidgetBody>
      </Widget>
    );
  }
}
