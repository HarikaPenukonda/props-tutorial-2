import React from "react";

export default function MyApp2(){
    const [messages,setMessages] = React.useState([])

    /*
        Challenge 1:
            - If there are no unread messages, display "You are all caught up"
            - If there are > 0 unread messages, display "You have <n> unread message(s)"
                - If there is exactly 1 unread message, It should read "message" singular
    */ 

    return(
        <div>
        {
            messages.length === 0 ? <h1>You are all caught up!</h1> : <h1>You have {messages.length} unread message{messages.length>1 && "s"}</h1>
        }
            {/* <h1>{messages.length === 1 ? `You have ${messages.length} unread message` : `You have ${messages.length} unread messages`}</h1>             */}
        </div>
    )
}