import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'materialize-css/dist/css/materialize.min.css';
require('materialize-css');

// if(!(localStorage.getItem("TOKEN_ID"))){ //teste a ausencia de token
    ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
