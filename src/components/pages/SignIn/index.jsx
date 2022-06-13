import axios from "axios";
import { useState, useContext } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TokenContext from "../../../contexts/tokenContext";

import Header from "../../Header/";

export default function SignIn() {
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false);
  const { setToken } = useContext(TokenContext);

  function validateSignIn() {
    return signinData.email?.length > 0 &&
        signinData.password?.length > 0
  }

  function handleSignup(e) {
    e.preventDefault();

    if(!validateSignIn()) {
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
    const URL = `http://localhost:4000/signin`
    axios.post(URL, signinData).then(response => {
      setToken(response.data);
      navigate('/home');
    }).catch(err => console.log(err));
    setLoading(false);

  }


  return (
    <SignUpPage> 
      <Header active="signin"/>
      <form onSubmit={handleSignup}> 
        <input 
          type="email" 
          placeholder="E-mail" 
          value={signinData.email} 
          disabled={loading} 
          onChange={e => {
          setSigninData({...signinData, email: e.target.value});
        }}/>
        <input 
          type="password" 
          placeholder="Senha" 
          value={signinData.password} 
          disabled={loading} 
          onChange={e => {
          setSigninData({...signinData, password: e.target.value});
        }}/>
        <button 
          className={!validateSignIn() && 'disabled'} 
          type="submit" disabled={!validateSignIn()}>Criar conta</button>
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