import React from 'react'
import './card-list.style.scss'
import Card from '../card/Card';

const CardList =(props)=>{
return <div className='card-list'>
    {props.cartoons.map(cartoon => (
    
    <Card key={cartoon.id} cartoon={cartoon}/>))}

    </div>

} 
   

export default CardList
