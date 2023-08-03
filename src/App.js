import React from "react";
import Jokes from "./Jokes";
import jokesData from "./jokesData";
import Signup from "./react-forms/Signup";
//import MyApp2 from "./conditional-rendering/MyApp2";
//import Form2 from "./react-forms/Form2"
//import MyForm from "./react-forms/MyForm"

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
            {/* <Form2/> */}
            {/* <MyForm/> */}
            <Signup/>
        </div>
                  
    )
}