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

import { BGTemplate, BGLeftBody, BGRightBody } from '../BGLayout/BGTemplate/BGTemplate';
import AboutUs from '../Widgets/AboutUs/AboutUs';
import Members from '../Widgets/Members/Members';
import Events from '../Widgets/Events/Events';
import NextEvent from '../Widgets/NextEvent/NextEvent';
import OpenVoting from '../Widgets/OpenVoting/OpenVoting';


export default class Group extends Component {

  data = {
    aboutUs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam dolor, porta vitae tristique eu, imperdiet a justo. Cras ultricies, elit in imperdiet dapibus, felis mauris suscipit eros, quis vestibulum enim orci condimentum risus. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc tincidunt magna id tristique suscipit. Aliquam erat volutpat",
    header: {
      groupName: "IQ Metrix Boardgame Night",
      groupImage: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
    },
    events: [
      {
        date: "January 3, 2017",
        content: "With supporting text below as a natural lead-in to additional content.",
        key: 1,
      },
      {
        date: "January 5, 2017",
        content: "With supporting text below as a natural lead-in to additional content.",
        key: 2,
      }
    ],
    nextEvent: {
      date: "January 3, 2017",
      content: "With supporting text below as a natural lead-in to additional content.",
      daysUntill: "2",
    },
    openVoting: [
      {
        date: "January 3, 2017",
        content: "Voting open for Board Games",
        key: 1,
      },
      {
        date: "January 8 - 13, 2017",
        content: "Voting open for Day Availability",
        key: 2,
      },

    ],
    members: [
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 0,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 1,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 2,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 3,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 4,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 5,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        key: 6,
      },
    ]
  };

    render() {
        return (
            <BGTemplate className="group" header={ this.data.header }>
              <BGLeftBody>

                  <AboutUs info={this.data.aboutUs} />

                  <Events events={this.data.events}/>
              </BGLeftBody>
              <BGRightBody>

                  <Members members={ this.data.members } />

                  <NextEvent event={this.data.nextEvent} />

                  <OpenVoting events={this.data.openVoting} />

              </BGRightBody>
            </BGTemplate>
        );
    }
}
