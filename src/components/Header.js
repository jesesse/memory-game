import React from "react";
import icon from '../assets/icon.png'
import icon2 from '../assets/score.png'
import '../styles/header.css'

const Header = (props) => {

    return (
        <div className="header">
            <img className="header--logo" src={icon} alt="logo" />
            <h1>OCCULT SYMBOLS</h1>
            <img src={icon2} alt="icon"></img>
            <h1>MEMORY GAME</h1>

            <img className="header--logo" src={icon} alt="logo" />


        </div>
    )
}

export default Header