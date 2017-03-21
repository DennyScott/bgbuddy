import React, { Component } from 'react';
import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';
import './Members.css';

export default class Members extends Component {
  static propTypes = {
    members: React.PropTypes.array.isRequired,
  };

  render() {
    return (
      <Widget className="members">
        <WidgetTitle title={`Members (${this.props.members.length})`} />
        <WidgetBody className="member-avatars">
          { this.props.members.map((member) => {
            return (
              <img className="member-avatar img-thumbnail"
                   key={member.key}
                   src={member.image} />
            );
          }) }
        </WidgetBody>
      </Widget>
    );
  }
}
