import React, {Component} from 'react';
import { connect } from 'react-redux';

import { BGTemplate, BGLeftBody, BGRightBody } from '../BGLayout/BGTemplate/BGTemplate';
import AboutUs from '../Widgets/AboutUs/AboutUs';
import Members from '../Widgets/Members/Members';
import Events from '../Widgets/Events/Events';
import NextEvent from '../Widgets/NextEvent/NextEvent';
import OpenVoting from '../Widgets/OpenVoting/OpenVoting';


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
