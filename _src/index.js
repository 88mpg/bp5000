import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
require('./assets/stylesheets/base.scss');

ReactDOM.render(<App />, document.getElementById('page'));

console.log("Nothing is broken today 👍");
