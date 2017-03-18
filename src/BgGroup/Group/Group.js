import React, {Component} from 'react';
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
import classnames from 'classnames';

import AboutUs from '../Components/AboutUs';

export default class Group extends Component {

    render() {
        return (
            <div className="group">
                <div className="group-header row">
                    <div className="group-title col col-xs-12">
                        <img className="group-image" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"></img>
                        <span className="group-title-text">
                            IQ Metrix Boardgame Night</span>
                    </div>
                </div>

                <div className="group-body row">
                    <div className="group-body-left col col-md-8 col-sm-12">

                        <AboutUs>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam dolor, porta vitae tristique eu, imperdiet a justo. Cras ultricies, elit in imperdiet dapibus, felis mauris suscipit eros, quis vestibulum enim orci condimentum risus. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tincidunt magna id tristique suscipit. Aliquam erat volutpat.
                        </AboutUs>

                        <div className="chat group-body-component">
                          <div className="group-body-header">
                            Events
                          </div>
                            <div className="group-data">
                                <Row>
                                    <Col sm="12">
                                        <Card block className="event-card">
                                          <div className="card-date">January 3, 2017</div>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>See Event</Button>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card block className="event-card">
                                          <div className="card-date">January 5, 2017</div>
                                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                            <Button>See Event</Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="group-body-right col col-md-4 col-sm-12">
                        <div className="members group-body-component">
                            <div className="group-body-header">
                                Members (10)
                            </div>
                            <div className="group-component-body member-avatars">
                                <img className="member-avatar img-thumbnail" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"></img>
                                <img className="member-avatar img-thumbnail" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"></img>
                                <img className="member-avatar img-thumbnail" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"></img>
                                <img className="member-avatar img-thumbnail" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"></img>
                                <img className="member-avatar img-thumbnail" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"></img>
                                <img className="member-avatar img-thumbnail" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"></img>
                            </div>
                        </div>

                        <div className="next-event group-body-component">
                            <div className="group-body-header">
                                Next Event (2 days)
                            </div>
                                <Card block className="event-card">
                                  <div className="card-date">January 3, 2017</div>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>See Event</Button>
                                </Card>
                        </div>

                        <div className="next-event group-body-component">
                            <div className="group-body-header">
                                Open Voting (2)
                            </div>
                                <Card block className="event-card">
                                  <div className="card-date">January 3, 2017</div>
                                    <CardText>Voting open for Board Games</CardText>
                                    <Button>See Event</Button>
                                </Card>

                                <Card block className="event-card">
                                  <div className="card-date">January 8 - 13, 2017</div>
                                    <CardText>Voting open for Day Availablity</CardText>
                                    <Button>See Event</Button>
                                </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
