import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LandingPage.css';


import SocialButtons from './SocialButtons';

class LandingPage extends Component {

  render() {
    const { landingPage } = this.props;
    return (
      <div className="landing-page">
        <div className="intro-header">
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1>Board Game Pal</h1>
                  <h3>Schedule, Plan, and Play a Great Board Game Night!</h3>
                  <hr className="intro-divider" />
                  <SocialButtons />
                </div>
              </div>
            </div>

          </div>
        </div>

        {landingPage.elements.map((element, i) => {
          return(
            <LandingElement title={element.title}
            body={element.body}
            image={element.image}
            order={i}
            key={i} />
        );
        })}

        <div className="banner">

          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <h2>Find BG Buddy on: </h2>
              </div>
              <div className="col-lg-6">
                <SocialButtons />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

class LandingElement extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    order: React.PropTypes.number.isRequired,
  };

  render() {
    return(
      <div className={this.props.order % 2 === 0 ? "content-section-a" : "content-section-b"}>

        <div className="container">
          <div className="row justify-content-between">

          {
            this.props.order % 2 !== 0 &&
            <div className="col-lg-5 col-sm-6">
              <img className="img-responsive" src={ this.props.image } alt="" />
            </div>
          }

            <div className="col-lg-5 col-sm-6">
              <hr className="section-heading-spacer" />
              <div className="clearfix"></div>
              <h2 className="section-heading">{this.props.title}</h2>
              <p className="lead">{this.props.body}</p>
            </div>

            {
              this.props.order % 2 === 0 &&
              <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <img className="img-responsive" src={ this.props.image } alt="" />
              </div>
            }
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    landingPage: state.landingPage,
  }
);

export default connect(mapStateToProps)(LandingPage);
