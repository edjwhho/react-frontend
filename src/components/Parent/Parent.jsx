import Child from '../Child/Child.jsx';
import Tables from '../Table/Table';
import Aggrid from '../Aggrid/Aggrid.jsx';
import Form from '../Form/Form.jsx';
import React from 'react';
import Boot from '../Alert/boot';
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
