import React, {Component} from 'react';
import { connect } from 'react-redux';

import {BGTemplate, BGLeftBody, BGRightBody} from '../BGLayout/BGTemplate/BGTemplate';
import NextEvent from '../Widgets/NextEvent/NextEvent';
import OpenVoting from '../Widgets/OpenVoting/OpenVoting';
import Groups from '../Widgets/Groups/Groups';


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
