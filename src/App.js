import React from "react";
import Jokes from "./Jokes";

export default function App(){
    return(
        <div>
            <Jokes
                setup="I got my dauhter a fridge for her birthday."
                punchline="I cant wait to see her face light up when she opens it"
            />
            <Jokes
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
            />
            <Jokes
                setup="Why dont pirates travel on mountain roads?"
                punchline="Scurvy"
            />
            <Jokes
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm"
            />
            <Jokes
                setup="Whats the best thing about Switzerland?"
                punchline="I dont know, but the flag is a big flag!"
            />
            <Jokes
                punchline="Its hard to explain puns to kleptomaniacs because they always take things literally"
            />
        </div>
        
        
    )
}