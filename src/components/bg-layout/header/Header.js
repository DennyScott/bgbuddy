import React from 'react';
import './Header.css';

const Header = props => (
  <div className="layout-header">
    <div className="group-title col col-xs-12">
        <img className="group-image" alt="group" src={ props.image }></img>
        <span className="group-title-text">{ props.title }</span>
    </div>
  </div>
);

Header.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Header;
