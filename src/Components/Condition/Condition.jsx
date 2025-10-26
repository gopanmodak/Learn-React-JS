import React, { useState } from 'react'
import LogIn from '../LogInPage/LogInPage'
import Home from '../../HomePage/Home'

const Condition = () => {
    const [isLogeIn]=useState(true)
    
  return (
    <div>
     {isLogeIn?<Home/>:<LogIn/>}

    </div>
  )
}

export default Condition