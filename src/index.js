import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/Parent/Parent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( 
    <React.StrictMode >
        <Parent />
    </React.StrictMode>,
    document.getElementById('root')
);