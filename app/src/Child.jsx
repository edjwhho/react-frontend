function Child(props) {
    function handleChange(event) {
        console.log("child rendering...")
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
  
    return  ( 
        <input value={props.value} onChange={handleChange} />
    )
}

export default Child;