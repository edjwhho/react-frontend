import button from 'react-bootstrap/Button';
import './Child.css' ;

function Child(props) {
    function handleChange(event) {
        console.log("child rendering...")
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
    
    function handleClick(event) {
        console.log("child click function...");
        props.onChange(event.target.value);
    }

    return  ( 
        <div className='child'>
        <input value={props.value} onChange={handleChange} />
        <button value={props.value} onClick={handleClick}> 
            Getdata
        </button>
        {props.value}
        </div>
    )
}

export default Child;