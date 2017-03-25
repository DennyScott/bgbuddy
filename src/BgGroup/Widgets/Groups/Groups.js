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
              <Col sm="12">
                  <Card block className="game-group">
                      <CardTitle>Pizza Hut Game Group</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button href="/group/1">See More</Button>
                  </Card>
              </Col>
              <Col sm="12">
                  <Card block className="game-group">
                      <CardTitle>IQ Metrix Super Game Board Bros</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>See More</Button>
                  </Card>
              </Col>
          </Row>

          <Row>
              <Col sm="12">
                  <Card block className="game-group">
                      <CardTitle>Denny and Travis Game Test Night</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>See More</Button>
                  </Card>
              </Col>
              <Col sm="12">
                  <Card block className="game-group">
                      <CardTitle>Scotts Game Group</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>See More</Button>
                  </Card>
              </Col>
          </Row>
          </WidgetBody>
          <CreateGroup modal={this.state.modal} toggle={this.toggle}/>
      </Widget>
    );
  }
}
