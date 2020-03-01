
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import Overtime from './Overtime';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Overtime />, document.getElementById('root'));

serviceWorker.register();
