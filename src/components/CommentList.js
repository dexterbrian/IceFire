import Axios from "axios";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function CommentList(props) {

    const [comments, setComments] = useState([]);

    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        Axios.get("https://icefireapi.herokuapp.com/public/listComments/" + props.bookId).then((response) => {
            setComments(response.data.comments);
        }).catch((e) => {
            console.log(e);
        });
    }, [props.bookId]);

    // Submitting a new comment
    const handleSubmit = (event) => {
        event.preventDefault();

        Axios.post("https://icefireapi.herokuapp.com/public/addComment", {
            bookId: props.bookId,
            comment: newComment
        }).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Type your comment here"/>

                <input type="submit"/>
            </form>

            {
                comments.map((comment) => (
                    <Comment ipAddress={comment.ipAddress} comment={comment.comment} date={comment.date}/>  
                ))
            }
            
        </div>
    );
}

export default CommentList;