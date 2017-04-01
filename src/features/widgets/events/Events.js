import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import { Widget, WidgetTitle, WidgetBody } from '../../../components/widget/Widget';
import './Events.css';
import EventCard from './event-card/EventCard';

const DisplayEventCards = events => (
  events.map( event =>
    <Col key={event.key} sm="12">
      <EventCard date={event.date} content={event.content} />
    </Col>
  )
)

const Events = props => {
  const eventCards = DisplayEventCards(props.events);

  return(
    <Widget className="events">
      <WidgetTitle title="Events" / >
        <WidgetBody className="event-data">
            <Row>
              { eventCards }
            </Row>
        </WidgetBody>
    </Widget>
  );
}

Events.propTypes = {
  events: React.PropTypes.array.isRequired,
};

export default Events;
