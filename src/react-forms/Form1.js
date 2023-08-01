import React from "react";

export default function Form1(){
    return(
        <div>
            <label>
                Text input : <input name="my-input"/>
            </label>
            <hr/>
            <label>
                Checkbox input : <input type="checkbox" name="my-checkbox"/>
            </label>
            <hr/>
            <p>
                Radio Buttons : 
                <label>
                Option 1 <input type="radio" name="myRadio" value="option-1"/>
                </label>
                <label>
                Option 2<input type="radio" name="myRadio" value={"option-2"}/>
                </label>
                <label>
                Option 3<input type="radio" name="myRadio" value={"option-3"}/>
                </label>
                
            </p>
        </div>
    )
}