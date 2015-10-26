import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import Meetup from './models/meetup';

ReactDOM.render(<App model={new Meetup()} />, document.querySelector('#app'));