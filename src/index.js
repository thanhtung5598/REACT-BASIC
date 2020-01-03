import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import AccordionApp from "./AccordionApp";
// import CounterApp from "./CounterApp";
import RenderProps from "./RenderProps";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RenderProps />, document.getElementById('root'));

serviceWorker.unregister();
