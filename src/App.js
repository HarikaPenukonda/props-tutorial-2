import React from "react";
import Jokes from "./Jokes";
import jokesData from "./jokesData";
//import MyApp2 from "./conditional-rendering/MyApp2";
import Form1 from "./react-forms/Form1"

export default function App(){
    const jokeElement = jokesData.map(joke => {
        return <Jokes 
                setup={joke.setup}
                punchline={joke.punchline}
                    
        />
    })
    return(
        <div>
            {/* {jokeElement} */}
            {/* <MyApp2/> */}
            <Form1/>
        </div>
                  
    )
}