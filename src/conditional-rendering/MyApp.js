import React from "react";

export default function MyApp(){
    const [messages] = React.useState(["a","b"])
    /*
        challenge:
            - only display the <h1> below if there are unread messages
    */ 

    return(
        <div>
            {messages.length > 0 && <h1>You have unread {messages.length} messages!</h1>}
            {/* {messages.length && <h1>You have unread {messages.length} messages!</h1>} */}
        </div>
    )
}