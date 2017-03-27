import React, { Component } from 'react';
import { WidgetTitle, WidgetBody, Widget } from '../../Widget/Widget';

export default class GameVote extends Component {

  render() {
    return(
      <Widget>
        <WidgetTitle title="Vote: Select your game" />
        <WidgetBody>
          Select a game
        </WidgetBody>
      </Widget>
    );
  }
}
