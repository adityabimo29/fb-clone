import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navbar from './Navbar';
import Content from './Content';
import Foot from './Foot';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
        <div>
        <Navbar />
        <Content />
        <Foot />
        </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
