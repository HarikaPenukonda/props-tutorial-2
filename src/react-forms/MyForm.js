import React from "react";

export default function MyForm(){
    const [formData,setFormData] = React.useState({
        firstName : "",
        lastName : "",
        email : "",
        comment : "",
        isFriendly : true,
    })
   console.log(formData)

    function handleChange(event){
        setFormData(prevData => {
            return{
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }

    return(
        <div>
            <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                value={formData.comment}
                onChange={handleChange}
                name="comment"
                placeholder="your comment"
            />
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}

            />
            <label htmlFor="isFriendly">Are you friendly?</label>
        </form>
        </div>
        
    )
}

/*  

    checkbox :
        hold boolean values

        htmlFor : when we have a label that is supposed to be tied to another input, we have
        couple of options, we could nest the input directly inside the children of the label,
        what it does is if the label gets clicked it will automatically propogate that click 
        down to the input.
        If we keep the label as its own seperate element and point that label using htmlFor
        to the id of the <input/> so that they are associated to the one and the other.

        In the plain html we are probably are just using `for` but the underlying dom element
        is really called htmlFor

        we use `checked` property instead of value property, because a checkbox is checked or 
        unchecked. The value we put here is checked needs to be a boolean

        As the default value is true in our code so the box is checked we are having react dictate 
        to the box that it is checked in fact because thats what state is.

        when we are trying to uncheck it doesnt work because we have been looking at 
        event.target.value however with checkbox we are not looking at the value property
        instead we are looking at the checked property
        

    html form textarea vs react form textarea
        In regular html textarea is a little different than an input because it is not selfclosing
        it has its own seperate closing tag.
        In html whatever we put inside the opening and closing tags is the value of the text area

        The react textarea is much more similar to a text-based input, so there is no closing tag
        and just like our inputs we are going to add `value` property to it and that is going 
        to be the value inside the text area.


    Controlled Inputs
        In this case, in the markup inside of our inputs (firstname, lastname and email)
        each of these inputs in effect is holding its own state.
        
        In a regular html form where no react is involved at all when the user types into
        the input box essentially that input box is maintaining its own state .
        
        In this case we have two pieces of state:
            1. one is being held by the input box just in regular html
            2. other is updating on every keystroke held in our react code.
        
        ofCourse, we have set it up so that the state of our input box then perfectly gets
        mirrored by the state in react. However, a good practice in react is to make it so that
        our react state is what drives the state that's visible inside the input box.

        To do this simply add a value property to each one of our inputs 

        visually we do not see any difference, conceptually however when i type into the 
        firstname `bob` the value of this input box is no longer controlled by the input
        but rather by react.

        Now the react controls the input value.

*/

/*
    - In handleChange() in this parameter we can actually recieve as a part of my event listener function.
    - In this case, I dont get to decide that actuallu gets passed to my handleChange event listener function
    instead, what we get passed by the browser is an event object `event` which has a lot of information if we 
    console.log it.
    - There is one such property in this `event` object is `target`, if we log the target we will see
    ` <input type="text" placeholder="First Name">` the dom object that triggered this event.
    - That dom object has lot of properties, we use `value` property 
    - When we type a in input it logs "a" as we are logging the current value on every keystroke of that specific
    input box
*/ 

/*
    React Forms vs Forms
       In the old days, we would create a form in our html and we would give it an
       action which had the url usually of some kind of php file that would process our request
       form, we would give it a method (post) and when our form was submitted through some sort of
       submit button, php would pick everything up from there and process the data from the form.

       In our vanilla javascript, the selector gets the form, it adds a submit event listener and the
       function that runs whenever the form is submitted would simply gather all the values together and 
       then submit it an api somehow.

       when we are submitting our form, it would gather all the data immediately at the very
       end of the process and then submit it immediately after gathering it.

       ** How is this different from react?
       The main difference in react is that instead of waiting until the very end of the process and 
       filling out the form when the form is submitted and then gathering the data.
       instead what we do is we create state and every keystorke change or checkbox change or radio change or button 
       change whatever it might be, we update state and therefore we are watching these inputs every keystroke or every 
       change that's made to our form then when the time to submit comes there is no more work really to be done we already 
       have gathered the data and we simply submit that to our api and pass in the state that we have been tracking all along

*/

 /*
    console.log(event)
            SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
            bubbles : true
            cancelable : false
            currentTarget : null
            defaultPrevented : false
            eventPhase : 3 
            isDefaultPrevented : ƒ functionThatReturnsFalse()
            isPropagationStopped : ƒ functionThatReturnsFalse()
            isTrusted : true
            nativeEvent : InputEvent {isTrusted: true, data: 'b', isComposing: false, inputType: 'insertText', dataTransfer: null, …}
            target : input
            timeStamp : 14484
            type : "change"
            _reactName : "onChange"
            _targetInst : null
            [[Prototype]]: Object

    console.log(event.target) <input type="text" placeholder="First Name">
        */