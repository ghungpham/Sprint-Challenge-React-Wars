import React from 'react';
import './StarWars.css';

export default function Character (props){
    return (
        <div className = "char">
        <h4>Name: {props.character.name}</h4>
        <h4>Birth Year: {props.character.birth_year}</h4>
        <h4>Gender: {props.character.gender}</h4>
        <h4>Mass: {props.character.mass} kg</h4>
        <h4>Height: {props.character.height} cm</h4>
        <h4>Hair Color: {props.character.hair_color} </h4>
       

        </div>
    )

};