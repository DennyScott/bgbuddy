import React from 'react';
import { Card, CardText, Button } from 'reactstrap';
import './EventCard.css';

const EventCard = props => (
  <Card block className="event-card">
    <div className="card-date">{ props.date }</div>
      <CardText>{ props.content }</CardText>
      <Button href="/meetup/1">See Event</Button>
  </Card>
);

EventCard.propTypes = {
  date: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
};

export default EventCard;
