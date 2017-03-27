import React from 'react';
import EventCard from '../Events/EventCard/EventCard';
import { Widget, WidgetBody, WidgetTitle } from '../../Widget/Widget';

const GetsDaysForVoting = daysLeft => (
  `Open Voting (${daysLeft})`
)

const DisplayEventCards = events => (
  events.map( event =>
    <EventCard date={event.date} content={event.content} key={event.key} />
  )
)

const OpenVoting = props => {
  const daysForVoting = GetsDaysForVoting(props.events.length);
  const eventCards = DisplayEventCards(props.events);

  return (
    <Widget className="open-voting">
        <WidgetTitle title={ daysForVoting } />
        <WidgetBody>
          { eventCards }
        </WidgetBody>
    </Widget>
  );
}

OpenVoting.propTypes = {
    events: React.PropTypes.array.isRequired,
};

export default OpenVoting;
