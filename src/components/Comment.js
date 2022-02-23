import React from "react";

function Comment(props) {
    
    return (
        <div>
            <h2>{props.ipAddress} says</h2>
            <p>On {props.date}</p>
            <p>{props.comment}</p>
        </div>
    );
}

export default Comment;