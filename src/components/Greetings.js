import React from "react";
 
const Greetings=(props)=>{

    return(
        <div>
            <h1>Hello {props.name}!</h1>
            <p>It's nice to meet you</p>
        </div>
    );

}
export default Greetings;