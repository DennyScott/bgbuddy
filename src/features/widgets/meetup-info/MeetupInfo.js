import React from 'react';
import { WidgetTitle, WidgetBody, Widget } from '../../../components/widget/Widget';

const MeetupInfo = props => (
  <Widget>
  <WidgetTitle title="Meetup info" />

  <WidgetBody>
    <div>Date: { props.info.date }</div>
    <div>Time: { props.info.time }</div>
    <div>Location: { props.info.location }</div>
    <div>Description: { props.info.description }</div>
  </WidgetBody>

  </Widget>
);

MeetupInfo.propTypes = {
  info : React.PropTypes.shape({
    date: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  }).isRequired
};

export default MeetupInfo;
