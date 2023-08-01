import React from "react";

export default function MyApp(){
    const [firstName, setFirstName] = React.useState("")
    
    function handleChange(event){
        console.log(event.target.value)
    }
    return(
        <form>
            <input
                type="text"
                placeholder="First Name"
                // listen for any changes that happen to this input
                onChange={handleChange}
            />
        </form>
    )
}

/*
    - In handleChange() in this parameter we can actually recieve as a part of my event listener function.
    - In this case, I dont get to decide that actuallu gets passed to my handleChange event listener function
    instead, what we get passed by the browser is an event object `event` which has a lot of information if we 
    console.log it.
    - There is one such property in this `event` object is `target`, if we log the target we will see
    ` <input type="text" placeholder="First Name">` the dom object that triggered this event.
    - That dom object has lot of properties, we use `value` property 
    - When we type a in input it logs "a" as we are logging the current value on every keystroke of that specific
    input box
*/ 