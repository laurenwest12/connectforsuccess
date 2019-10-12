import React, { Component } from 'react';
import mentors from '../data.js';
import ava from '../ava.jpg';

class AllMentors extends Component {
  state = {
    mentors: []
  };

  componentDidMount() {
    this.setState({ mentors });
  }

  arrayToList = arr => {
    return arr.join(' ');
  };

  render() {
    const filteredMentors = this.state.mentors.map((p, i) => {
      return (
        <div className="mentor" key={i}>
          <img src={ava} alt="mentor" />
          <h1 className="mentorName">
            {p.firstName} {p.lastName}
          </h1>
          <div className="mentorInformation">
            <p>
              <div className="header">Location: </div>
              {' ' + p.location}
            </p>
            <p>
              <div className="header">Industry: </div>
              {' ' + p.industry}
            </p>
            <p>
              <div className="header">Skills: </div>
              {' ' + p.skills}
            </p>
            <p>
              <div className="header">Connection: </div>
              {' ' + p.connection}
            </p>
            <p>
              <div className="header">Days Available: </div>
              {' ' + p.daysAvailable}
            </p>
            <p>
              <div className="header">Times Available: </div>
              {' ' + p.timesAvailable}
            </p>
          </div>
        </div>
      );
    });

    return <div className="mentors">{filteredMentors}</div>;
  }
}

export default AllMentors;
