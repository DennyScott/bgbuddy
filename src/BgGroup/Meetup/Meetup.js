import React, { Component } from 'react';

import { BGTemplate, BGLeftBody, BGRightBody } from '../BGLayout/BGTemplate/BGTemplate';
import MeetupInfo from '../Widgets/MeetupInfo/MeetupInfo';
import NextEvent from '../Widgets/NextEvent/NextEvent';
import OpenVoting from '../Widgets/OpenVoting/OpenVoting';
import AttendingMeetup from '../Widgets/AttendingMeetup/AttendingMeetup';
import ScheduleVote from '../Widgets/Votes/ScheduleVote';
import GameVote from '../Widgets/Votes/GameVote';

export default class Meetup extends Component {

  data = {
    meetupInfo : {
      date: "January 3rd, 2017",
      time: "12:45pm - 4:00pm",
      location: "Dennys House",
      description: "We'll be playing a couple of my favourite games, but be sure to bring any others that you would like to see. I'll having some snacks and drinks for all of us. If anyone feels like it, we also order a pizza later on!"
    },
    header : {
      title: "Weekly Thursday Night Meetup",
      image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
    },
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
        attending: "no",
        id: 0,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        attending: "no",
        id: 1,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        attending: "no",
        id: 2,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        attending: "no",
        id: 3,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        attending: "yes",
        id: 4,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        attending: "yes",
        id: 5,
      },
      {
        name: "Denny Scott",
        image: "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png",
        attending: "maybe",
        id: 6,
      },
    ]
  };

  render() {
    return(
      <BGTemplate className="Meetup" header={this.data.header}>
        <BGLeftBody>
          <MeetupInfo info={ this.data.meetupInfo } />
          <ScheduleVote />
          <GameVote />

        </BGLeftBody>

        <BGRightBody>
          <AttendingMeetup members={ this.data.members } />
          <NextEvent event={ this.data.nextEvent }/>
          <OpenVoting events={ this.data.openVoting }/>
        </BGRightBody>
      </BGTemplate>
    );
  }
}
