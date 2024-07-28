import React, { useState } from 'react'
import Cart from './Cart'
import './Shopping.css'

export default function Shopping({user}) {
  
    const[isClicked,setIsClicked]=useState(false)

    function handleOnClick()
    {
     setIsClicked(true)
    }
 
    if(isClicked)
    {
     return(
        <Cart user={user}/>
     )
    }
  
    return (
    <>
    <h4>Got what you were looking for?</h4>
    <button onClick={handleOnClick}>Add to Cart</button>
    </>
  )
}
