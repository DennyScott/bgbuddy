import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BGTemplate, BGLeftBody, BGRightBody } from '../BGLayout/BGTemplate/BGTemplate';
import MeetupInfo from '../Widgets/MeetupInfo/MeetupInfo';
import NextEvent from '../Widgets/NextEvent/NextEvent';
import OpenVoting from '../Widgets/OpenVoting/OpenVoting';
import AttendingMeetup from '../Widgets/AttendingMeetup/AttendingMeetup';
import ScheduleVote from '../Widgets/Votes/ScheduleVote';
import GameVote from '../Widgets/Votes/GameVote';

class Meetup extends Component {

  render() {

    const { meetup } = this.props;

    return(
      <BGTemplate className="Meetup" header={meetup.header}>
        <BGLeftBody>
          <MeetupInfo info={ meetup.meetupInfo } />
          <ScheduleVote />
          <GameVote />

        </BGLeftBody>

        <BGRightBody>
          <AttendingMeetup members={ meetup.members } />
          <NextEvent event={ meetup.nextEvent }/>
          <OpenVoting events={ meetup.openVoting }/>
        </BGRightBody>
      </BGTemplate>
    );
  }
}

const mapStateToProps = state => (
  {
    meetup: state.meetup,
  }
);

export default connect(mapStateToProps)(Meetup);
