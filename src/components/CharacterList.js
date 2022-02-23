import React from 'react';
import Character from './Character';

function CharacterList(props) {

    return (
        <div>
            {
                props.characters.map(character => (
                    <Character characterUrl={character}/>
                ))
            }
        </div>
    );
}

export default CharacterList;