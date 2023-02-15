import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFountPage = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/')
  }
  return (
    <div>
      <h1>404 Not Found </h1>
      <button onClick={handleClick}> Go to HomePage</button>
      
    </div>
  )
}

export default NotFountPage
