import React, { useId } from "react";

export default function Form2(){
    const yourAgeId = useId();
    /* useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. */ 
    return(
        <div>
        <label>
            Your first name : <input type="text" name="firstname"/>
        </label>
        <hr/>
        <label htmlFor={yourAgeId}>Your age : </label>
        <input id={yourAgeId} type="number" name="age"/>
    </div>
    )
}