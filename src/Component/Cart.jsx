import React, { useState } from 'react'
import Payment from './Payment'

export default function Cart({user}) {
  
    const[isClicked,setIsClicked]=useState(false)

    function handleOnClick()
    {
     setIsClicked(true)
    }
 
    if(isClicked)
    {
     return(
        <Payment user={user}/>
     )
    }
  
    return (
    <>
    <h2>Good to go?</h2>
    <button onClick={handleOnClick}>Make Payment</button>
    </>
  )
}
