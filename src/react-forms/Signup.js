import React from "react";

export default function Signup(){

     /*
        Challenge : Connect the form to the local state

        1. Create a state object to store the 4 values we need to save. - done

        2. Create a state object handleChange function that can manage the state
        of all the inputs and set it up correctly - done

        3. When the user clicks "sign up", check if the password and confirmation match 
        each other. If so, log "successfully signed up" to the console. If not,
        log "passwords to not match" to the console

        4. Alse when submitting the form, if the person checked the `newsletter` checkbox,
        log "Thanks for signing up for our newsletter!" to the console.
    */

    const [formData,setFormData] = React.useState({
        email : "",
        password : "",
        confirmPassword : "",
        isMarketing : false,
    })

    function handleSubmit(event){
        event.preventDefault()
    }
    console.log(formData)

    function handleChange(event){
        const {name,value,type,checked} = event.target
        setFormData(prevData => {
            return{
                ...prevData,
                [name] : type === "checkbox" ? checked : value
            }
            
        })
    }

    

    return(
        <div>
             <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="isMarketing"
                        checked={formData.isMarketing}
                        onClick={()=>!formData.isMarketing && console.log("Thanks for signing up for our newsletter!")}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                    onClick={()=>formData.password === formData.confirmPassword ?
                    console.log("successfully signed up") :console.log("passwords to not match")}
                    >
                    Sign up
                </button>
            </form>
        </div>
        </div>
    )
}