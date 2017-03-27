import React from 'react';
import { WidgetTitle, WidgetBody, Widget } from '../../Widget/Widget';
import ImgTextOverlay from '../../Components/ImgTextOverlay';

const DisplayMembers = members => (
  members.map(member => <ImgTextOverlay key={member.id} member={member} />)
)

const AttendingMeetup = props => {
  const displayMembers = DisplayMembers(props.members);

  return(
      <Widget>
        <WidgetTitle title="Attending" />
        <WidgetBody>
          <div className="member-avatars members">
            { displayMembers }
        </div>
        </WidgetBody>
      </Widget>
  );
}

AttendingMeetup.propTypes = {
  members: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    image: React.PropTypes.string.isRequired,
    attending: React.PropTypes.string.isRequired,
  })).isRequired,
}

export default AttendingMeetup;
