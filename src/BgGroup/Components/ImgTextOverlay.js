import React from 'react';
import './ImgTextOverlay.css';

const icon = attending => {
  if(attending === "yes")
    return <i className="fa fa-check-circle" />
  else if(attending === "no")
    return <i className="fa fa-times-circle" />
  else {
    return <i className="fa fa-question-circle" />
  }
}

const ImgTextOverlay = props => {
  const iconOverlay = icon(props.member.attending);

  return (
    <div className="text-member-overlay">
      <div className="overlay-text">
        { iconOverlay }
      </div>
      <img className="member-avatar img-thumbnail"
        alt="user avatar"
        src={props.member.image} />
    </div>
  );
}

ImgTextOverlay.propTypes = {
  member: React.PropTypes.shape({
    image: React.PropTypes.string.isRequired,
    attending: React.PropTypes.string.isRequired,
  }).isRequired
}

export default ImgTextOverlay;
