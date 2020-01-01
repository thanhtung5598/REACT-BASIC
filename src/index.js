import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AccordionApp from "./AccordionApp";
import CounterApp from "./CounterApp";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CounterApp />, document.getElementById('root'));

serviceWorker.unregister();
