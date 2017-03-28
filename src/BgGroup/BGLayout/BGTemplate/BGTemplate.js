import React from 'react';
import Header from '../Header/Header';
import './BGTemplate.css';

const BGTemplate = props => (
  <div className={`${ props.className } BGTemplate container content`}>
    <div className="group-header row">
      <Header image={ props.header.image } title={ props.header.title } />
    </div>

    <div className="group-body row">
      { props.children }
    </div>
  </div>
);

BGTemplate.propTypes = {
  header: React.PropTypes.object.isRequired,
}

const BGLeftBody = props => (
  <div className="group-body-left col col-md-8 col-sm-12">
    { props.children }
  </div>
);

const BGRightBody = props => (
  <div className="group-body-right col col-md-4 col-sm-12">
    { props.children }
  </div>
);

export { BGTemplate, BGLeftBody, BGRightBody };
