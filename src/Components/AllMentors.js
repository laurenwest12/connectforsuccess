import React, { Component } from 'react';
import mentors from '../data.js';
import ava from '../ava.jpg';

class AllMentors extends Component {

  state = {
    mentors: [],
    filters: []
  }

  componentDidMount(){
    this.setState({mentors})
  }

  arrayToList = (arr) => {
    return arr.join(' ')
  }

  setFilters = () => {
    console.log('hi');
  }

 filteredMentors = () => {
  return this.state.mentors.map((p, i) => {
  return <div className='mentor' key={i}>
    <img src={ava} alt='mentor'/>
    <h1 onClick={() => {this.props.showSingleMentor(p)}}>{p.firstName} {p.lastName}</h1>
    <p>Location: {p.location}</p>
    <p>Industry: {p.industry}</p>
    <p>Skills: {this.arrayToList(p.skills)}</p>
    <p>Connection: {this.arrayToList(p.connection)}</p>
    <p>Days Available: {this.arrayToList(p.daysAvailable)}</p>
    <p>Times Available: {this.arrayToList(p.timesAvailable)}</p>
  </div>
  })
}

  render() {


    return (
      <>
      <div id='filters'>
        <h3>Location</h3>

        <h3>Connection</h3>
          <label>Casual<input type='checkbox' onChange={() => {this.setFilters('casual')}}/></label>
          <label>Online<input type='checkbox' onChange={() => {this.setFilters('online')}}/></label>
          <label>In-person<input type='checkbox' onChange={() => {this.setFilters('in-person')}}/></label>
          <label>Ongoing<input type='checkbox' onChange={() => {this.setFilters('ongoing')}}/></label>
        <h3>Days</h3>
          <label>Monday<input type='checkbox' onChange={() => {this.setFilters('Monday')}}/></label>
          <label>Tuesday<input type='checkbox' onChange={() => {this.setFilters('Tuesday')}}/></label>
          <label>Wednesday<input type='checkbox' onChange={() => {this.setFilters('Wednesday')}}/></label>
          <label>Thursday<input type='checkbox' onChange={() => {this.setFilters('Thursday')}}/></label>
          <label>Friday<input type='checkbox' onChange={() => {this.setFilters('Friday')}}/></label>
          <label>Saturday<input type='checkbox' onChange={() => {this.setFilters('Saturday')}}/></label>
          <label>Sunday<input type='checkbox' onChange={() => {this.setFilters('Sunday')}}/></label>
        <h3>Times</h3>
          <label>Morning<input type='checkbox' onChange={() => {this.setFilters('morning')}}/></label>
          <label>Afternoon<input type='checkbox' onChange={() => {this.setFilters('afternoon')}}/></label>
          <label>Evening<input type='checkbox' onChange={() => {this.setFilters('evening')}}/></label>
        <h3>Skills</h3>
          <label>Interview Prep<input type='checkbox' onChange={() => {this.setFilters('interview prep')}}/></label>
          <label>Salary Negotiation<input type='checkbox' onChange={() => {this.setFilters('salary negotiation')}}/></label>
          <label>Job Search<input type='checkbox' onChange={() => {this.setFilters('job search')}}/></label>
          <label>Networking<input type='checkbox' onChange={() => {this.setFilters('networking')}}/></label>
          <label>Resume<input type='checkbox' onChange={() => {this.setFilters('resume')}}/></label>
          <input type='submit' />
      </div>
      <div className='mentors'>
      {this.filteredMentors()}
      </div>
      </>
    );
  }
}

export default AllMentors;
