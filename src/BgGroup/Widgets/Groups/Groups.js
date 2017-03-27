import React, { Component } from 'react';
import { Widget, WidgetBody, WidgetTitle } from '../../Widget/Widget';
import CreateGroup from './CreateGroup';

import {
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

export default class Groups extends Component {

  static propTypes = {
    groups: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired,
    })).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  data = {
    icon: "fa fa-plus",
    action: this.toggle.bind(this),
  };

  render() {
    return (
      <Widget className="my-groups">
        <WidgetTitle title="Groups" button={this.data}/>
        <WidgetBody>
          <Row>
            {this.props.groups.map((group) => {
              return(
                <Col sm="12" key={group.id}>
                    <Card block className="game-group">
                        <CardTitle>{group.title}</CardTitle>
                        <CardText>{group.description}</CardText>
                        <Button href={`/group/${group.id}`}>See More</Button>
                    </Card>
                </Col>
              );
            })}
          </Row>
          </WidgetBody>
          <CreateGroup modal={this.state.modal} toggle={this.toggle}/>
      </Widget>
    );
  }
}
