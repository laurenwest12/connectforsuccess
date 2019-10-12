import React, { Component } from 'react';
import './App.css';

import SingleMentor from './Components/SingleMentor';
import AllMentors from './Components/AllMentors';

export default class App extends Component {
  state = {
    show: false,
    mentor: {
      firstName: 'Lauren',
      lastName: 'West',
      email: 'lwest@gmail.com',
      location: 'Los Angeles',
      industry: 'Data Analytics',
      connection: ['ongoing'],
      skills: ['interview prep', 'job search', 'networking'],
      daysAvailable: ['Monday', 'Tuesday', 'Wednesday'],
      timesAvailable: ['evening'],
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  };

  showSingleMentor = mentor => {
    this.setState({ mentor: mentor, show: true });
  };

  showAll = () => {
    this.setState({ show: false, mentor: [] });
  };



  render() {
    return (
      <div>
        <img
          src="https://3xokx41zp3859n32sf9l2o17-wpengine.netdna-ssl.com/wp-content/themes/dfs/library/images/dfs-logo.png"
          alt="dress-for-success-logo"
          className="logo"
        ></img>
        <div>
          <h3>Location</h3>
          <h3>Connection</h3>
          <h3>Days</h3>
          <h3>Times</h3>
          <h3>Skills</h3>
        </div>
        <button
          type="button"
          onClick={this.showAll}
          className="allMentorsButton"
        >
          Mentors
        </button>
        {this.state.show ? (
          <SingleMentor mentor={this.state.mentor} showAll={this.showAll} />
        ) : (
          <AllMentors showSingleMentor={this.showSingleMentor} />
        )}
      </div>
    );
  }
}
