import React, { Component } from 'react';
import './App.css';

import SingleMentor from './Components/SingleMentor';
import AllMentors from './Components/AllMentors';

export default class App extends Component {

  state = {
    show: false,
    mentor: []
  }

  showSingleMentor = (mentor) => {
    this.setState({mentor: mentor, show: true})
  }

  showAll = () =>  {
    this.setState({show: false, mentor: []})
  }




  render() {
    return (
      <div>
      {
        this.state.show ?
        <SingleMentor mentor={this.state.mentor} showAll={this.showAll} />
        :
        <AllMentors showSingleMentor={this.showSingleMentor} />
      }
      </div>
    );
  }
}
