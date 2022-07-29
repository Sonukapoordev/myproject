import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
//import img from './Image/log2.png'
import Card_api from "./home_card"
import Cards from "./card_home"
const Card = () => {
   
    const [cardData, setCardData] = useState(Card_api);
    return (
        <>
         <Cards cardData={cardData} />
        </>
    )
}

export default Card
