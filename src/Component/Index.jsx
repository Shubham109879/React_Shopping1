import React, { useState } from 'react'
import Login from './Login'
import './Shopping.css'

export default function Index() {

    const user={
        username:"Deep",
        wallet:25000
    }


    const [isClicked,setIsClicked]=useState(false);
    
    function handleOnClick()
    {
        setIsClicked(true)
    }

    if(isClicked)
    {
      return(
        <Login user={user}/>
      )
    }
    return (
    <>
     <h2>Welcome to Index Page: Shopping Application</h2>
     <button onClick={handleOnClick}>Login</button>
    </>
  )
}
