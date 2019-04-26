import React from 'react';
import './StarWars.css';
import Character from './Character';

export default function CharacterList (props) {
    return(
        <div className= "charlist">
        {props.starwarsChars.map(character => (
            <Character character = {character} key = {character.edited} />
        ))
        }
        </div>
    )
}