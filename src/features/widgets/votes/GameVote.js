import React from 'react';
import { WidgetTitle, WidgetBody, Widget } from '../../../components/widget/Widget';

const SingleGameComponent = props => (
  <span>{props.game.name}</span>
)

const GameVote = props => (
  <Widget>
    <WidgetTitle title="Vote: Select your game" />
    <WidgetBody>
      {props.games.map((game, i) => (
        <SingleGameComponent key={i} game={game} />
      ))}
      Select a game
    </WidgetBody>
  </Widget>
);

GameVote.propTypes = {
  games: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
  })).isRequired
}

export default GameVote;
