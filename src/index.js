import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AccordionApp from "./AccordionApp";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AccordionApp />, document.getElementById('root'));

serviceWorker.unregister();
