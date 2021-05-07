import Child from './Child.jsx';
import React from 'react';


function Parent() {
    const [value, setValue] = React.useState("eddie");

    function handleChange(newValue) {
      console.log("parent rendering...")
      setValue(newValue);


    }

    // We pass a callback to Child
    return  (
      <div className="parent">
      <div className="wrapper">
        <h1>Helloe there, {value}!</h1>
      <Child value={value} onChange={handleChange} />
      </div>
      </div>
      )
    }



export default Parent;
