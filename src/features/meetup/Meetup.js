import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BGTemplate, BGLeftBody, BGRightBody } from '../../components/bg-layout/bg-template/BgTemplate';
import MeetupInfo from '../widgets/meetup-info/MeetupInfo';
import NextEvent from '../widgets/next-event/NextEvent';
import OpenVoting from '../widgets/open-voting/OpenVoting';
import AttendingMeetup from '../widgets/attending-meetup/AttendingMeetup';
import ScheduleVote from '../widgets/votes/ScheduleVote';
import GameVote from '../widgets/votes/GameVote';

class Meetup extends Component {

  render() {

    const { meetup } = this.props;

    return(
      <BGTemplate className="Meetup" header={meetup.header}>
        <BGLeftBody>
          <MeetupInfo info={ meetup.meetupInfo } />
          <ScheduleVote schedule={ meetup.schedule }/>
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
