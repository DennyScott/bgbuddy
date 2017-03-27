import React from 'react';
import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';
import './Members.css';

const GetMemberTitle = membersCount => (
  `Members (${ membersCount })`
)

const DisplayMemberAvatars = members => (
  members.map( member =>
    <img className="member-avatar img-thumbnail"
      alt="user avatar"
      key={member.key}
      src={member.image} />
  )
)

const Members = props => {
  const memberTitle = GetMemberTitle(props.members.length);
  const memberAvatars = DisplayMemberAvatars(props.members);

  return (
    <Widget className="members">
      <WidgetTitle title={ memberTitle } />
      <WidgetBody className="member-avatars">
        { memberAvatars }
      </WidgetBody>
    </Widget>
  );
}

Members.propTypes = {
  members: React.PropTypes.array.isRequired,
};

export default Members;
