import React from "react";

/*
    Challenge:
        Set up a React app from scratch
        - Render an <App/> component
            - App should render 4-5 <Joke/> components
            - Each Joke should recieve a setup prop and punchline prop 
            and render those however we would like
    
*/

export default function Jokes(props){
    return(
        <div>
             {props.setup && <p><strong>Setup: </strong>{props.setup}</p>}
             {/* If props.setup is true then render the thing on the right side of && operator
             If it is false, it will not render anything at all */}
             <p><strong>Punchline: </strong>{props.punchline}</p>
             <hr/>
        </div>
       
    )
}