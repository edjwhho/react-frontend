import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/Parent/Parent.jsx';
import Boot from './components/Alert/boot';
import Topbar from './components/Topbar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( 
    <React.StrictMode >
        <Topbar />
        <Boot />
        <Parent />
    </React.StrictMode>,
    document.getElementById('root')
);