import React, { Component } from 'react';
import mentors from '../data.js';

class AllMentors extends Component {

  state = {
    mentors: mentors
  }

  render() {

  const filteredMentors = this.state.mentors.map((p, i) => {
    return <div key={i}>
      <h1>{p.firstName} {p.lastName}</h1>
      <p>Location: {p.location}</p>
      <p>Industry: {p.industry}</p>
      <p>Skills: {p.skills}</p>
      <p>Connection: {p.connection}</p>
      <p>Days Available: {p.daysAvailable}</p>
      <p>Times Available: {p.timesAvailable}</p>
    </div>
  })

    return (
      <div>
      {filteredMentors}
      </div>
    );
  }
}

export default AllMentors;
