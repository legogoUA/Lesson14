import React from 'react';
import './CardAccount.css';

export const CardAccount = ({ 
    name, 
    city, 
    email,
    onLogOutAccount,
  }) => {
  return (
    <div className='container'>
      <h1>Card Account</h1>
      <div className="cardValue">
        <p>Name :</p>
        <p>{name}</p>
      </div>
      <div className="cardValue">
        <p>City :</p>
        <p>{city}</p>
      </div>
      <div className="cardValue">
        <p>Email :</p>
        <p>{email}</p>
      </div>

      <button onClick={onLogOutAccount}>Log Out</button>
    </div>
  )
}
