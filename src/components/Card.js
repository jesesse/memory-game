import React from "react";
import '../styles/card.css'

const Card = (props) => {

    return (
        <div className="card">
            <img className="card-img" src={props.cardData.url} alt="sd"/>
            <p>{props.cardData.name}</p>
        </div>
    )
}

export default Card