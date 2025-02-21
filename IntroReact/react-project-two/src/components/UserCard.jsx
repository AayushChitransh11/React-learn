import React from 'react'
import ironman from '../assets/ironman.jpeg'
import './UserCard.css'
const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>Aayush</p>
        <img id='user-img' src={ironman} alt='ironman'/>
        <p id='user-desc'>I am ironman!</p>
      
    </div>
  )
}

export default UserCard
