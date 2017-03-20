import React, { Component } from 'react';
import { Widget, WidgetBody, WidgetTitle } from '../../Widget/Widget';

import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

export default class Groups extends Component {

  render() {
    return (
      <Widget className="my-groups">
        <WidgetTitle>Groups</WidgetTitle>
        <WidgetBody>
          <div className="my-groups-header">
              <Button color="primary" className="col col-md-2 push-md-10" href="/creategroup/">Create Group</Button>
          </div>

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
      </Widget>
    );
  }
}
