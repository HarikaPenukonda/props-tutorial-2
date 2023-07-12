import React from "react";
import Jokes from "./Jokes";

/*
    Challenge : turn the strings in the array into <h3> elements 
*/ 

export default function App(){
    const colors = [
        <h3>Red</h3>,
        <h3>Yellow</h3>,
        <h3>Orange</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>
    ]
    return(
        <div>
            {colors}
            {/* <Jokes
                setup="I got my dauhter a fridge for her birthday."
                punchline="I cant wait to see her face light up when she opens it"
                isPun={false}
                upvote={12}
                downvote={3}
                comments={
                    [
                        {
                            author : "",
                            body : "",
                            title : ""
                        }
                    ]
                }
            />
            <Jokes
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                isPun={true}
                upvote={54}
                downvote={3}
            />
            <Jokes
                setup="Why dont pirates travel on mountain roads?"
                punchline="Scurvy"
                isPun={true}
                upvote={7}
                downvote={3}
            />
            <Jokes
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm"
                isPun={true}
                upvote={51}
                downvote={8}
            />
            <Jokes
                setup="Whats the best thing about Switzerland?"
                punchline="I dont know, but the flag is a big flag!"
                isPun={false}
                upvote={43}
                downvote={7}
            />
            <Jokes
                punchline="Its hard to explain puns to kleptomaniacs because they always take things literally"
                isPun={true}
                upvote={33}
                downvote={5}
            /> */}
        </div>
        
        
    )
}