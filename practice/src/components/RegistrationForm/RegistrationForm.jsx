import React from 'react';
import './RegistrationForm.css';

export const RegistrationForm = ({
  name, 
  city, 
  email, 
  password, 
  handleChangeName, 
  handleChangeCity, 
  handleChangeEmail, 
  handleChangePassword,
  onSubmitForm,
}) => {
  return (
    <div className='container'>
      <h1>Registration Form</h1>
      <form>
        <div className="div">
          <label>Name</label>
          <input
            className='form__input'
            value={name}
            onChange={event => handleChangeName(event)}
            placeholder='Name'
          ></input>
        </div>
        <div className="div">
          <label>City</label>
          <input
            className='form__input'
            value={city}
            onChange={event => handleChangeCity(event)}
            placeholder='City'
          ></input>
        </div>
        <div className="div">
          <label>Email</label>
          <input
            className='form__input'
            value={email}
            onChange={event => handleChangeEmail(event)}
            placeholder='Email'
          ></input>
        </div>
        <div className="div">
          <label>Password</label>
          <input
            className='form__input'
            value={password}
            onChange={event => handleChangePassword(event)}
            placeholder='Password'
          ></input>
        </div>

        <button onClick={onSubmitForm}>Save</button>
      </form>
    </div>
  )
}
