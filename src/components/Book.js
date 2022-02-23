import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CommentList from './CommentList';

function Book(props) {

    const [showBooks, setShowBooks] = useState(true);

    const [showComments, setShowComments] = useState(false);

    const [showCharacters, setShowCharacters] = useState(false);

    // Show or hide comments
    const toggleComments = () => {
        setShowBooks(!showBooks);
        setShowComments(!showComments);
    };

    // Show or hide characters
    const toggleCharacters = () => {
        setShowBooks(!showBooks);
        setShowCharacters(!showCharacters);
    };

    return (
        <div>
            {
                showBooks ?
                    <>
                        <h2 onClick={toggleCharacters}>
                            {props.title}
                        </h2>

                        <p>By {props.author}</p>
                        
                        <p onClick={toggleComments}>
                            {props.commentCount} comments
                        </p>
                    </>
                :
                    showCharacters ? 
                    <>
                        <h2>
                            Characters of {props.title}
                        </h2>
                        <p onClick={toggleCharacters}>Hide Characters</p>
                        <CharacterList characters={props.characters}/>
                    </>
                    :
                        showComments ?
                        <>
                            <h2>
                                {props.commentCount} Comments on {props.title}
                            </h2>
                            <p onClick={toggleComments}>Hide Comments</p>
                            <CommentList bookId={props.bookId}/>
                        </>
                        :
                            null
            }
        </div>
    );
}

export default Book;