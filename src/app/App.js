import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//Components
import Navigation from '../components/navigation/Navigation'
import LandingPage from '../features/offline/landing-page/LandingPage';
import SignUp from '../features/offline/sign-up/SignUp';
import Login from '../features/offline/login/Login';
import MyGroups from '../features/my-groups/MyGroups';
import Group from '../features/group/Group';
import Meetup from '../features/meetup/Meetup';

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
          <Route path="/group/:id" component={Group} />
          <Route path="/meetup/:id" component={Meetup} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
