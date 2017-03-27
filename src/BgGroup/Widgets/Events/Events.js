import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';
import './Events.css';
import EventCard from './EventCard/EventCard';

export default class Events extends Component {
  static propTypes = {
    events: React.PropTypes.array.isRequired,
  };
  render() {
    return (
      <Widget className="events">
        <WidgetTitle title="Events" / >
          <WidgetBody className="event-data">
              <Row>
              {this.props.events.map((event) => {
                return (
                  <Col key={event.key} sm="12">
                    <EventCard date={event.date} content={event.content} />
                  </Col>
                );
              })}
              </Row>
          </WidgetBody>
      </Widget>
    );
  }
}
