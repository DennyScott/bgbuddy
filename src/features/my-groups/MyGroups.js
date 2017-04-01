import React, {Component} from 'react';
import { connect } from 'react-redux';

import {BGTemplate, BGLeftBody, BGRightBody} from '../../components/bg-layout/bg-template/BgTemplate';
import NextEvent from '../widgets/next-event/NextEvent';
import OpenVoting from '../widgets/open-voting/OpenVoting';
import Groups from '../widgets/groups/Groups';


class MyGroups extends Component {

    render() {
      const { myGroups } = this.props;

        return (
            <BGTemplate className="myGroups" header={myGroups.header}>
                <BGLeftBody>
                    <Groups groups={myGroups.groups }/>
                </BGLeftBody>

                <BGRightBody>
                  <NextEvent event={ myGroups.nextEvent } />
                  <OpenVoting events={ myGroups.openVoting } />
                </BGRightBody>
            </BGTemplate>
        );
    }
}

const mapStateToProps = state => (
  {
    myGroups: state.myGroups
  }
)

export default connect(mapStateToProps)(MyGroups);
