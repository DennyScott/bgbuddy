import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//Components
import Navigation from './Navigation/Navigation'
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import MyGroups from './BgGroup/MyGroups/MyGroups';
import Group from './BgGroup/Group/Group';
import Games from './BgGroup/Games/Games';
import Meetup from './BgGroup/Meetup/Meetup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      <Router>
        <div className="">
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signup/" component={SignUp} />
          <Route path="/login/" component={Login} />
          <Route path="/mygroups/" component={MyGroups} />
          <Route path="/games/" component={Games} />
          <Route path="/group/:id" component={Group} />
          <Route path="/meetup/:id" component={Meetup} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
