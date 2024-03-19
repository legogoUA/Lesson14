import React, { useState } from 'react';
import './LogIn.css';
import { RegistrationForm } from '../RegistrationForm';
import { CardAccount } from '../CardAccount';

export const LogIn = () => {
  const [name, useName] = useState('');
  const [city, useCity] = useState('');
  const [email, useEmail] = useState('');
  const [password, usePassword] = useState('');
  const [account, useAccount] = useState(false);

  const HandleChangeEmail = (e) => {
    useEmail(e.target.value);
  }

  const HandleChangeName = (e) => {
    console.log(e.target.value);
    useName(e.target.velue);
  }

  const HandleChangeCity = (e) => {
    useCity(e.target.value);
  }

  const HandleChangePassword = (e) => {
    usePassword(e.target.value);
  }

  const OnSubmitForm = () => {
    useAccount(true);
  };

  const OnLogOutAccount = () => {
    useAccount(false);
  }

  return (
    <div className='container'>
      {account ?
        <CardAccount
          name={name}
          city={city}
          email={email}
          onLogOutAccount={OnLogOutAccount}
          /> :
        <RegistrationForm
          handleChangePassword={HandleChangePassword}
          handleChangeCity={HandleChangeCity}
          handleChangeName={HandleChangeName}
          handleChangeEmail={HandleChangeEmail}
          onSubmitForm={OnSubmitForm}
          name={name}
          city={city}
          password={password}
          email={email}
        />
      }
    </div>
  )
}
