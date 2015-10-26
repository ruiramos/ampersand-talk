
import React from 'react';
import Events from 'ampersand-events';

export var connectToAmpersand = (Component, models) => class extends React.Component {
  constructor(props){
    super(props);
    Object.assign(this, Events);
  }

  watch(model){
    if(!model || !(model.isCollection || model.isState)) return;

    let events = model.isCollection ? 'add remove reset' : 'change';

    this.listenTo(model, events, () => this.forceUpdate());

  }

  componentDidMount(){
    models.forEach(model => this.watch(this.props[model]));
  }

  componentWillUnmount(){
    this.stopListening();
  }

  render(){
    return (
      <Component {...this.props} />
    );
  }

}