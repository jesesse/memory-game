import React, { useEffect } from "react";
import Card from "./Card";
import { svgs }  from "../assets/card-images";
import '../styles/gameboard.css'

const Gameboard = (props) => {

    const [cardData, setCardData] = React.useState([])

    React.useEffect(()=>{
        setCardData(()=>{
            let cardDataArray = [];
            for(let i = 0; i < svgs.length; i++){
                let cardData = {
                    url: svgs[i],
                    name: i,
                    id: i
                }
                cardDataArray.push(cardData)
            }
            return cardDataArray;
        })
    }, [])

    const cardElements = cardData.map(data => {
        return <Card key={data.id} cardData={data}></Card>
    })

    return(
        <div className="gameboard--container">
            <div className="gameboard">
                {cardElements}
            </div>
        </div>
    )
}

export default Gameboard