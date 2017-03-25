import React, { Component } from 'react';
import { WidgetTitle, WidgetBody, Widget } from '../../Widget/Widget';

export default class ScheduleVote extends Component {

  render() {
    return(
      <Widget>
        <WidgetTitle title="Vote: Select your day" />
        <WidgetBody>
          Select a day
        </WidgetBody>
      </Widget>
    );
  }
}
