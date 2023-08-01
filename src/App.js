import React from "react";
import Jokes from "./Jokes";
import jokesData from "./jokesData";
import MyApp from "./conditional-rendering/MyApp";

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
            <MyApp/>
        </div>
                  
    )
}