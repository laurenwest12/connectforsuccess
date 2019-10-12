import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SingleMentor from './Components/SingleMentor';
import AllMentors from './Components/AllMentors';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AllMentors} />
        <Route path="/mentor/:id" component={SingleMentor} />
      </Router>
    );
  }
}
