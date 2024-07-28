import React, { useState } from 'react'

export default function Payment({user}) { 
    const[isClicked,setIsClicked]=useState(false)
    
    
    function handleOnClick()
    {
       setIsClicked(true)
    }
    
    if(isClicked)
    {
        return (
            <>
            <h2>Payment Details</h2>
            <h4>Username: {user.username}</h4>
            <h4>Wallet: {user.wallet}</h4>
             <button onClick={handleOnClick}>Pay</button>
             <h4>Updated Wallet: {user.wallet-5000}</h4>
            </>
          ) 
    }
    return (
    <>
    <h2>Payment Details</h2>
    <h4>Username: {user.username}</h4>
    <h4>Wallet: {user.wallet}</h4>
     <button onClick={handleOnClick}>Pay</button>
     
    </>
  )
}
