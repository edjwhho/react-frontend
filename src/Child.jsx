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
        <div>
        <input value={props.value} onChange={handleChange} />
        <button value={props} onClick={handleClick}> 
            Getdata
        </button>
        </div>
    )
}

export default Child;