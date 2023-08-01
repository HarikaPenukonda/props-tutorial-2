import React from "react";
import Jokes from "./Jokes";
import jokesData from "./jokesData";
//import MyApp2 from "./conditional-rendering/MyApp2";
import Form2 from "./react-forms/Form2"

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
            <Form2/>
        </div>
                  
    )
}