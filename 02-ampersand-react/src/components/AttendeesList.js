import React from 'react';

export default class AttendeesList extends React.Component {
  render(){
    let attendeesList = this.props.attendees.map((person, i) =>
      <li key={i}>
        <img src={person.thumb_link} className="profile-pic" />
        {person.name}
        <a href="#" data-id={person.id} onClick={this.handleRemoveAttendee} className="remove-attendee">x</a>
      </li>
    );

    return (
      <div className="attendees-list">
        <p>Attendees List: ({attendeesList.length} so far!)</p>
        <ul>{ attendeesList }</ul>
      </div>
    );
  }

  handleRemoveAttendee = (e) => {
    e.preventDefault();

    this.props.handleRemoveAttendee(e.target.attributes['data-id'].value);

    return false;
  }
}

AttendeesList.propTypes = {attendees: React.PropTypes.array.isRequired};
