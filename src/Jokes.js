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
             <p><strong>Setup: </strong>{props.setup}</p>
             <p><strong>Punchline: </strong>{props.punchline}</p>
        </div>
       
    )
}