import React from "react";

export default function MyApp2(){
    const [messages,setMessages] = React.useState(["a","b"])

    /*
        Challenge 1:
            - If there are no unread messages, display "You are all caught up"
            - If there are > 0 unread messages, display "You have <n> unread message(s)"
                - If there is exactly 1 unread message, It should read "message" singular
    */ 

    return(
        <div>
        {
            messages.length === 0 ? 
                <h1>You are all caught up!</h1> : <h1>You have {messages.length} unread {messages.length>1 ? "messages" : "message"}</h1>
        }
        </div>
    )
}