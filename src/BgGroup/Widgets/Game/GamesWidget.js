import React, { Component } from 'react';
import { Widget, WidgetBody, WidgetTitle } from '../../Widget/Widget';

import {
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

export default class GamesWidget extends Component {

  static propTypes = {
    games: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      image: React.PropTypes.string.isRequired,
      thumbnail: React.PropTypes.string.isRequired,
    })).isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget className="my-games">
        <WidgetTitle title="Games"/>
        <WidgetBody>
          <Row>
            {this.props.games.map(game =>
              (
                <Col sm="12" key={game.id}>
                    <Card block className="game">
                        <CardTitle>{game.name}</CardTitle>
                        <img src={game.thumbnail} height="128" width="128" />
                    </Card>
                </Col>
              )
            )}
          </Row>
          </WidgetBody>
      </Widget>
    );
  }
}
