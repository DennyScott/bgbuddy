import React from 'react';
import { WidgetTitle, WidgetBody, Widget } from '../../../components/widget/Widget';
import { Card, CardImg, CardBlock, CardTitle, CardText, CardDeck, Button } from 'reactstrap';

const SingleGameComponent = props => (
  <Card className="single-game-component">
    <CardImg top width="100%" src={props.game.image} />

    <CardBlock>
      <CardTitle>{props.game.name}</CardTitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button className="fa fa-thumbs-up"></Button>
      <Button className="fa fa-thumbs-down"></Button>
    </CardBlock>
  </Card>
)

const GameVote = props => (
  <Widget>
    <WidgetTitle title="Vote: Select your game" />
    <WidgetBody>
      <CardDeck>
      {props.games.map((game, i) => (
        <SingleGameComponent key={i} game={game} />
      ))}
    </CardDeck>
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
