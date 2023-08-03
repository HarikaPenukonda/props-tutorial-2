import React from "react";

export default function MyForm(){
    const [formData,setFormData] = React.useState({
        firstName : "",
        lastName : "",
        email : "",
        comment : "",
        isFriendly : true,
        employment: "",
        favColor: "",
    })

    function handleChange(event){
        const {name,value,type,checked} = event.target
        setFormData(prevData => {
            return{
                ...prevData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    /*
    The way we have setup our form in react is now instead of having to go through everyone
    of inputs and gather the value right at the last second before we submit this to maybe an api,
    we have been doing that all along as we have been updating state on every change of the inputs
    and elements of the form
    */
    function handleSubmit(event){
        event.preventDefault() 
        /* preventing the default means it wont refresh our page and essentially re-render our app with all of these default values and state preventDefault just stops all the of that from happening
         and makes it so that we can run code the way that we actually want to */
        console.log(formData) // logs the object
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
                
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
                onChange={handleChange}
                name="isFriendly"

            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/>
            <br/>
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}

                />
                <label htmlFor="unemployed">Unemployed</label>
                <br/>
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                
                />
                <label htmlFor="part-time">Part-time</label>
                <br/>
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br/>
            </fieldset>
            <br/>
            <label htmlFor="favColor">What is your favourite color?</label>
            <br/>
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
                >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
        <br/>
        <br/>
        <br/>
        <button>Submit</button>
        {/* <input 
            type="submit"
            value="Submit it"
            /> */}

        </form>
        </div>
        
    )
}

/*  
    Submit : button inside form element its type is automatically submit bydefault
    clicking this button, because this button is found inside of the form will trigger the
    form `onSubmit` event handler



    select & option

    Radio Buttons :
        radio buttons are combination of checkboxes and text inputs. 
        each of these inputs will have its own unique values and this value is what will 
        actually get saved as the value is state, when this specific input is selected.

        radio buttons are little different because we need to specify what value the state
        should take on if the radio button is selected or checked. However, that means that
        we cannot do controlled components in the same way that we did with our inputs by setting
        the value equal to whatever the current value of state is but that doesn't mean we cannot
        control these components, its just that radio buttons are controlled in the same way 
        that checkboxes are contolled.

        if try to do checked={formData.employement} we run into a bug 
        when we are controlling the checked property we dont simply say checked={formData.employment} because 
        unlike a checkbox this is not a boolean value. we can make it a boolean value by checking
        if checked={formData.employment === "unemployed"} 

        Now the react is in charge of controlling this input rather than the input having its
        own html state

        Initally when we hit refresh the value of formData.employment is an empty string
        when i click unemployed, it runs the `onChange` which we have defined . we are pulling
        name, type, value and checked and setting the formData, bringing in all the old data 
        now we are using name which we had set to employment as the key for our state that
        we are updating and the type checkbox , in reality this is not checkbox  its a radio
        so it skips the checked value and instead uses this value inside <input/> that
        we defined, when we change state react re-renders our form, it checks to see if the 
        current formData.employment === `unemployed` when we check it becomes a true statement
        and therefore checked is true 

    Best practice:

    function handleChange(event){
        setFormData(prevData => {
            return{
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }

    we should not put the entire event.target.value and event.target.name inside setFormData
    A much better way is to destructre event.target and pull out the values that we need.

    const {name,value} = event.target
    and change [event.target.name] : event.target.value to -> [name] : value

    when we are handling checkbox there are few more things we need to pass in 
    one property that will come in is the type property on all of our inputs
        type="text",type="email",type="checkbox"

    lets bring in that `type` so that we can check whether or not the input that's making
    this `handleChange` function run is a type of checkbox and if it is we are also going
    to need the `checked` property.
    const {name,value,type,checked} = event.target
    This is either going to be true or false, depending on how the user has interacted with 
    the checkbox.

    when we are setting the form data we want everything else essentially to be the same
    however, the piece of state we want to update if its a checkbox in our case `isFriendly` 
    property should not take on value but rather should take on the value of checked. we can use
    ternary here.
        [name] : type === "checkbox" ? checked : value




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