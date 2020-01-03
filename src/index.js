import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import AccordionApp from "./AccordionApp";
// import CounterApp from "./CounterApp";
// import RenderProps from "./RenderProps";
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexRouterDemo from "./IndexRouterDemo";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<IndexRouterDemo />, document.getElementById('root'));

serviceWorker.unregister();
