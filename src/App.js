import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Components
import Header from './Header/Header'
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import MyGroups from './BgGroup/MyGroups/MyGroups';
import Group from './BgGroup/Group/Group';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      <Router>
        <div className="content container">
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signup/" component={SignUp} />
          <Route path="/login/" component={Login} />
          <Route path="/mygroups/" component={MyGroups} />
          <Route path="/group/:id" component={Group} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;