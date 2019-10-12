import React, { Component } from 'react';
import mentors from '../data.js';
import ava from '../ava.jpg';

class AllMentors extends Component {

  state = {
    mentors: []
  }

  componentDidMount(){
    this.setState({mentors})
  }

  render() {

  const filteredMentors = this.state.mentors.map((p, i) => {
    return <div className='mentor' key={i}>
          <img src={ava} alt='mentor'/>
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
      <div className='mentors'>
      {filteredMentors}
      </div>
    );
  }
}

export default AllMentors;
