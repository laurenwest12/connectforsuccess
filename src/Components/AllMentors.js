import React, { Component } from 'react';
import mentors from '../data.js'

class AllMentors extends Component {

  state = {
    mentors: mentors
  }


  render() {

console.log(this.state.mentors);


    return (
      <div>

      </div>
    );
  }
}

export default AllMentors;
