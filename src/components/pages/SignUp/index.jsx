import axios from 'axios';
import dotenv from 'dotenv';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../Header';

dotenv.config();

export default function SignUp() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false);

  function validateSignUp() {
    return signupData.name?.length > 0 &&
        signupData.email?.length > 0 &&
        signupData.password?.length > 0 &&
        signupData.confirmPassword?.length > 0 &&
        signupData.password === signupData.confirmPassword 
  }

  function handleSignup(e) {
    e.preventDefault();

    if(!validateSignUp) {
      confirmAlert({
        message: 'Invalid input',
        buttons: [
          {
            label: 'OK',
            onClick: () => null
          }
        ]
      })
    }
    setLoading(true);
    const URL = `http://localhost:4000/signup`
    axios.post(URL, signupData).then(response => {
      navigate('/signin');
    }).catch(err => console.log(err));
    setLoading(false);

  }


  return (
    <SignUpPage> 
      <Header active="signup"/>
      <form onSubmit={handleSignup}> 
        <input 
          type="text" 
          placeholder="Nome" 
          value={signupData.name} 
          disabled={loading} 
          onChange={e => {
          setSignupData({...signupData, name: e.target.value});
        }}/>
        <input 
          type="email" 
          placeholder="E-mail" 
          value={signupData.email} 
          disabled={loading} 
          onChange={e => {
          setSignupData({...signupData, email: e.target.value});
        }}/>
        <input 
          type="password" 
          placeholder="Senha" 
          value={signupData.password} 
          disabled={loading} 
          onChange={e => {
          setSignupData({...signupData, password: e.target.value});
        }}/>
        <input 
          type="password" 
          placeholder="Confirmar senha" 
          value={signupData.confirmPassword} 
          disabled={loading} 
          onChange={e => {
          setSignupData({...signupData, confirmPassword: e.target.value});
        }}/>
        <button 
          className={!validateSignUp() && 'disabled'} 
          type="submit" disabled={!validateSignUp()}>Criar conta</button>
      </form>
    </SignUpPage>
  );
}

const SignUpPage = styled.main`
  width: 80%;
  height: 100vh;
  margin: 0 auto;

  .disabled {
    opacity: .5;
  }

  button {
    transition: all .2s ease-in;
  }

  form {
    display: flex;
    row-gap: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    input {
      width: 75%;
      height: 60px;
      border-radius: 12px;
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border: 1px solid rgba(120, 177, 89, 0.25);
      color: #9c9c9c;
      padding-left: 15px;
    }

    button {
      width: 20%;
      height: 60px;
      background-color: #5d9040;
      color: #fff;
      border-radius: 12px;
      border: none;
      font-weight: 700;
    }
  }
`;
