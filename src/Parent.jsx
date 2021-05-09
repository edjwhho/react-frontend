import Child from './Child.jsx';
import Tables from './Table';
import Aggrid from './Aggrid.jsx';
import React from 'react';

function Parent() {
    const [value, setValue] = React.useState("eddie");

    function handleChange(newValue) {
      console.log("parent rendering...")
      setValue(newValue);
    }

    // We pass a callback to Child
    return  (
      <div className="parent" style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}
        >
          <div className="wrapper">
            <h1>Helloe there, {value}!</h1>
          <hr />
            <Child value={value} onChange={handleChange} />
          </div>
        <hr />
          <div className="table">
            <Tables />
          </div>
        <hr />
          <div className="aggrid">
            <Aggrid />
          </div>
      </div>
      )
    }

export default Parent;
