import React, { Component } from 'react';
import './LandingPage.css';
import 'font-awesome/css/font-awesome.css';

import ipadImage from '../img/ipad.png';
import dogImage from '../img/dog.png';
import phoneImage from '../img/phones.png';

export default class LandingPage extends Component {
  render() {
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
                        <ul className="list-inline intro-social-buttons">
                            <li>
                                <a href="https://twitter.com/boardgamepal" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://github.com/DennyScott/boardgamepal" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>


    <div className="content-section-a">

        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Death to the Stock Photo:<br />Special Thanks</h2>
                    <p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src={ipadImage} alt="" />
                </div>
            </div>

        </div>
    </div>

    <div className="content-section-b">

        <div className="container">

            <div className="row justify-content-between">
              <div className="col-lg-5 col-sm-6">
                  <img className="img-responsive" src={dogImage} alt="" />
              </div>

                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">3D Device Mockups<br />by PSDCovers</h2>
                    <p className="lead">Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!</p>
                </div>

            </div>

        </div>

    </div>

    <div className="content-section-a">

        <div className="container">

            <div className="row justify-content-between">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Google Web Fonts and<br />Font Awesome Icons</h2>
                    <p className="lead">This template features the 'Lato' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.</p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src={phoneImage} alt="" />
                </div>
            </div>

        </div>

    </div>

    <div className="banner">

        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <h2>Find BG Buddy on: </h2>
                </div>
                <div className="col-lg-6">
                    <ul className="list-inline intro-social-buttons">
                        <li>
                            <a href="https://twitter.com/boardgamepal" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/DennyScott/boardgamepal" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
  </div>
    );
  }
}
