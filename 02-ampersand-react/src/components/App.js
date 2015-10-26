import React from 'react';

import AttendeesForm from './AttendeesForm';
import AttendeesList from './AttendeesList';

import PizzaComponent from './PizzaComponent';
import BeerComponent from './BeerComponent';

import {connectToAmpersand} from '../utils/connectToAmpersand'

class AppComponent extends React.Component {
  render(){
    return (
      <div>
        <h1>Guy&#x27;s Meetup Planner</h1>

        <AttendeesForm
          addAttendee = {this.addAttendee}
          importAttendees = {this.importAtendees}
        />

        <AttendeesList
          attendees = {this.props.model.serialize()}
          handleRemoveAttendee = {this.removeAttendee}
        />

        <PizzaComponent number = {this.props.model.length} />

        <BeerComponent number = {this.props.model.length} />
     </div>
    );
  }

  // adds a new attendee to the meetup collection
  addAttendee = (person) => this.props.model.add(person);

  // removes... yeah
  removeAttendee = (person) => { console.log(person); this.props.model.remove(person); }

  // calls the collection fetch to get attendees from meetup
  importAtendees = () => this.props.model.fetch();
}

AppComponent.propTypes = {
  model: React.PropTypes.object.isRequired,
};

export default connectToAmpersand(AppComponent, ['model']);
