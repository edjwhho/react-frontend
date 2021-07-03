import React from 'react';
import Topbar from '../Topbar/Topbar';
import './Parent.css';


function Parent() {

    // We pass a callback to Child
    return  (
      <div>
      <Topbar />
      </div>
      )
    }

export default Parent;
