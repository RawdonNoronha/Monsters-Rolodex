import React from "react";
import './card.styles.css'

export const Card = (props) =>{
    return(
        <div className="card-container">
        <img alt="monster" width={200} height={200} src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
    )
}