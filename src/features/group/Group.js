import React, {Component} from 'react';
import { connect } from 'react-redux';

import { BGTemplate, BGLeftBody, BGRightBody } from '../../components/bg-layout/bg-template/BgTemplate';
import AboutUs from '../widgets/about-us/AboutUs';
import Members from '../widgets/members/Members';
import Events from '../widgets/events/Events';
import NextEvent from '../widgets/next-event/NextEvent';
import OpenVoting from '../widgets/open-voting/OpenVoting';


class Group extends Component {

    render() {
      const { group } = this.props;
        return (
            <BGTemplate className="group" header={ group.header }>
              <BGLeftBody>
                  <AboutUs info={ group.aboutUs } />
                  <Events events={ group.events }/>
              </BGLeftBody>

              <BGRightBody>
                  <Members members={ group.members } />
                  <NextEvent event={ group.nextEvent } />
                  <OpenVoting events={ group.openVoting } />
              </BGRightBody>
            </BGTemplate>
        );
    }
}

const mapStateToProps = state => (
  {
    group: state.group,
  }
);

export default connect(mapStateToProps)(Group);
