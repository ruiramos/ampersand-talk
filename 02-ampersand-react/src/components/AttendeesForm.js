import React from 'react';

export default class AttendeesForm extends React.Component {
  render(){
    return (
      <p>
        <label>Name:</label>
        <input ref="name" type="text" onKeyDown={this.handleInputKeydown}/>
        <button onClick={this.handleAddClick}>Add</button> or <button onClick={this.props.importAttendees}>Import from Meetup.com</button>
      </p>
    )
  }

  handleInputKeydown = (e) => {
    e.which === 13 && this.handleAddClick();
  }

  handleAddClick = () => {
    this.props.addAttendee({
      name: this.refs.name.value
    });

    this.refs.name.value = '';
  }
}

AttendeesForm.propTypes = {
  importAttendees: React.PropTypes.func.isRequired,
  addAttendee: React.PropTypes.func.isRequired
};
