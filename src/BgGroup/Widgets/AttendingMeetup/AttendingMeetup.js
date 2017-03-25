import React, { Component } from 'react';
import { WidgetTitle, WidgetBody, Widget } from '../../Widget/Widget';

export default class AttendingMeetup extends Component {
  static propTypes = {
    members: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      image: React.PropTypes.string.isRequired,
      attending: React.PropTypes.string.isRequired,
    })).isRequired,
  }

  render() {
    return(
      <Widget>
        <WidgetTitle title="Attending" />
        <WidgetBody>
          Attending Guests
        </WidgetBody>
      </Widget>
    );
  }
}
