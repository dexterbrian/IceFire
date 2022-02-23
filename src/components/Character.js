import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Character(props) {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        Axios.get(props.characterUrl).then((response) => {
            setCharacter(response.data);
        }).catch((e) => {
            console.log(e);
        });
    }, [props.characterUrl]);
    
    return(
        <div>
            <h2>{character.name}</h2>
            <p>{character.gender}</p>
            <p>Born {character.born}</p>
        </div>
    );
}

export default Character;