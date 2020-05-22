import React from 'react'
import './search-box.style.scss'

export const SearchBox =({placeholder, handleChange})=> {
    return (
      
           <input type='search'
           className='search-box'
           placeholder= {placeholder}
           onChange={handleChange}/> 
       
    )
}

 
