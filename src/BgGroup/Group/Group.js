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

export default class Group extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
        }
    }

    render() {
        return (
            <div className="group">
                <div className="group-header row">
                    <div className="row group-title col col-xs-12">
                        IQ Metrix
                    </div>
                </div>

                <div className="group-body row">
                    <div className="group-body-left col col-md-8">

                        <div className="next-event group-body-component">
                            Next Event
                        </div>

                        <div className="chat group-body-component">
                          <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className={classnames({
                                        active: this.state.activeTab === '1'
                                    })} onClick={() => {
                                        this.toggle('1');
                                    }}>
                                        Game Nights
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({
                                        active: this.state.activeTab === '2'
                                    })} onClick={() => {
                                        this.toggle('2');
                                    }}>
                                        People
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>

                        <div className="group-data">
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Tab 1 Contents</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="6">
                                            <Card block>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                        <Col sm="6">
                                            <Card block>
                                                <CardTitle>Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                                <Button>Go somewhere</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                  </div>
                    <div className="group-body-right col col-md-4">
                        <div className="members group-body-component">
                            <div className="group-body-header">
                                Members (10)
                            </div>
                            <img className="member-avatar img-thumbnail" src="http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
