import React from "react";

export default function MyApi(){
    const [starWarData,setStarWarData] = React.useState({})
    
    // 1. GET the data (fetch)
    // 2. Save the data to state

    //console.log("Component rendered")
    
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarData(data))
    
    //    {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
    return(
        <div>
            <pre>{JSON.stringify(starWarData,null,2)}</pre>
        </div>
    )
}

/*
    Behind the scenes

    console.log("Component rendered") - it runs infinite loop

    The reason we are stuck in an infinite loop is because this fetch lives on
    sort of the top-level of our component, because of that anytime the component
    renders it is going to call fetch and everytime it calls fetch it is going to set
    the star wars data which is updating our state and therefore causing react to re-render
    this component and its running fetch again, setting the state re-rending the 
    component calling fetch again setting the state re-rendering the component.

*/