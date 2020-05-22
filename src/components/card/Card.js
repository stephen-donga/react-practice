import React from 'react'
import './card.style.scss'

const Card = (props)=> {
    return (
        <div className = 'card-container'>
            <img alt='Cartoon'src ={`https://robohash.org/${props.cartoon.id}?set=set2&size=180x180`} />
           <h1>{ props.cartoon.name }</h1> 
           <h3>{props.cartoon.email}</h3>
        </div>
    )
}

export default Card
