import React, {Component} from 'react';

import {BGTemplate, BGLeftBody, BGRightBody} from '../BGLayout/BGTemplate/BGTemplate';
import NextEvent from '../Widgets/NextEvent/NextEvent';
import OpenVoting from '../Widgets/OpenVoting/OpenVoting';
import Groups from '../Widgets/Groups/Groups';


export default class MyGroups extends Component {

    data = {
        header: {
            title: "My Groups",
            image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png"
        },
        groups: [
          {
            title: "Pizza Hut Game Group",
            description: "With supporting text below as a natural lead-in to additional content.",
            id: 1,
          },
          {
            title: "IQ Metrix Super Board Game Bros",
            description: "With supporting text below as a natural lead-in to additional content.",
            id: 2,
          },
          {
            title: "Denny and Travis Game Test Night",
            description: "With supporting text below as a natural lead-in to additional content.",
            id: 3,
          },
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
    }

    render() {
        return (
            <BGTemplate className="myGroups" header={this.data.header}>
                <BGLeftBody>
                    <Groups groups={ this.data.groups }/>
                </BGLeftBody>

                <BGRightBody>
                  <NextEvent event={ this.data.nextEvent } />
                  <OpenVoting events={ this.data.openVoting } />
                </BGRightBody>
            </BGTemplate>
        );
    }
}
