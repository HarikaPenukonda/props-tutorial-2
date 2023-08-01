import React from "react";

/*
   Challenge 1 :  
   - Create state `isShown` (boolean, default to `false`)
   - Add a button that toggles the value back and forth
*/

export default function Jokes(props){
    const [isShown,setIsShown] = React.useState(false)

    function handleClick(){
        setIsShown(prevState => !prevState)
    }

    return(
        <div>
             {props.setup && <p><strong>Setup: </strong>{props.setup}</p>}
             {/* If props.setup is true then render the thing on the right side of && operator
             If it is false, it will not render anything at all */}
            {isShown ? <p><strong>Punchline: </strong>{props.punchline}</p> : " "}
            <br></br>
             <button onClick={handleClick}>Click Me for Answer!</button>
             <hr/>
        </div>
       
    )
}