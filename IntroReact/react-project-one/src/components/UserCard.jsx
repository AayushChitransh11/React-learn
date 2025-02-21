import React from 'react'
import pic from '../assets/pic.svg'
import "./UserCard.css" 
const UserCard = (props) => {
  return (
    <div className="user-container">
        <p id="user-name">{props.name}</p>
        <img src={pic} alt="AAyush" id="user-image"></img>
        <p id="user-desc">{props.desc}</p>
       
    </div>
  )
}

export default UserCard
