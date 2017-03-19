import React, { Component } from 'react';
import { Card, CardText, Button } from 'reactstrap';
import './EventCard.css';

export default class EventCard extends Component {
  static propTypes = {
    date: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
  };

  render() {
    return (
    <Card block className="event-card">
      <div className="card-date">{this.props.date}</div>
        <CardText>{this.props.content}</CardText>
        <Button>See Event</Button>
    </Card>
  );
  }
}
