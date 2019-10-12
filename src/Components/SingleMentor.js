import React, { Component } from 'react';

class SingleMentor extends Component {
  render() {
    let { mentor } = this.props;
    return (
      <div className="singleMentorContainer">
        <img
          src="https://www.belr.com/wp-content/uploads/2017/06/avatar-placeholder-generic-1.jpg"
          alt="mentor"
          className="singleMentorImage"
        ></img>
        <div className="singleMentorName">
          {mentor.firstName.toUpperCase()} {mentor.lastName.toUpperCase()}
        </div>
        <div className="singleMentorLocation">{mentor.location}</div>
        <div className="singleMentorBio">{mentor.bio}</div>
      </div>
    );
  }
}

export default SingleMentor;
